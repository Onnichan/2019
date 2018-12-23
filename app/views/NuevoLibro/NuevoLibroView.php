<!DOCTYPE html>
<html>
<head lang="es-ES">	
	<title>Reserva de libros</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, inicial-scale=1,shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie-edge">
	<link rel="stylesheet" type="text/css" href="/esis.library.unjbg/resources/css/bootstrap.css">
	<script>
		function CrearEjemplar(){
			
		}
	</script>
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
							<li class="breadcrumb-item"><a href="/esis.library.unjbg/Libro/MostrarLibros">Libros</a></li>
							<li class="breadcrumb-item"><a href="">Nuevo libro</a></li>
						</ul>
					</div>	
					<div class="d-flex justify-content-center">
						<div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 "style="background-color: #DAEDF6">
							
							<!--************************ FORMULARIO DE LIBRO **************************-->

							<div class="d-flex justify-content-center">
								<h3>NUEVO LIBRO</h3>
							</div>
							<form action="/esis.library.unjbg/NuevoLibro/InsertarLibro" method="POST" enctype="multipart/form-data">
								<input type="hidden" name="cantidadautores" value="<?php echo $numautores ?>">
								<div class="form-group">
									<label for="nombre">Nombre libro:</label>
									<input type="text" name="nombre" id="nombre" class="form-control form-control-sm" autofocus required>
								</div>
								<div class="clearfix mb-3">
									<div>
										<div class="col-6 float-left form-group pl-0">Autor (Nombre):</div>
										<div class="col-6 float-left form-group pl-0">Autor (Apellido):</div>
									</div>
									<?php 
										if($numautores < 1){
											header("Location: http://localhost/esis.library.unjbg/Libro/MostrarLibros");
										}
										else{
											for($i=1;$i<=$numautores;$i++){
												$inputAutor = "
												<div>
													<div class=\"col-6 float-left form-group pl-0 py-0 my-0 mb-1\">
														<input type=\"text\" name=\"nombreautor" . $i . "\" class=\"form-control form-control-sm\" required>
													</div>
													<div class=\"col-6 float-left form-group pl-0 py-0 my-0 mb-1\">
														<input type=\"text\" name=\"apellidoautor" . $i . "\" class=\"form-control form-control-sm\" required>
													</div>
												</div>
												";
												echo $inputAutor;
											}
										}
									?>
								</div>
								<div class="form-group">
									<label for="publicacion">Año de publicación:</label>
									<input type="number" name="publicacion" id="publicacion" class="form-control form-control-sm" required>
								</div>
								<div class="form-group">
									<label for="isbn">ISBN:</label>
									<input type="text" name="isbn" id="isbn" class="form-control form-control-sm" required>
								</div>
								<div class="form-group">
									<label for="paginas">Número de páginas:</label>
									<input type="number" name="paginas" id="paginas" class="form-control form-control-sm" required>
								</div>
								<div class="form-group">
									<input type="hidden" name="cantidad" value="0" class="form-control form-control-sm">
								</div>
								<div class="form-group">
									<div>
										<label for="edicion">Edición</label>
									</div>
									<select name="edicion" id="edicion" class="custom-select custom-select-sm col-8">		
										<?php 
										while($fila = $edicion->fetch_array()){
											$opcion = "
											<option value=\"$fila[id_edicion]\">
												$fila[nombre_edicion]
											</option>"; 
											echo $opcion;
										}
										 ?>							
									</select>
								</div>
								<div class="form-group">
									<div>
										<label for="editorial">Editorial</label>
									</div>
									<select name="editorial" id="editorial" class="custom-select custom-select-sm col-8">
										<?php 
										while($fila = $editorial->fetch_array()){
											$opcion = "
											<option value=\"$fila[id_editorial]\">
												$fila[nombre_editorial]
											</option>"; 
											echo $opcion;
										}
										 ?>	
									</select>
								</div>
								<div class="form-group">
									<div>
										<label for="genero">Tema</label>
									</div>
									<select name="genero" id="genero" class="custom-select custom-select-sm col-8">
										<?php 
										while($fila = $genero->fetch_array()){
											$opcion = "
											<option value=\"$fila[id_genero]\">
												$fila[nombre_genero]
											</option>"; 
											echo $opcion;
										}
										 ?>	
									</select>
								</div>
								<div class="form-group">
									<label for="FotoPortada">Foto de portada</label>
									<input type="file" name="FotoPortada" id="FotoPortada" required>
								</div>
								<div class="col-4 mx-auto">
									<button class="btn btn-info" data-toggle="modal" data-target="#modal1" onclick="JavaScript:CrearEjemplar()">Crear ejemplar</button>
								</div>
								<!--  *************** MODAL PARA EJEMPLARES ***************  -->
								<div class="modal" id="modal1">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<div class="col-11 text-center">
													<h5>ESPECIFICAR EJEMPLARES</h5>
												</div>
												<button type="button" class="close" data-dismiss="modal">
													<span>&times</span>
												</button>
											</div>
											<div class="modal-body px-0 text-center">

												<!--  ******* FORMULARIO DE CANTIDAD ******* -->
												<div id="Hola">
													
												</div>
												<div class="modal-footer mt-3 pb-0">
													<button class="btn btn-primary">
														Insertar libro
													</button>
												</div>
											</div>
										</div>
									</div>
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