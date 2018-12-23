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
		option{
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
							<li class="breadcrumb-item"><a href="/esis.library.unjbg/Articulo/MostrarArticulo">Artículo</a></li>
							<li class="breadcrumb-item"><a href="">Modificar artículo</a></li>
						</ul>
					</div>	
					<div class="d-flex justify-content-center">
						<div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 "style="background-color: #DAEDF6">
							
							<!--************************ FORMULARIO DE LIBRO **************************-->

							<div class="d-flex justify-content-center">
								<h3>MODIFICAR ARTÍCULO</h3>
							</div>
							<form action="/esis.library.unjbg/ModificarArticulo/ActualizarArticulo" method="POST" enctype="multipart/form-data">
								<?php 
									$filaArt = $articulo->fetch_array();
								?>
								<input type="hidden" name="idTexto" value="<?php echo $filaArt['id_texto'] ?>">
								<div class="form-group">
									<label for="nombre">Nombre articulo:</label>
									<input type="text" name="nombre" id="nombre" class="form-control form-control-sm" value="<?php echo $filaArt['nombre_texto'] ?>" required>
								</div>
								<div class="clearfix  mb-3">
									<div>
										<div class="col-6 float-left form-group pl-0">Autor (Nombre):</div>
										<div class="col-6 float-left form-group pl-0">Autor (Apellido):</div>
									</div>
									<?php 
										$i = 0;
										while($filaA = $autor->fetch_array()){
											$i = $i + 1;
											$inputAutor = "
											<div>
												<div class=\"col-6 float-left form-group pl-0 py-0 my-0 mb-1\">
													<input type=\"text\" name=\"nombreautor" . $i . "\" class=\"form-control form-control-sm\" value=\"$filaA[nombre_autor]\" required>
												</div>
												<div class=\"col-6 float-left form-group pl-0 py-0 my-0 mb-1\">
													<input type=\"text\" name=\"apellidoautor" . $i . "\" class=\"form-control form-control-sm\" value=\"$filaA[apellido_autor]\" required>
												</div>
											</div>
											";
											echo $inputAutor;
										}
									?>
								</div>
								<input type="hidden" name="cantidadautores" value="<?php echo $i ?>">
								<div class="form-group">
									<label for="publicacion">Año de publicación:</label>
									<input type="number" name="publicacion" id="publicacion" class="form-control form-control-sm" value="<?php echo $filaArt['fecha_publicacion'] ?>" required>
								</div>
								<div class="form-group">
									<label for="paginas">Número de páginas:</label>
									<input type="number" name="paginas" id="paginas" class="form-control form-control-sm" value="<?php echo $filaArt['num_paginas'] ?>" required>
								</div>
								<div class="form-group">
									<label for="cantidad">Cantidad:</label>
									<input type="number" name="cantidad" id="cantidad" class="form-control form-control-sm" value="<?php echo $filaArt['cantidad_total'] ?>" required>
								</div>
								<div class="form-group">
									<div>
										<label for="genero">Tema</label>
									</div>
									<select name="genero" id="genero" class="custom-select custom-select-sm col-8">
										<?php 
										while($fila = $genero->fetch_array()){
											$opcion = "
											<option value=\"$fila[id_genero]\" ";

											if(strcmp($fila['nombre_genero'], $filaArt['nombre_genero']) == 0){
												$opcion = $opcion . "selected";
											}

											$opcion = $opcion . ">
												$fila[nombre_genero]
											</option>"; 
											echo $opcion;
										}
										?>	
									</select>
								</div>
								<div class="form-group">
									<label for="FotoPortada">Foto de portada</label>

									<br><a href="" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#modal1"> - Cambiar foto - </a>
									<!--  *************** MODAL PARA FOTO PORTADA ***************  -->
									<div class="modal" id="modal1">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<div class="col-11 text-center">
														<h5>ADJUNTAR IMAGEN</h5>
													</div>
													<button type="button" class="close" data-dismiss="modal">
														<span>&times</span>
													</button>
												</div>
												<div class="modal-body px-0 text-center">
													<input type="file" name="FotoPortada">
													<div class="modal-footer mt-3 pb-0">
														<button class="btn btn-primary" data-dismiss="modal">Adjuntar</button>
													</div>
												</div>
											</div>
										</div>
									</div>
										
								</div>
								<div class="col-4 mx-auto">
									<button class="btn btn-info">ACEPTAR</button>
								</div>
							</form>
							<br>
						</div>
					</div>
					<br>
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