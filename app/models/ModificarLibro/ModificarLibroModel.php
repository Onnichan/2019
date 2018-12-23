<?php 

	class ModificarLibroModel extends Model
	{
		private $idAutor;
		private $idTexto;

		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarEdiciones(){
			$query = "SELECT * FROM edicion order by 1";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarEditoriales(){
			$query = "SELECT * FROM editorial order by 1";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarGeneros(){
			$query = "SELECT * FROM genero WHERE id_categoria=2 order by 1";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleLibro($id){
			$query = "SELECT T.id_texto as id_texto, nombre_texto, fecha_publicacion, num_paginas, cantidad_total, cantidad_stock, isbn_libro, nombre_edicion, nombre_editorial, nombre_genero, foto_portada FROM libro L inner join edicion E on L.id_edicion=E.id_edicion inner join texto T on T.id_texto=L.id_texto inner join editorial ED on ED.id_editorial=L.id_editorial inner join coleccion C on T.id_texto=C.id_texto inner join genero G on G.id_genero=C.id_genero WHERE T.id_texto=$id and C.id_categoria=2";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarAutores($id){
			$query = "SELECT A.id_autor as id_autor, nombre_autor, apellido_autor FROM autor A inner join escribe E on A.id_autor=E.id_autor WHERE id_texto=$id";
			$res = $this->db->query($query);
			return $res;
		}

		public function ActualizarTexto($datos, $imagen, $id){
			$this->idTexto = $id;
			if($imagen == null){
				$query = "UPDATE texto SET nombre_texto='$datos[nombre]', fecha_publicacion='$datos[publicacion]', num_paginas='$datos[paginas]', cantidad_total='$datos[cantidad]' WHERE id_texto='$id'"; 
			}
			else{
				$query = "UPDATE texto SET nombre_texto='$datos[nombre]', fecha_publicacion='$datos[publicacion]', num_paginas='$datos[paginas]', cantidad_total='$datos[cantidad]', foto_portada='$imagen' WHERE id_texto='$id'";
			}

			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo modificar Texto";
			}
		}

		public function InsertarAutor($datos, $id){
			$numautores = $datos['cantidadautores'];

			for($i=1;$i<=$numautores;$i++){
				$NombreA = "nombreautor" . $i;
				$apellidoA = "apellidoautor" . $i;
				
				$query = "SELECT id_autor FROM autor WHERE nombre_autor='$datos[$NombreA]' and apellido_autor='$datos[$apellidoA]'";
				$res = $this->db->query($query);
				
				if($res->num_rows == 0){
					$query = "INSERT INTO autor(nombre_autor, apellido_autor) VALUES('$datos[$NombreA]','$datos[$apellidoA]')";
					$this->db->query($query);
					if($this->db->affected_rows < 0){
						echo "-ERROR: No se pudo insertar Autor";
					}
					else{
						$this->idAutor = $this->db->insert_id;
						$this->ActualizarEscribe($i);
					}
				}	
				else{
					$fila = $res->fetch_array();
					$this->idAutor = $fila['id_autor'];
					$this->ActualizarEscribe($i);
				}
			}
		}

		public function ActualizarEscribe($indice){
			$res = $this->MostrarAutores($this->idTexto);
			for($i=1;$i<=$indice;$i++){
				$fila = $res->fetch_array();
			}
			$idAutor_Antiguo = $fila['id_autor'];

			$consulta = "SELECT id_escribe from escribe where id_autor='$idAutor_Antiguo' and id_texto='$this->idTexto'";
			$resul = $this->db->query($consulta);
			$fila = $resul->fetch_array();
			$idEscribe = $fila['id_escribe'];

			$query = "UPDATE escribe SET id_autor='$this->idAutor' WHERE id_escribe='$idEscribe'";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Escribe";
			}
		}

		public function ModificarColeccion($datos, $id){
			$query = "UPDATE coleccion SET id_genero='$datos[genero]' WHERE id_texto='$id' and id_categoria='2'";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo modificar Coleccion";
			}
		}


		public function ModificarEscribe($id){
			$query = "UPDATE escribe SET id_autor='$this->idAutor' WHERE id_texto='$id'";

			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo modificar Escribe";
			}
		}

		public function ActualizarLibro($datos, $id){
			$query = "UPDATE libro SET id_edicion='$datos[edicion]', id_editorial='$datos[editorial]', isbn_libro='$datos[isbn]' WHERE id_texto='$id'";

			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo modificar Libro";
			}
		}


	}

 ?>