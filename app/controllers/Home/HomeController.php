<?php 
	require ROOT . FOLDER_PATH . "/app/models/Home/HomeModel.php";
	require ROOT . FOLDER_PATH . "/system/libs/Session.php";

	class HomeController extends Controller
	{

		public function __construct()
		{
			$this->model = new HomeModel();
			
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
			
			header("Location: " . FOLDER_PATH . "/");
		}
	}

 ?>