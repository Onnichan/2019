<?php 
	require ROOT . "/CIIS-2019/app/models/login/loginModel.php";
	require ROOT . "/CIIS-2019/system/libs/Session.php";

	class loginController extends Controller
	{

		private $model; 
		private $session;

		public function __construct()
		{
			$this->model = new LoginModel();
			$this->session = new Session();
		}
		
		public function exec(){
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
					header("Location: /CIIS-2019/login");
					$this->renderErrorMessage("*El usuario no existe");
				}
				else{
					if($param['password'] != $parametro['clave_organizador']){
						header("Location: /CIIS-2019/login");
						$this->renderErrorMessage("*La contraseña es incorrecta");
					}
					else{
						$this->session->add('usuario', $param['nombre']);
						header("Location: /CIIS-2019/inicio");
					}
				}
			}
		}

		public function salir(){
			$this->session->close();
			header("Location: /CIIS-2019/");
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