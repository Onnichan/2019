<?php 

	require ROOT . "/esis.library.unjbg/app/models/DetalleLibro/DetalleLibroModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class DetalleLibroController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
				$this->model = new DetalleLibroModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarDetalleLibros($id){
			$libro = $this->model->MostrarDetalleLibros($id);
			$autor = $this->model->MostrarAutores($id);
			$genero = $this->model->MostrarGeneros($id);
			$param = array('libro' => $libro, 'autor' => $autor, 'genero' => $genero, 'idLibro' => $id);
			$this->render(__CLASS__, $param);
		}

		public function InsertarEjemplar(){
			$datos = $_POST;
			$this->model->InsertarEjemplar($datos);
			header("Location: /esis.library.unjbg/DetalleLibro/MostrarDetalleLibros/$datos[idLibro]");
		}
		
	}

 ?>