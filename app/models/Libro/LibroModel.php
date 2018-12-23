<?php 

	class LibroModel extends Model
	{
		private $idAutor;
		private $idTexto;

		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarLibros(){
			$query = "SELECT T.id_texto, nombre_texto, isbn_libro, nombre_edicion, cantidad_stock FROM libro L inner join edicion E on L.id_edicion=E.id_edicion inner join Texto T on T.id_texto=L.id_texto";
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