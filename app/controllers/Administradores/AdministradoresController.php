<?php 

  require ROOT . "/esis.library.unjbg/app/models/Administradores/AdministradoresModel.php";
  require ROOT . "/esis.library.unjbg/system/libs/Session.php";

  class AdministradoresController extends Controller
  {
    private $model;
    private $session;
    
    public function __construct()
    {
      $this->model = new AdministradoresModel;
      $this->session = new Session;
      if(empty($this->session->getAll())){
        header("Location: /esis.library.unjbg/Login");
      }
    }

    public function exec(){
      $param = array('nombre' => $this->session->get('usuario'));
      $this->render(__CLASS__, $param);
    }

    public function MostrarAdministradores(){
      $administrador = $this->model->MostrarAdministradores();
      $param = array('administrador' => $administrador);
      $this->render(__CLASS__, $param);
    }
    
  }

 ?>