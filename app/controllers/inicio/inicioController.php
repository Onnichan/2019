<?php 
	require ROOT . "/CIIS-2019/app/models/inicio/inicioModel.php";
	require ROOT . "/CIIS-2019/system/libs/Session.php";

	class inicioController extends Controller
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

		public function CargarDatos()
		{
			
			$this->render(__CLASS__);
		}
		
	}

 ?>