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
		th,td {
			text-align: center;
		}
		.izq{
			text-align: left;
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
							<li class="breadcrumb-item"><a href="">Reservas</a></li>
						</ul>
					</div>	
					<div>
						<h4>RESERVAS</h4>
						<div>
							<div class="col-md-12">
								<table class="table table-striped" bgcolor="#00FF00">
									<tr>
										<th bgcolor="sky-blue" >Código Universitario</th>
										<th bgcolor="sky-blue" >Nombres y Apellidos</th>
										<th bgcolor="sky-blue">Código ejemplar</th>
										<th bgcolor="sky-blue">Fecha de reserva</th>
										<th bgcolor="sky-blue">Fecha límite</th>
										<th bgcolor="sky-blue">Entregado</th>
										<th bgcolor="sky-blue">Sancionar</th>
									</tr>
									<?php 
										while($fila = $reserva->fetch_array()){
											$tabla = "
											<tr>
												<td>$fila[codigo_universitario]</td>
												<td>$fila[Nombres_Apellidos]</td>
												<td>$fila[codigo_ejemplar]</td>
												<td>$fila[fecha_reserva]</td>
												<td>$fila[fecha_limite]</td>
												<td><a href='#'>Entregado</a></td>
												<td><a href='#'>Sancionar</a></td>
											</tr>";
											echo $tabla;
										}
									?>
								</table>
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