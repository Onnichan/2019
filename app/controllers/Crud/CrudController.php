<?php
require_once ROOT . FOLDER_PATH .'/app/models/Crud/CrudModel.php';
require_once LIBS_ROUTE .'Session.php';


class CrudController extends Controller
{
  private $session;
  private $model;

  public function __construct()
  {
    $this->session = new Session();
    if($this->session->getStatus() === 1 || empty($this->session->get('usuario')))
      exit('Acceso denegado');
    $this->model = new CrudModel();
  }

  public function exec()
  {
    $this->MostrarUsuarios();
  }

  public function logout()
  {
    $this->session->close();
    header('location: /esis.library.unjbg/Login');
  }

  public function AgregarUsuarios($message = '')
  {
    $params = array('usuario' => $this->session->get('usuario'),'show_form' => true, 'message' => $message);
    $this->render(__CLASS__, $params);
  }

  public function MostrarUsuarios($message = '', $message_type = 'success')
  {
    $usuarios = $this->model->MostrarUsuarios();

    $params = array('usuario' => $this->session->get('usuario'),'show_clients_list' => true, 'message_type' => $message_type, 'message' => $message, 'usuarios' => $usuarios);
    return $this->render(__CLASS__, $params);
  }

  public function MostrarUsuario($id)
  {
    $result = $this->model->MostrarUsuario($id);

    $info_client = !$result->num_rows
    ? $info_client = array()
    : $info_client = $result->fetch_object();

    $params = array('usuario' => $this->session->get('usuario'), 'show_edit_form' => true, 'info_client' => $info_client);
    return $this->render(__CLASS__, $params);
  }

  public function AgregarUsuario($request_params)
  {
    if(!$this->verify($request_params))
      return $this->AgregarUsuarios('Son necesarios todos los campos');

    $result = $this->model->AgregarUsuario($request_params);

    if(!$result || !$this->model->affected_rows())
      return $this->AgregarUsuarios('Hubo un error al agregar el usuario');
    
    return $this->MostrarUsuarios('Usuario agregado');
  }

  private function verify($request_params)
  {
    foreach ($request_params as $param)
      if(empty($param)) return false;

    return true;
  }

  public function EliminarUsuario($id)
  {
    if(empty($id))
      return $this->MostrarUsuarios('No se recibió el ID del usuario', 'warning');

    if(!is_numeric($id))
      return $this->MostrarUsuarios('El ID del usuario debe ser numérico', 'warning');

    $result = $this->model->EliminarUsuario($id);

    if(!$result || !$this->model->affected_rows())
      return $this->MostrarUsuarios("Hubo un error al remover el usuario número {$id}", 'warning');

    $this->MostrarUsuarios("Usuario número {$id} removido");
  }

  public function ActualizarUsuario($request_params)
  {
    if(!$this->verify($request_params))
      return $this->MostrarUsuarios('Son necesarios todos los campos para editar', 'warning');

    if(!is_numeric($request_params['id_usuario']))
      return $this->MostrarUsuarios('El ID del usuario debe ser numérico para editar', 'warning');

    $result = $this->model->ActualizarUsuario($request_params);

    if(!$result || !$this->model->affected_rows())
      return $this->MostrarUsuarios("Hubo un error al editar el usuario número {$request_params['id_usuario']}", 'warning');

    $this->MostrarUsuarios("usuario número {$request_params['id_usuario']} actualizado");
  }
}
