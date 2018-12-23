<?php 

	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	require ROOT . "/esis.library.unjbg/app/models/Categorias/CategoriasModel.php";

	class CategoriasController extends Controller
	{
		private $session;
		
		public function __construct()
		{
			$this->model = new CategoriasModel();
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$this->CargarDatos();
		}

		public function CargarDatos(){
			$categoria = $this->model->MostrarCategorias();
			$editorial = $this->model->MostrarEditoriales();
			$param = array('categoria' => $categoria, 'editorial' => $editorial);
			$this->render(__CLASS__, $param);
		}

		public function InsertarCategoria(){
			$datos = $_POST;
			$this->model->InsertarCategoria($datos);
			header("Location: /esis.library.unjbg/Categorias");
		}

		public function InsertarEditorial(){
			$datos = $_POST;
			$this->model->InsertarEditorial($datos);
			header("Location: /esis.library.unjbg/Categorias");
		}

		public function ModificarCategoria(){
			$datos = $_POST;
			$this->model->ModificarCategoria($datos);
			header("Location: /esis.library.unjbg/Categorias");
		}

		public function ModificarEditorial(){
			$datos = $_POST;
			$this->model->ModificarEditorial($datos);
			print_r($datos);
			header("Location: /esis.library.unjbg/Categorias");
		}
	}

 ?>