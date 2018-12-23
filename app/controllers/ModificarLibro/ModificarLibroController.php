<?php 

	require ROOT . "/esis.library.unjbg/app/models/ModificarLibro/ModificarLibroModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class ModificarLibroController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new ModificarLibroModel();
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
			$edicion = $this->model->MostrarEdiciones();
			$editorial = $this->model->MostrarEditoriales();
			$genero = $this->model->MostrarGeneros();
			$libro = $this->model->MostrarDetalleLibro($id);
			$autor = $this->model->MostrarAutores($id);
			$param = array('edicion' => $edicion, 'editorial' => $editorial, 'genero' => $genero, 'libro' => $libro, 'autor' => $autor);
			$this->render(__CLASS__, $param);
		}

		public function ActualizarLibro(){
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
			 $this->model->ActualizarLibro($datos, $id);
			 header("Location: /esis.library.unjbg/DetalleLibro/MostrarDetalleLibros/$id");
		}

	}

 ?>