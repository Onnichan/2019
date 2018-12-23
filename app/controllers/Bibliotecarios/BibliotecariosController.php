<?php 

	require ROOT . "/esis.library.unjbg/app/models/Bibliotecarios/BibliotecariosModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class BibliotecariosController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new BibliotecariosModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarBibliotecarios(){
			$bibliotecario = $this->model->MostrarBibliotecarios();
			$param = array('bibliotecario' => $bibliotecario);
			$this->render(__CLASS__, $param);
		}
		
	}

 ?>