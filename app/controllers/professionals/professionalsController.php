<?php 
	require ROOT . FOLDER_PATH . "/app/models/professionals/professionalsModel.php";
	require ROOT . FOLDER_PATH . "/system/libs/Session.php";

	class professionalsController extends Controller
	{

		//private $model; 
		private $session; 

		public function __construct()
		{
			//$this->model = new LoginModel();
			$this->session = new Session();
		}
		
		public function exec(){
			$this->CargarDatos();
		}

		public function salir(){
			$this->session->close();
			header("Location: " . FOLDER_PATH . "/login");
		}

		public function CargarDatos()
		{
			$parametro = array('error_message' => '48');
			$this->render(__CLASS__, $parametro);
		}
		
	}

 ?>