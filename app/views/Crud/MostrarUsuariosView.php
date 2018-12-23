<?php !empty($message) ? print("<div class=\"alert alert-$message_type\">$message</div>") : '' ?>
<div class="row">
  <div class="col-md-12">
    <table class="table table-striped">
      <thead>
        <th bgcolor="sky-blue">ID</th>
        <th bgcolor="sky-blue">Identificador</th>
        <th bgcolor="sky-blue">Nombres</th>
        <th bgcolor="sky-blue">Apellidos</th>
        <th bgcolor="sky-blue">Contraseña</th>
        <th bgcolor="sky-blue">E-mail</th>
        <th bgcolor="sky-blue">Fecha</th>
        <!-- <th>foto_usuario</th> -->
        <th bgcolor="sky-blue">Género</th>
        <th bgcolor="sky-blue">Editar</th>
        <th bgcolor="sky-blue">Eliminar</th>
      </thead>
      <tbody>
        <?php
        while ($row = $usuarios->fetch_assoc())
        {
          echo '<tr>';
          echo "<td>{$row['id_usuario']}</td>";
          echo "<td>{$row['ident_usuario']}</td>";
          echo "<td>{$row['nombre_usuario']}</td>";
          echo "<td>{$row['apellido_usuario']}</td>";
          echo "<td>{$row['clave']}</td>";
          echo "<td>{$row['email_correo']}</td>";
          echo "<td>{$row['fecha_registro']}</td>";
          //echo '<img height="50px" src="data:image/jpg;base64,'.base64_encode($row['foto_usuario']).'">';
          
          echo "<td>{$row['genero']}</td>";
          echo "<td><a href='" . FOLDER_PATH ."/Crud/MostrarUsuario/{$row['id_usuario']}'>Editar</a></td>";
          echo "<td><a href='" . FOLDER_PATH ."/Crud/EliminarUsuario/{$row['id_usuario']}'>Eliminar</a></td>";
          echo '</tr>';
        }
        ?>
      </tbody>
    </table>

  </div>
</div>

