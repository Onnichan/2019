<?php 

	require ROOT . "/esis.library.unjbg/app/models/DetalleArticulo/DetalleArticuloModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class DetalleArticuloController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new DetalleArticuloModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarDetalleArticulo($id){
			$articulo = $this->model->MostrarDetalleArticulo($id);
			$autor = $this->model->MostrarAutores($id);
			$genero = $this->model->MostrarGeneros($id);
			$param = array('articulo' => $articulo, 'autor' => $autor, 'genero' => $genero, 'idArticulo' => $id);
			$this->render(__CLASS__, $param);
		}

		public function InsertarEjemplar(){
			$datos = $_POST;
			$this->model->InsertarEjemplar($datos);
			header("Location: /esis.library.unjbg/DetalleArticulo/MostrarDetalleArticulo/$datos[idArticulo]");
		}
		
	}

 ?>