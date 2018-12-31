<?php 
	require ROOT . "/CIIS-2019/app/models/name/nameModel.php";
	require ROOT . "/CIIS-2019/system/libs/Session.php";

	class nameController extends Controller
	{

		public function __construct()
		{
			$this->model = new nameModel();
			
		}
		
		public function exec(){
			//$param = array('nombre' => $this->session->get('usuario'));
			//$this->render(__CLASS__, $param);
			$this->MostrarTextoUsuario();
			
		}

		public function MostrarTextoUsuario(){
			
			$this->render(__CLASS__);
		}

		public function salir(){
			
			header("Location: /CIIS-2019/");
		}
	}

 ?>