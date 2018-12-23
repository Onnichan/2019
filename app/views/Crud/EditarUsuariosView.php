<?php !$info_client ? exit('Hubo un error al cargar la información del cliente') : '' ?>


  <div class="row-6 m-0 p-0 ">
    <div class="d-flex justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 "style="background-color: #DAEDF6">

<div class="d-flex justify-content-center">
      <h3>EDITAR USUARIO</h3>
</div>

    <form method="POST" action="<?= FOLDER_PATH . '/Crud/ActualizarUsuario' ?>">
      
      <div class="form-group">
        <label for="text">Id Usuario</label>
        <input type="text" name="id_usuario" class="form-control" id="id_usuario" placeholder="id usuario" value="<?= $info_client->id_usuario?>" readonly>
      </div>

      <div class="form-group">
        <label for="text">Identidad Usuario</label>
        <input type="text" name="ident_usuario" class="form-control" id="ident_usuario" placeholder="ident_usuario" value="<?= $info_client->ident_usuario?>">
      </div>

      <div class="form-group">
        <label for="text">Tipo de usuario</label>
        <input type="number" name="id_tipousuario" class="form-control" id="id_tipousuario" placeholder="id_tipousuario" value="<?= $info_client->id_tipousuario?>" readonly>
      </div>

      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" name="nombre_usuario" class="form-control" id="nombre_usuario" placeholder="Nombre" value="<?= $info_client->nombre_usuario?>">
      </div>

      <div class="form-group">
        <label for="name">Apellido</label>
        <input type="text" name="apellido_usuario" class="form-control" id="apellido_usuario" placeholder="Apellido" value="<?= $info_client->apellido_usuario?>">
      </div>

      <div class="form-group">
        <label for="name">Contraseña</label>
        <input type="password" name="clave" class="form-control" id="clave" placeholder="clave" value="<?= $info_client->clave?>">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email_correo" class="form-control" id="email_correo" placeholder="email_correo" value="<?= $info_client->email_correo?>">
      </div>

      <div class="form-group">
        <label for="date">Fecha</label>
        <input type="date" name="fecha_registro" class="form-control" id="fecha_registro" placeholder="fecha_registro" value="<?= $info_client->fecha_registro?>">
      </div>

      <div class="form-group">
        <label for="name">Foto</label> <br>
        <input type="file" name="foto_usuario" id="foto_usuario">
      </div>

      <div style="text-align: center; width: 435px;">
        <img height="400px" src="data:image/jpg;base64,<?php echo base64_encode($info_client->foto_usuario);?>"/>
      </div>

      <div class="form-group">
        <label for="name">Género</label>
        <input type="number" name="genero" class="form-control" id="genero" placeholder="Género" value="<?= $info_client->genero?>">
      </div>

      <div class="col-6 mx-auto justify-content-center">
        <button type="submit" class="btn btn-primary">Aceptar</button>
        <a class="btn btn-default justify-content-center" href="<?= FOLDER_PATH . '/Crud/MostrarUsuarios' ?>" role="button">Cancelar</a>
            <div class="mt-4">
            </div>
      </div>

    </form>

</div>

</div>
    <div class="mt-4">
        </div>
</div>
