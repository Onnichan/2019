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
							<li class="breadcrumb-item"><a href="/esis.library.unjbg/Textos">Textos</a></li>
							<li class="breadcrumb-item"><a href="">Tesis</a></li>
						</ul>
					</div>	
					<div>
						<div class="d-flex">
							<div class="float-left">
								<h4 style="color:#7C3A3A"><b>TESIS</b></h4>
							</div>
							<div class="float-left">
								<a href="/esis.library.unjbg/NuevaTesis/CargarDatos" class="btn btn-sm btn-success ml-3">Nuevo</a>
							</div>
						</div>
						<div class="mt-3">
							<table class="col-12 col-md-11 col-xl-10 table table-striped table-hover table-sm mx-auto">
								<tr>
									<th width="30%">Tesis</th>
									<th>Autor</th>
									<th>Grado</th>
									<th class="d-none d-sm-block">Publicación</th>
									<th>Stock</th>
									<th>Detalle</th>
								</tr>

								<?php 
									while($fila = $tesis->fetch_array()){
										$tabla1 = "
										<tr>
											<td>$fila[nombre_texto]</td>
											<td>";
										
										$campoA = '';
										$autor->data_seek(0);
										while($filaA = $autor->fetch_array()){
											if($filaA['id_texto'] == $fila['id_texto']){
												$campoA = $campoA . "$filaA[nombre_autor]<br>"; 
											}
										}

										$tabla2 = "
											</td>
											<td>$fila[nombre_grado]</td>
											<td class=\"d-none d-sm-block\">$fila[fecha_publicacion]</td>
											<td>$fila[cantidad_stock]</td>
											<td><a href=\"/esis.library.unjbg/DetalleTesis/MostrarDetalleTesis/$fila[id_texto]\">Ver detalle</a></td>
										</tr>";
										$tabla = $tabla1 . $campoA . $tabla2;
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










<!-- ********************************************* TERMINA EL CONTENIDO ********************************************* -->
	<script src="/esis.library.unjbg/resources/js/jquery-3.3.1.slim.min.js"></script>
	<script src="/esis.library.unjbg/resources/js/popper.min.js"></script>
	<script src="/esis.library.unjbg/resources/js/bootstrap.min.js"></script>
</body>
</html>