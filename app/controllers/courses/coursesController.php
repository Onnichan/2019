<?php 
	require ROOT . FOLDER_PATH . "/app/models/courses/coursesModel.php";
	require ROOT . FOLDER_PATH . "/system/libs/Session.php";

	class coursesController extends Controller
	{

		public function __construct()
		{
			$this->model = new coursesModel();
			
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