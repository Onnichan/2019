<?php 

	require ROOT . "/esis.library.unjbg/app/models/catalog/catalogModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	
	class catalogController extends Controller
	{
		public $idusuario;

		public function __construct()
		{
			$this->model = new catalogModel();
			$this->session = new Session;
			if ($_GET['search_title'] != null) {
				$this->search = $_GET['search_title'];
				explode(" ",$this->search);
			} else {
				$this->search = '';
			}
			
			if(!empty($this->session->getAll())){
				$this->idusuario = $this->session->get('usuario');
			} else {
				$this->idusuario = 0;
			}
		}

		public function exec(){
			$this->MostrarTextoEjemplarUsuario();
		}

		public function MostrarTextoEjemplarUsuario()
		{
			$consulta = $this->model->MostrarTextos($this->search);
			$queryResult = $this->model->MostrarNumTextos($this->search);
			$getUsuario = $this->model->MostrarDatosUsuario($this->idusuario);
			$param = array('consulta' => $consulta, 'queryResult' => $queryResult, 'search' => $this->search, 
							'getUsuario' => $getUsuario, 'idUsuario' => $this->idusuario);
			$this->render(__CLASS__, $param);
		}
		
		public function salir(){
			$this->session->close();
			header('Location: /esis.library.unjbg/catalog/search?search_title='.$this->search.'');
		}
		
	}

 ?>