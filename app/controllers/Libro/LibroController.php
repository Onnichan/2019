<?php 

	require ROOT . "/esis.library.unjbg/app/models/Libro/LibroModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class LibroController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
				$this->model = new LibroModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarLibros(){
			$libro = $this->model->MostrarLibros();
			$autor = $this->model->MostrarAutores();
			$param = array('libro' => $libro, 'autor' => $autor);
			$this->render(__CLASS__, $param);
		}
		
	}

 ?>