<?php 

	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	require ROOT . "/esis.library.unjbg/app/models/Reservas/ReservasModel.php";

	class ReservasController extends Controller
	{
		private $session;
		
		public function __construct()
		{
			$this->model = new ReservasModel();
			$this->session = new Session;
			if(empty($this->session->getAll())){
				header("Location: /esis.library.unjbg/Login");
			}
		}

		public function exec(){
			$this->MostrarReservas();
		}

		public function MostrarReservas(){
			$reserva= $this->model->MostrarReservas();
			$param = array('reserva' => $reserva);
			$this->render(__CLASS__, $param);
		}
	}
 ?>