
<div class="row-12">
  <div class="row-12 m-0 p-0 ">
    <div class="d-flex justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 "style="background-color: #DAEDF6">

<div class="d-flex justify-content-center">
      <h3>NUEVO USUARIO</h3>
</div>


    <form method="POST" action="<?= FOLDER_PATH . '/Crud/AgregarUsuario' ?>">

      <div class="form-group">
        <label for="text">Identidad Usuario</label>
        <input type="text" name="ident_usuario" class="form-control" id="ident_usuario" placeholder="Usuario" >
      </div>

      <div class="form-group">
        <label for="text">Tipo de usuario</label>
        <input type="number" name="id_tipousuario" class="form-control" id="id_tipousuario" placeholder="Tipo de Usuario" >
      </div>

      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" name="nombre_usuario" class="form-control" id="nombre_usuario" placeholder="Nombres" >
      </div>

      <div class="form-group">
        <label for="apellido_usuario">Apellido</label>
        <input type="text" name="apellido_usuario" class="form-control" id="apellido_usuario" placeholder="Apellidos" value="">
      </div>

      <div class="form-group">
        <label for="name">Contraseña</label>
        <input type="password" name="clave" class="form-control" id="clave" placeholder="" >
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email_correo" class="form-control" id="email_correo" placeholder="E-mail" >
      </div>

      <div class="form-group">
        <label for="date">Fecha</label>
        <input type="date" name="fecha_registro" class="form-control" id="fecha_registro" value="<?php echo date("Y-n-j", strtotime("-1 day")); ?>">
      </div>

      <div class="form-group">
        <label for="foto">Foto</label> <br>
        <input type="file" name="foto_usuario" id="foto_usuario">
      </div>

      <div class="form-group">
        <label for="name">Género</label>
        <input type="number" name="genero" class="form-control" id="genero" placeholder="Género" >
      </div>

      <?php
        !empty($message)
        ? print("<div class=\"alert alert-warning\">$message</div>")
        : ''
      ?>
      <div class="col-4 mx-auto">
      <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
      <div class="mt-4">
        </div>
    </form>
</div>
</div>
    <div class="mt-4">
        </div>

