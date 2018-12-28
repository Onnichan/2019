<?php 

	class speakersModel extends Model
	{
		
		public function __construct()
		{
			parent::__construct();
		}

		/*
		public function Login($usuario){
			$query = "SELECT codigo_organizador, clave_organizador FROM organizador 
						WHERE codigo_organizador = '$usuario'";
			$res = $this->db->query($query);
			$fila = $res->fetch_array();
			return $fila;
		}

		*/
	}

 ?>