<?php 

	require ROOT . "/esis.library.unjbg/app/models/NuevoArticulo/NuevoArticuloModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class NuevoArticuloController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new NuevoArticuloModel();
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
			$numautores = $_POST['cantidadautores'];
			$genero = $this->model->MostrarGeneros();
			$param = array('genero' => $genero, 'numautores' => $numautores);
			$this->render(__CLASS__, $param);
		}

		public function InsertarArticulo(){
			 $datos = $_POST;
			 $imagen = addslashes(file_get_contents($_FILES['FotoPortada']['tmp_name']));
			 $this->model->InsertarTexto($datos,$imagen);
			 $this->model->InsertarAutor($datos);
			 $this->model->InsertarColeccion($datos);
			 $this->model->InsertarArticulo($datos);
			 header("Location: /esis.library.unjbg/Articulo/MostrarArticulos");
		}

	}

 ?>