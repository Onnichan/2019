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
		li a img{
			width: 30px;
		}
		a img{
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
						</ul>
					</div>	
					<div>
						<div>
							<a href="/esis.library.unjbg/Administradores/MostrarAdministradores" class="btn btn-secondary hola m-3 pb-2 float-left">
								Administradores <br>
								<img src="img/libro.jpg" alt="Imagen L1">
							</a>
						</div>
						<div>
							<a href="/esis.library.unjbg/Estudiantes/MostrarEstudiantes" class="btn btn-secondary hola m-3 pb-2 float-left">
								Estudiantes <br>
								<img src="img/libro.jpg" alt="Imagen L1">
							</a>
						</div>
						<div>
							<a href="/esis.library.unjbg/Bibliotecarios/MostrarBibliotecarios" class="btn btn-secondary hola m-3 pb-2 float-left">
								Bibliotecarios <br>
								<img src="img/libro.jpg" alt="Imagen L1">
							</a>
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