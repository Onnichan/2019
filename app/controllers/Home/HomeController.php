<?php 
	require ROOT . "/esis.library.unjbg/app/models/Home/HomeModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class HomeController extends Controller
	{

		private $model;
		public $idusuario;

		public function __construct()
		{
			$this->model = new HomeModel();
			$this->session = new Session();
			if(!empty($this->session->getAll())){
				$this->idusuario = $this->session->get('usuario');
			} else {
				$this->idusuario = 0;
			}
		}
		
		public function exec(){
			//$param = array('nombre' => $this->session->get('usuario'));
			//$this->render(__CLASS__, $param);
			$this->MostrarTextoUsuario();
			
		}

		public function MostrarTextoUsuario(){
			$getTexto = $this->model->Mostrar_texto();
			$getUsuario = $this->model->MostrarDatosUsuario($this->idusuario);
			$param = array('getTexto' => $getTexto, 'getUsuario' => $getUsuario, 'idUsuario' => $this->idusuario);
			$this->render(__CLASS__, $param);
		}

		public function salir(){
			$this->session->close();
			header("Location: /esis.library.unjbg/");
		}
	}

 ?>