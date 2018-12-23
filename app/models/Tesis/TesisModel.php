<?php 

	class TesisModel extends Model
	{
		private $idAutor;
		private $idTexto;

		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarTesis(){
			$query = "SELECT TEX.id_texto, nombre_texto, nombre_grado, fecha_publicacion, cantidad_stock FROM tesis TES inner join texto TEX on TES.id_texto=TEX.id_texto inner join grado G on G.id_grado=TES.id_grado";
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