<?php 

	require ROOT . "/esis.library.unjbg/app/models/Tesis/TesisModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class TesisController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
				$this->model = new TesisModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarTesis(){
			$tesis = $this->model->MostrarTesis();
			$autor = $this->model->MostrarAutores();
			$param = array('tesis' => $tesis, 'autor' => $autor);
			$this->render(__CLASS__, $param);
		}
		
	}

 ?>