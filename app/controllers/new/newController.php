<?php 

	require ROOT . "/esis.library.unjbg/app/models/new/newModel.php";
	require ROOT . "/esis.library.unjbg/system/libs/Session.php";
	
	class newController extends Controller
	{
		private $model; 
		public $idusuario;
		public $modal = false;
		public $reserva;
		public $sancion;
		
		public function __construct()
		{
			$this->model = new newModel();
			$this->session = new Session;
			if ($_GET['title_text'] != null) {
				$this->title = $_GET['title_text'];
				$this->idtext = $_GET['id'];
				explode(" ",$this->title);
				explode(" ",$this->idtext);
			}

			if(!empty($this->session->getAll())){
				$this->idusuario = $this->session->get('usuario');
			} else {
				$this->idusuario = 0;
			}

			

			if($this->idusuario != 0){
				$peticionSancion = $this->model->MostrarDetalleSancion($this->idusuario);
				$petsancion = $peticionSancion->fetch_array();
				if(!is_null($petsancion['id_sancion'])){
					if (time() >= strtotime($petsancion['fecha_sancion_final'])){
						$this->sancion = false;
					} else {
						$this->sancion = true;
					}
				} else {
					$this->sancion = false;
				}


				if($this->sancion == false){
					$peticionReservar = $this->model->MostrarDetalleReserva($this->idusuario, $this->idtext);
					$petreservar = $peticionReservar->fetch_array();
					if(!is_null($petreservar['id_reserva'])){
						if($petreservar['fecha_entregado'] == '0000-00-00'){
							if(time() <= strtotime($petreservar['fecha_limite'])){
								$this->reserva = false;
							} else {
								$this->reserva = true;
							}
						} else {
							$this->reserva = true;
						}
					} else {
						$this->reserva = true;
					}
				} else {

				}

			} else {
				$this->reserva = false;
				$this->sancion = true;
			}

			
			
		}

		public function exec()
		{
			$this->AgregarTextoPedido();
		}

		public function AgregarTextoPedido()
		{
			$consulta = $this->model->MostrarDetalle($this->idtext);
			$cantidad = $this->model->MostrarCantidad($this->idtext);
			
			$param = array('consulta' => $consulta, 'title' => $this->title, 'idtext' => $this->idtext, 
							'idUsuario' => $this->idusuario, 'cantidad' => $cantidad, 
							'reserva' => $this->reserva, 'sancion' => $this->sancion);
			$this->render(__CLASS__, $param);
		}

		public function reserve(){
			
			$id = $_POST['id'];
			$this->model->InsertarReserva($id, $this->idusuario);
			
			//var_dump($idtext);
			//var_dump($datosUser);
			
			header("Location: /esis.library.unjbg/new/name?title_text=".$_POST['title_text']."&id=".$id."");
		}
	}
 ?>





