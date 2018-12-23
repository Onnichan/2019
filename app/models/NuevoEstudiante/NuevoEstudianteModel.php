<?php 

	class NuevoAdministradorModel extends Model
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

		public function AgregarAdministrador($params)
	  	{
		    $id_usuario = $this->db->real_escape_string($params['id_usuario']);
		    $ident_usuario = $this->db->real_escape_string($params['ident_usuario']);
		    $id_tipousuario = $this->db->real_escape_string($params['id_tipousuario']);
		    $nombre_usuario = $this->db->real_escape_string($params['nombre_usuario']);
		    $apellido_usuario = $this->db->real_escape_string($params['apellido_usuario']);
		    $clave = $this->db->real_escape_string($params['clave']);
		    $email_correo = $this->db->real_escape_string($params['email_correo']);
		    $fecha_registro = $this->db->real_escape_string($params['fecha_registro']);
		    $foto_usuario = $this->db->real_escape_string($params['foto_usuario']);
		    $new_user = $this->db->real_escape_string($params['new_user']);

		    $sql = "INSERT INTO usuario (id_usuario,ident_usuario,1,nombre_usuario,apellido_usuario,clave,email_correo,fecha_registro,foto_usuario,new_user) VALUES ('$id_usuario','$ident_usuario','$id_tipousuario','$nombre_usuario','$apellido_usuario','$clave','$email_correo','$fecha_registro','$foto_usuario','$new_user')";
		    return $this->db->query($sql);
	  	}

	}

 ?>