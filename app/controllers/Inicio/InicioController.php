<?php 

	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	require ROOT . "/esis.library.unjbg/app/models/Inicio/InicioModel.php";

	class InicioController extends Controller
	{
		private $session;
		
		public function __construct()
		{
			$this->model = new InicioModel();
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$this->CantidadTextos();
		}

		public function CantidadTextos(){
			$numlibros = $this->model->CantidadLibros();
			$numtesis = $this->model->CantidadTesis();
			$numarticulos = $this->model->CantidadArticulos();
			$param = array('numlibros' => $numlibros, 'numtesis' => $numtesis, 'numarticulos' => $numarticulos);
			$this->render(__CLASS__, $param);
		}

	}

 ?>