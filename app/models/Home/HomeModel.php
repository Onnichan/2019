<?php 

	class HomeModel extends Model
	{
		
		public function __construct()
		{
			parent::__construct();
		}

		public function Mostrar_texto(){
			$query = "SELECT * FROM `v_mostrarlibroportada`";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDatosUsuario($idUsuario){
			$query = "SELECT ident_usuario, t.id_tipousuario, t.nombre_tipo, u.nombre_usuario, u.apellido_usuario, u.genero FROM usuario u
						INNER JOIN tipo_usuario t
						ON t.id_tipousuario = u.id_tipousuario
						WHERE u.ident_usuario = '".$idUsuario."'";
			$res = $this->db->query($query);
			return $res;
		}
		/*
		Eliminar todo este archivo, fue de prueba
		public function getNombre($id){
			$query = "SELECT nombre FROM contactos WHERE id = '$id'";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila;
		} 

		public function getDomicilio($id){
			$query = "SELECT nombre, domicilio FROM contactos WHERE id = '$id'";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila;
		} 
		*/
	}

 ?>