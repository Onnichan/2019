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
							<li class="breadcrumb-item"><a href="">Libros</a></li>
						</ul>
					</div>	
					<div>
						<div class="d-flex">
							<div class="float-left">
								<h4 style="color:#7C3A3A"><b>LIBROS</b></h4>
							</div>
							<div>
								<div class="block-center">
									<a href="" class="btn btn-sm btn-success float-left ml-3" data-toggle="modal" data-target="#modal1">Nuevo</a>
								</div>
								<!--  *************** MODAL PARA CANTIDAD DE AUTORES ***************  -->
								<div class="modal" id="modal1">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<div class="col-11 text-center">
													<h5>INDICAR CANTIDAD DE AUTORES</h5>
												</div>
												<button type="button" class="close" data-dismiss="modal">
													<span>&times</span>
												</button>
											</div>
											<div class="modal-body px-0 text-center">

												<!--  ******* FORMULARIO DE CANTIDAD ******* -->
												<form action="/esis.library.unjbg/NuevoLibro/CargarDatos" method="POST">
													Cantidad: 
													<input type="text" name="cantidadautores" required autofocus>
													<div class="modal-footer mt-3 pb-0">
														<input type="submit" class="btn btn-primary" value="Insertar libro">
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-3">
							<table class="col-12 col-md-11 col-xl-10 table table-striped table-hover table-sm mx-auto">
								<tr>
									<th width="30%">Libro</th>
									<th class="d-none d-sm-block">ISBN</th>
									<th>Autor</th>
									<th>Edición</th>
									<th>Stock</th>
									<th>Detalle</th>
								</tr>

								<?php 
									while($fila = $libro->fetch_array()){
										$tabla1 = "
										<tr>
											<td>$fila[nombre_texto]</td>
											<td class=\"d-none d-sm-block\">$fila[isbn_libro]</td>
											<td>";
										
										$campoA = '';
										$autor->data_seek(0);
										while($filaA = $autor->fetch_array()){
											if($filaA['id_texto'] == $fila['id_texto']){
												$campoA = $campoA . "- $filaA[nombre_autor]<br>"; 
											}
										}

										$tabla2 = "
											</td>
											<td>$fila[nombre_edicion]</td>
											<td>$fila[cantidad_stock]</td>
											<td><a href=\"/esis.library.unjbg/DetalleLibro/MostrarDetalleLibros/$fila[id_texto]\">Ver detalle</a></td>
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