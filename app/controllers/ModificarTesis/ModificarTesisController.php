<?php 

	require ROOT . "/esis.library.unjbg/app/models/ModificarTesis/ModificarTesisModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class ModificarTesisController extends Controller
	{
		private $model;
		private $session;
		
		public function __construct()
		{
			$this->model = new ModificarTesisModel();
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
			$grado = $this->model->MostrarGrados();
			$genero = $this->model->MostrarGeneros();
			$tesis = $this->model->MostrarDetalleTesis($id);
			$autor = $this->model->MostrarAutores($id);
			$param = array('grado' => $grado, 'genero' => $genero, 'tesis' => $tesis, 'autor' => $autor);
			$this->render(__CLASS__, $param);
		}

		public function ActualizarTesis(){
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
			 $this->model->ActualizarTesis($datos, $id);
			 header("Location: /esis.library.unjbg/DetalleTesis/MostrarDetalleTesis/$id");
		}

	}

 ?>