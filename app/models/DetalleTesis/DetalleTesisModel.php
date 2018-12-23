<?php 

	class DetalleTesisModel extends Model
	{
		private $idAutor;
		private $idTexto;

		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarDetalleTesis($id){
			$query = "SELECT TEX.id_texto, nombre_texto, fecha_publicacion, num_paginas, cantidad_total, cantidad_stock, nombre_grado, foto_portada FROM tesis TES inner join Texto TEX on TEX.id_texto=TES.id_texto inner join grado G on G.id_grado=TES.id_grado WHERE TEX.id_texto=$id";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarAutores($id){
			$query = "SELECT CONCAT(nombre_autor,' ',apellido_autor) as nombre_autor FROM Autor A inner join ESCRIBE E on A.id_autor=E.id_autor WHERE id_texto=$id";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarGeneros($id){
			$query = "SELECT nombre_genero FROM genero G inner join coleccion C on G.id_genero=C.id_genero WHERE id_texto=$id and G.id_categoria=2";
			$res = $this->db->query($query);
			return $res;
		}

		public function InsertarEjemplar($datos){
			$query = "INSERT INTO ejemplar(id_texto, codigo_ejemplar, estado_ejemplar, disponible_ejemplar) VALUES('$datos[idTesis]','$datos[nombreejemplar]','1','1')";
			$this->db->query($query);

			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Ejemplar";
			}

			$query = "SELECT cantidad_total, cantidad_stock FROM texto WHERE id_texto='$datos[idTesis]'";
			$res = $this->db->query($query);

			$atributo = $res->fetch_array();
			$total = $atributo[cantidad_total] + 1;
			$stock = $atributo[cantidad_stock] + 1;
			$query = "UPDATE texto SET cantidad_total='$total', cantidad_stock='$stock' WHERE id_texto='$datos[idTesis]'";
			$this->db->query($query);
		}

	}

 ?>