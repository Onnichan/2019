<?php 

	class LoginModel extends Model
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
	}

 ?>