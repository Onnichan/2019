<?php 
class CrudModel extends Model
{
  
  public function __construct()
  {
    parent::__construct();
  }

  public function affected_rows()
  {
    return $this->db->affected_rows;
  }

  public function AgregarUsuario($params)
  {
    
    $ident_usuario = $this->db->real_escape_string($params['ident_usuario']);
    $id_tipousuario = $this->db->real_escape_string($params['id_tipousuario']);
    $nombre_usuario = $this->db->real_escape_string($params['nombre_usuario']);
    $apellido_usuario = $this->db->real_escape_string($params['apellido_usuario']);
    $clave = $this->db->real_escape_string($params['clave']);
    $email_correo = $this->db->real_escape_string($params['email_correo']);
    $fecha_registro = $this->db->real_escape_string($params['fecha_registro']);
    $foto_usuario= $this->db->real_escape_string($params['foto_usuario']);
    $genero = $this->db->real_escape_string($params['genero']);

    $sql = "INSERT INTO usuario 
    (ident_usuario,id_tipousuario,nombre_usuario,apellido_usuario,clave,email_correo,fecha_registro,foto_usuario,genero) VALUES 
    ('$ident_usuario','$id_tipousuario','$nombre_usuario','$apellido_usuario','$clave','$email_correo','$fecha_registro','$foto_usuario','$genero')";

    return $this->db->query($sql);
  }

  public function MostrarUsuarios()
  {
    $sql = 'SELECT * FROM usuario';
    return $this->db->query($sql);
  }

  public function MostrarUsuario($id)
  {
    $sql = "SELECT * FROM usuario WHERE id_usuario='{$id}'";
    return $this->db->query($sql);
  }

  public function MostrarTipo($id)
  {
    $sql = "SELECT * FROM usuario WHERE id_usuario='{$id}'";
    return $this->db->query($sql);
  }

  public function EliminarUsuario($id)
  {
    $sql = "DELETE FROM usuario WHERE id_usuario={$id}";
    return $this->db->query($sql);
  }

  public function ActualizarUsuario($params)
  {
    $id_usuario = $this->db->real_escape_string($params['id_usuario']);
    $ident_usuario = $this->db->real_escape_string($params['ident_usuario']);
    $id_tipousuario = $this->db->real_escape_string($params['id_tipousuario']);
    $nombre_usuario = $this->db->real_escape_string($params['nombre_usuario']);
    $apellido_usuario = $this->db->real_escape_string($params['apellido_usuario']);
    $clave = $this->db->real_escape_string($params['clave']);
    $email_correo = $this->db->real_escape_string($params['email_correo']);
    $fecha_registro = $this->db->real_escape_string($params['fecha_registro']);
    $foto_usuario = $this->db->real_escape_string($params['foto_usuario']);
    $genero = $this->db->real_escape_string($params['genero']);

    $sql = "UPDATE usuario SET id_usuario= '{$id_usuario}',ident_usuario='{$ident_usuario}',id_tipousuario='{$id_tipousuario}',nombre_usuario='{$nombre_usuario}',apellido_usuario='{$apellido_usuario}',clave='{$clave}',email_correo='{$email_correo}',fecha_registro='{$fecha_registro}',foto_usuario='{$foto_usuario}',genero='{$genero}' WHERE id_usuario='{$id_usuario}'";
    return $this->db->query($sql);
  }

  public function MostrarTipoUsuarios(){
      $query = "SELECT * FROM tipo_usuario order by 1";
      $res = $this->db->query($query);
      return $res;
    }
}