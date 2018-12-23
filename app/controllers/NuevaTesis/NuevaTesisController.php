<?php 

	require ROOT . "/esis.library.unjbg/app/models/NuevaTesis/NuevaTesisModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class NuevaTesisController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new NuevaTesisModel();
			$this->session = new Session();
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function CargarDatos(){
			$grado = $this->model->MostrarGrados();
			$genero = $this->model->MostrarGeneros();
			$param = array('grado' => $grado, 'genero' => $genero);
			$this->render(__CLASS__, $param);
		}

		public function InsertarTesis(){
			 $datos = $_POST;
			 $imagen = addslashes(file_get_contents($_FILES['FotoPortada']['tmp_name']));
			 $this->model->InsertarTexto($datos,$imagen);
			 $this->model->InsertarAutor($datos);
			 $this->model->InsertarColeccion($datos);
			 $this->model->InsertarTesis($datos);
			 header("Location: /esis.library.unjbg/Tesis/MostrarTesis");
		}

	}

 ?>