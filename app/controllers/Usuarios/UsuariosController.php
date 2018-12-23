<?php 

	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class UsuariosController extends Controller
	{
		private $session;
		
		public function __construct()
		{
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$param = array('nombre' => $this->session->get('usuario'));
			$this->render(__CLASS__, $param);
		}

		

	}

 ?>