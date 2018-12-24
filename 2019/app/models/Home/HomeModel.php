<?php 

	class HomeModel extends Model
	{
		
		public function __construct()
		{
			parent::__construct();
		}

		public function Mostrar_texto(){
			
		}

		public function MostrarDatosUsuario(){
			
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