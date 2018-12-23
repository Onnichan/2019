<!DOCTYPE html>
<html>
<head lang="es-ES"> 
  <title>Reserva de libros</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, inicial-scale=1,shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie-edge">
  <link rel="stylesheet" type="text/css" href="/esis.library.unjbg/resources/css/bootstrap.css">
  <style>
    a{
      color: #026D8C;
      font-size: 15px;
    }
    option{
      color: #026D8C;
      font-size: 15px;
    }
    li img{
      width: 30px;
    }
    button img{
      width: 150px;
    }
    body{
      margin-top: 80px;
    }
  </style>
</head>
<body>
<!-- ********************************************* EMPIEZA EL CONTENIDO ********************************************* -->
  <div>
    <div class="row-12">
      <div>
        <?php include ROOT . '/' . PATH_VIEWS . 'navegacionBoton.php'; ?> 
      </div>
    </div>

    <div class="row-12 m-0 p-0 ">
      <div>
        <?php include ROOT . '/' . PATH_VIEWS . 'navegacionVertical.php'; ?>

        <!-- ************************ CONTENIDO PRINCIPAL ************************ -->

        <div class="col-md-9 col-lg-10 float-right">
          <div class="mt-3">
            <ul class="breadcrumb p-2">
              <li class="breadcrumb-item"><a href="">Usuarios</a></li>
              <li class="breadcrumb-item"><a href="">Administradores</a></li>
              <li class="breadcrumb-item"><a href="">Nuevo Administrador</a></li>
            </ul>
          </div>  
          <div class="d-flex justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 "style="background-color: #DAEDF6">
              
              <!--************************ FORMULARIO DE LIBRO **************************-->

              <div class="d-flex justify-content-center">
                <h3>NUEVO ADMINISTRADOR</h3>
              </div>
              <form action="<?= FOLDER_PATH . '/NuevoAdministrador/AgregarUsuario' ?>" method="POST" enctype="multipart/form-data">
                
                <div class="form-group">
                  <label for="nombre">ID:</label>
                  <input type="number" name="id_usuario" id="id_usuario" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="nombre">new:</label>
                  <input type="number" name="new_user" id="new_user" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="nombre">TIPO:</label>
                  <input type="number" name="id_tipousuario" id="id_tipousuario" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="nombre">USUARIO:</label>
                  <input type="text" name="ident_usuario" id="ident_usuario" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="nombre">Nombres:</label>
                  <input type="text" name="nombre_usuario" id="nombre_usuario" class="form-control form-control-sm">
                </div>
                <div class="form-group">
                  <label for="apellido">Apellidos:</label>
                  <input type="text" name="apellido_usuario" id="apellido_usuario" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="password">Contraseña:</label>
                  <input type="password" name="clave_usuario" id="clave_usuario" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="email">E-mail:</label>
                  <input type="email" name="email_correo" id="email_correo" class="form-control form-control-sm">
                </div>

                <div class="form-group">
                  <label for="publicacion">Fecha de Registro:</label>
                  <input type="date" name="fecha_registro" id="fecha_registro" class="form-control form-control-sm">
                </div>

                <!-- <div class="form-group">
                  <label for="file">Foto de usuario:</label>
                  <input type="file" name="foto_usuario" id="foto_usuario">
                </div> -->

                <div class="col-4 mx-auto">
                  <button type="submit" class="btn btn-secondary">ACEPTAR</button>
                </div>

              </form>
              <br>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>

<!-- ********************************************* TERMINA EL CONTENIDO ********************************************* -->
  <script src="/esis.library.unjbg/resources/js/jquery-3.3.1.slim.min.js"></script>
  <script src="/esis.library.unjbg/resources/js/popper.min.js"></script>
  <script src="/esis.library.unjbg/resources/js/bootstrap.min.js"></script>
</body>
</html>