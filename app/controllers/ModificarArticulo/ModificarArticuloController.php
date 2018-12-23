<?php 

	require ROOT . "/esis.library.unjbg/app/models/ModificarArticulo/ModificarArticuloModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class ModificarArticuloController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new ModificarArticuloModel();
			$this->session = new Session();
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		public function CargarDatos($id){
			$genero = $this->model->MostrarGeneros();
			$articulo = $this->model->MostrarDetalleArticulo($id);
			$autor = $this->model->MostrarAutores($id);
			$param = array('genero' => $genero, 'articulo' => $articulo, 'autor' => $autor);
			$this->render(__CLASS__, $param);
		}

		public function ActualizarArticulo(){
			 $datos = $_POST;
			 $id = $datos['idTexto'];

			 if(isset($_FILES['FotoPortada'])){
			 	$imagen = addslashes(file_get_contents($_FILES['FotoPortada']['tmp_name']));
			 	$this->model->ActualizarTexto($datos, $imagen, $id);
			 }
			 else{
			 	$imagen = null;
			 	$this->model->ActualizarTexto($datos, $imagen, $id);
			 }
			 $this->model->InsertarAutor($datos, $id);
			 $this->model->ModificarColeccion($datos, $id);
			 $this->model->ActualizarArticulo($datos, $id);
			 header("Location: /esis.library.unjbg/DetalleArticulo/MostrarDetalleArticulo/$id");
		}

	}

 ?>