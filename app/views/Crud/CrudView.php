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
    li img{
      width: 30px;
    }
    button img{
      width: 150px;
    }
    body{
      margin-top: 80px;
    }

    .show {
  display: block !important;
}
.hide {
  display: none !important;
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
          </div>  
          <div>
            <div class="d-flex">
              <div class="float-left">
                <h4 style="color:#7C3A3A"><b>USUARIOS</b></h4>
              </div>

              <div class="float-left" class="show">
                <a href="/esis.library.unjbg/Crud/AgregarUsuarios" class="btn btn-sm btn-primary ml-3">Nuevo</a>
              </div>

            </div>

            <div class="mt-3">

            <div class="container">
              <?php !empty($show_form) ? require 'app/views/Crud/AgregarUsuariosView.php' : '' ?>
              <?php !empty($show_edit_form) ? require 'app/views/Crud/EditarUsuariosView.php' : '' ?>
              <?php !empty($show_clients_list) ? require 'app/views/Crud/MostrarUsuariosView.php' : '' ?>
            </div>

            </div>
          </div>
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