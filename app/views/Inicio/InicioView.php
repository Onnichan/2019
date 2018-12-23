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
			width:30px;
		}
		body{
			margin-top: 80px;
		}
		.azul{
			background-color: #E7F3FF;
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
							<li class="breadcrumb-item"><a href="">Inicio</a></li>
							<li class="breadcrumb-item"><a href="">Principal</a></li>
						</ul>
					</div>	
					<div>
						<div class="col-12 col-lg-5 float-left">
							<div class="m-2">
								<div class="col-12 azul border border-primary px-0 mb-4">
									<div style="height: 10px; background-color: #1F609B"></div>
									<div class="col-12 mt-1">
										<h4>Introducción</h4>
									</div>
									<div class="col-12">
										<p>Bienvenido a la página de gestión de reserva de libros, tesis y artículos. Esta página fue desarrollada para los estudiantes de la ESIS y para que usted administre las reservas hechas por ellos. </p>
									</div>
								</div>
								<div class="col-12 azul border border-primary px-0">
									<div style="height: 10px; background-color: #1F609B"></div>
									<div class="col-12 mt-1">
										<h4>Mis asignaciones</h4>
										<p>
											<li>Usted no tiene asignaciones por ahora.</li>
										</p>
									</div>
									<div class="col-12">
										
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-lg-7 float-left">
							<div class="m-2">
								<div class="col-12 azul border border-primary px-0">
									<div style="height: 10px; background-color: #1F609B"></div>
									<div class="col-12 mt-1">
										<h4>Sobre los textos</h4>
									</div>
									<div class="col-12">
										<p>
											<li>Libros totales: <?php echo $numlibros ?> </li>
										</p>
										<p>
											<li>Tesis totales: <?php echo $numtesis ?> </li>
										</p>
										<p>
											<li>Artículos totales: <?php echo $numarticulos ?> </li>
										</p>
									</div>
								</div>
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