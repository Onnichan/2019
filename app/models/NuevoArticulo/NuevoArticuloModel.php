<?php 

	class NuevoArticuloModel extends Model
	{
		private $idAutor;
		private $idTexto;

		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarGrados(){
			$query = "SELECT * FROM grado order by 1";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarGeneros(){
			$query = "SELECT * FROM genero WHERE id_categoria=2 order by 1";
			$res = $this->db->query($query);
			return $res;
		}

		public function InsertarTexto($datos, $imagen){
			$query = "INSERT INTO texto(nombre_texto, fecha_publicacion, num_paginas, cantidad_total, cantidad_stock, foto_portada) VALUES('$datos[nombre]', '$datos[publicacion]', '$datos[paginas]', '$datos[cantidad]', '$datos[cantidad]', '$imagen')";
					
			$this->db->query($query);

			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Texto";
			}
			else{
				$this->idTexto = $this->db->insert_id;
			}
		}

		public function InsertarAutor($datos){
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
						$this->InsertarEscribe();
					}
				}	
				else{
					$fila = $res->fetch_array();
					$this->idAutor = $fila['id_autor'];
					$this->InsertarEscribe();
				}
			}
		}

		public function InsertarColeccion($datos){
			$query = "INSERT INTO coleccion(id_texto, id_genero, id_categoria) VALUES('$this->idTexto','$datos[genero]','2')";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Coleccion";
			}
			$query = "INSERT INTO coleccion(id_texto, id_genero, id_categoria) VALUES('$this->idTexto','8','1')";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Coleccion";
			}
		}

		public function InsertarEscribe(){
			$query = "INSERT INTO escribe(id_autor, id_texto) VALUES('$this->idAutor', '$this->idTexto')";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Escribe";
			}
		}

		public function InsertarArticulo($datos){
			$query = "INSERT INTO articulo(id_texto) VALUES('$this->idTexto')";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Articulo";
			}
		}

	}

 ?>