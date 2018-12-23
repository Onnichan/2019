<?php 

	require ROOT . "/esis.library.unjbg/app/models/text/textModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	
	class textController extends Controller
	{
		private $model; 
		public $idusuario;
		
		public function __construct()
		{
			$this->model = new textModel();
			$this->session = new Session;
			if ($_GET['title_text'] != null) {
				$this->title = $_GET['title_text'];
				$this->idtext = $_GET['id'];
				explode(" ",$this->title);
				explode(" ",$this->idtext);
			} else {
				header('Location: /esis.library.unjbg/catalog/search?search_field=search_title&search_title=');
			}

			if(!empty($this->session->getAll())){
				$this->idusuario = $this->session->get('usuario');
			} else {
				$this->idusuario = 0;
			}
		}

		public function exec()
		{
			$this->MostrarTextoUsuario();
		}

		public function MostrarTextoUsuario()
		{
			$consulta = $this->model->MostrarDetalle($this->idtext);
			$getUsuario = $this->model->MostrarDatosUsuario($this->idusuario);
			$param = array('consulta' => $consulta, 'title' => $this->title, 'idtext' => $this->idtext, 
							'getUsuario' => $getUsuario, 'idUsuario' => $this->idusuario);
			$this->render(__CLASS__, $param);
		}

		public function salir(){
			$this->session->close();
			header('Location: /esis.library.unjbg/text/name?title_text='.$this->title.'&id='.$this->idtext.'');
		}
		
	}
 ?>





