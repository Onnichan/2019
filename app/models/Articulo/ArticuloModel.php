<?php 

	class ArticuloModel extends Model
	{
		private $idAutor;
		private $idTexto;

		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarArticulos(){
			$query = "SELECT T.id_texto, nombre_texto, fecha_publicacion, num_paginas, cantidad_stock FROM articulo A inner join texto T on T.id_texto=A.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarAutores(){
			$query = "SELECT id_texto, CONCAT(nombre_autor,' ',apellido_autor) as nombre_autor FROM Autor A inner join ESCRIBE E on A.id_autor=E.id_autor";
			$res = $this->db->query($query);
			return $res;
		}
	}

 ?>