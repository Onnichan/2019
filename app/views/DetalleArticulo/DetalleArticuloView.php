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
							<li class="breadcrumb-item"><a href="/esis.library.unjbg/Articulo/MostrarArticulos">Artículos</a></li>
							<li class="breadcrumb-item"><a href="">Detalle de Artículo</a></li>
						</ul>
					</div>	
					<div>	
						<?php 
							$fila = $articulo->fetch_array();
						?>
						<div class="col-12 col-sm-4 float-left p-0">
							<div>
								<img src="data:image/jpg;base64,<?php echo base64_encode($fila['foto_portada'])?>" class="col-8 col-sm-12 col-xl-10 d-flex mx-auto">
							</div>
							<div class="d-flex justify-content-center mt-2">
								<a href="/esis.library.unjbg/ModificarArticulo/CargarDatos/<?php echo $fila['id_texto'] ?>" class="btn btn-danger">Modificar</a>
							</div>
							<div class="d-flex justify-content-center block-center" >
								<div class="block-center">
									<a href="" class="btn btn-success mt-3" data-toggle="modal" data-target="#modal1">Añadir ejemplar</a>
								</div>
								<!--  *************** MODAL PARA EJEMPLARES ***************  -->
								<div class="modal" id="modal1">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header text-center">
												<div class="col-11">
													<h5>AÑADIR EJEMPLAR</h5>
												</div>
												<button type="button" class="close" data-dismiss="modal">
													<span>&times</span>
												</button>
											</div> 
											<div class="modal-body px-0 text-center">

												<!--  ******* FORMULARIO DE INSERSION DE EJEMPLAR******* -->
												<form action="/esis.library.unjbg/DetalleArticulo/InsertarEjemplar" method="POST">
													Nombre ejemplar: 
													<input type="text" name="nombreejemplar" autofocus required>
													<input type="hidden" name="idArticulo" value="<?php echo $idArticulo ?>">
													<div class="modal-footer mt-3 pb-0">
														<input type="submit" class="btn btn-primary" value="Aceptar">
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br>
						</div>
						<div class="col-12 col-sm-8 float-left p-0">
							<table class="table table-bordered table-striped col-lg-10 col-xl-8">
								<tr>
									<th width="40%">Nombre</th>
									<th><?php echo $fila['nombre_texto'] ?></th>
								</tr>
								<tr>
									<th>Autor</th>
									<td>
									<?php 
										while($campoA = $autor->fetch_array()){
											echo "- ",$campoA['nombre_autor'],"<br>";
										}

									 ?>
									 </td>
								</tr>
								<tr>
									<th>Año de publicación</th>
									<td><?php echo $fila['fecha_publicacion'] ?></td>
								</tr>
								<tr>
									<th>Nro. de páginas</th>
									<td><?php echo $fila['num_paginas'] ?></td>
								</tr>
								<tr>
									<th>Cantidad total</th>
									<td><?php echo $fila['cantidad_total'] ?></td>
								</tr>
								<tr>
									<th>Cantidad stock</th>
									<td><?php echo $fila['cantidad_stock'] ?></td>
								</tr>
								<tr>
									<th>Tema</th>
									<td>
									<?php 
										while($campoG = $genero->fetch_array()){
											echo "- ",$campoG['nombre_genero'],"<br>";
										}

									 ?>
									 </td>
								</tr>
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