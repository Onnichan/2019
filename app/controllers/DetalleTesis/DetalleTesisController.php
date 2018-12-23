<?php 

	require ROOT . "/esis.library.unjbg/app/models/DetalleTesis/DetalleTesisModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class DetalleTesisController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
				$this->model = new DetalleTesisModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarDetalleTesis($id){
			$tesis = $this->model->MostrarDetalleTesis($id);
			$autor = $this->model->MostrarAutores($id);
			$genero = $this->model->MostrarGeneros($id);
			$param = array('tesis' => $tesis, 'autor' => $autor, 'genero' => $genero, 'idTesis' => $id);
			$this->render(__CLASS__, $param);
		}

		public function InsertarEjemplar(){
			$datos = $_POST;
			$this->model->InsertarEjemplar($datos);
			header("Location: /esis.library.unjbg/DetalleTesis/MostrarDetalleTesis/$datos[idTesis]");
		}
		
	}

 ?>