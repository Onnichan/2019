<?php 

	require ROOT . "/esis.library.unjbg/app/models/Articulo/ArticuloModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class ArticuloController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new ArticuloModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarArticulos(){
			$articulo = $this->model->MostrarArticulos();
			$autor = $this->model->MostrarAutores();
			$param = array('articulo' => $articulo, 'autor' => $autor);
			$this->render(__CLASS__, $param);
		}
		
	}

 ?>