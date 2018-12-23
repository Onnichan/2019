<?php 

	require ROOT . "/esis.library.unjbg/app/models/Login/LoginModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";

	class LoginController extends Controller
	{
		private $model; 
		private $session;
		
		public function __construct()
		{
			$this->model = new LoginModel();
			$this->session = new Session();
		}

		public function exec()
		{
			$this->render(__CLASS__);
		}

		public function signin($param)
		{
			if(!$this->VerificarParametros($param)){
				$this->renderErrorMessage("*El usuario y la contraseña son obligatorios");
			}
			else{
				$parametro = $this->model->Login($param['nombre']);
				if(empty($parametro)){
					header("Location: /esis.library.unjbg/Login");
					$this->renderErrorMessage("*El usuario no existe");
				}
				else{
					if($param['password'] != $parametro['clave']){
						header("Location: /esis.library.unjbg/Login");
						$this->renderErrorMessage("*La contraseña es incorrecta");
					}
					else{
						$tipoUser = $this->model->TipoUsuario($param['nombre']);
						if ($tipoUser['id_tipousuario'] == 2){
							// echo $tipoUser['id_tipousuario'];
							$this->session->add('usuario', $param['nombre']);
							header("Location: /esis.library.unjbg/");
						} else {
							// echo $tipoUser['id_tipousuario'];
							$this->session->add('usuario', $param['nombre']);
							header("Location: /esis.library.unjbg/Inicio");
						}
						
					}
				}
			}
		}

		public function salir(){
			$this->session->close();
			header("Location: /esis.library.unjbg/Login");
		}

		public function VerificarParametros($param)
		{
			if(empty($param['nombre']) or empty($param['password'])){
				return false;
			}
			else{
				return true;
			}
		}

		public function renderErrorMessage($mesagge)
		{
			$parametro = array('error_message' => $mesagge);
			$this->render(__CLASS__, $parametro);
		}
	}
 ?>





