<?php 
	require ROOT . "/CIIS-2019/app/models/speakers/speakersModel.php";
	require ROOT . "/CIIS-2019/system/libs/Session.php";

	class speakersController extends Controller
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
			header("Location: /CIIS-2019/login");
		}

		public function CargarDatos()
		{
			$parametro = array('error_message' => '48');
			$this->render(__CLASS__, $parametro);
		}
		
	}

 ?>