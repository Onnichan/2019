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
						</ul>
					</div>	
					<div>
						<div class="d-flex">
							<div class="float-left">
								<h4 style="color:#7C3A3A"><b>ADMINISTRADORES</b></h4>
							</div>
							<div class="float-left">
								<a href="/esis.library.unjbg/NuevoAdministrador/AgregarUsuario" class="btn btn-sm btn-primary ml-3">Nuevo</a>
							</div>
						</div>
						<div class="mt-3">

							<table class="table table-striped">
						      <thead>
						        <th>Usuario</th>
						        <th>Nombres</th>
						        <th>Apellidos</th>
						        <th>Contraseña</th>
						        <th>E-mail</th>
						        <th>Fecha de registro</th>
						        <th>Editar</th>
						        <th>Eliminar</th>
						      </thead>
						      <tbody>
						        <?php
						        while ($row = $administrador->fetch_array())
						        {
						          echo '<tr>';
						          echo "<td>{$row['ident_usuario']}</td>";
						          echo "<td>{$row['nombre_usuario']}</td>";
						          echo "<td>{$row['apellido_usuario']}</td>";
						          echo "<td>{$row['clave']}</td>";
						          echo "<td>{$row['email_correo']}</td>";
						          echo "<td>{$row['fecha_registro']}</td>";
						          echo "<td><a href='" . FOLDER_PATH ."/Administradores/MostrarUsuario/{$row['id_usuario']}'>Editar</a></td>";
						          echo "<td><a href='" . FOLDER_PATH ."/Administradores/EliminarUsuario/{$row['id_usuario']}'>Eliminar</a></td>";
						          echo '</tr>';
						        }
						        ?>
						      </tbody>
						    </table>



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