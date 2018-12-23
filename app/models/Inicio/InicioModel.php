<?php 

	class InicioModel extends Model
	{
		
		public function __construct()
		{
			parent::__construct();
		}

		public function TipoUsuario($usuario){
			$query = "SELECT 
						t.id_tipousuario FROM usuario u
						INNER JOIN tipo_usuario t
						ON t.id_tipousuario = u.id_tipousuario
						WHERE u.ident_usuario = '$usuario'";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila;
		}

		public function CantidadLibros(){
			$query = "SELECT count(*) as num_libros from libro";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila['num_libros'];
		}

		public function CantidadTesis(){
			$query = "SELECT count(*) as num_tesis from tesis";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila['num_tesis'];
		}

		public function CantidadArticulos(){
			$query = "SELECT count(*) as num_articulos from articulo";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila['num_articulos'];
		}
	}

 ?>