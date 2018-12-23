<?php 

	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	require ROOT . "/esis.library.unjbg/app/models/Sanciones/SancionesModel.php";

	class SancionesController extends Controller
	{
		private $session;
		
		public function __construct()
		{
			$this->model = new SancionesModel();
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$this->MostrarSanciones();
		}

		public function MostrarSanciones(){
			$sancion = $this->model->MostrarSanciones();
			$param = array('sancion' => $sancion);
			$this->render(__CLASS__, $param);
		}

		

	}

 ?>