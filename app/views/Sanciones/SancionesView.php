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
							<li class="breadcrumb-item"><a href="">Sanciones</a></li>
						</ul>
					</div>	
					<div>
						<h4>SANCIONES</h4>
						<div>
							<div class="col-sm-11 col-md-10 col-lg-8">
								<table class="table table-sm table-striped table-bordered">
									<tr>
										<th>Código</th>
										<th>Estudiante</th>
										<th>Inicio</th>
										<th>Final</th>
									</tr>
									<?php 
										while($fila = $sancion->fetch_array()){
											$tabla = "
											<tr>
												<td>$fila[cod_biblioteca_est]</td>
												<td class=\"izq\">$fila[nombre_estudiante]</td>
												<td>$fila[fecha_sancion_inicio]</td>
												<td>$fila[fecha_sancion_final]</td>
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