<?php 

	require ROOT . "/esis.library.unjbg/app/models/Estudiantes/EstudiantesModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class EstudiantesController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new EstudiantesModel;
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function MostrarEstudiantes(){
			$estudiante = $this->model->MostrarEstudiantes();
			$param = array('estudiante' => $estudiante);
			$this->render(__CLASS__, $param);
		}
		
	}

 ?>