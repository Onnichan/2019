<?php 
	class ciis2018Controller extends Controller
	{

		public function __construct()
		{
			
		}
		
		public function exec(){
			//$param = array('nombre' => $this->session->get('usuario'));
			//$this->render(__CLASS__, $param);
			$this->MostrarTextoUsuario();
			
		}

		public function MostrarTextoUsuario(){
			
			$this->render(__CLASS__);
		}
	}

 ?>