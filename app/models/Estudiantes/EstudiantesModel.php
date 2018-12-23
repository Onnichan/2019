<?php 

	class EstudiantesModel extends Model
	{
		public function __construct()
		{
			parent::__construct();
		}

		public function Login($usuario){
			$query = "SELECT ident_usuario, clave FROM usuario WHERE ident_usuario = '$usuario'";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila;
		}

		public function MostrarEstudiantes(){
			$query = "SELECT * FROM usuario WHERE id_tipousuario=2";
			$res = $this->db->query($query);
			return $res;
		}
	}

 ?>