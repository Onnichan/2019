<!DOCTYPE html>
<html>
<head lang="es-ES">	
	<title>Reserva de libros</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, inicial-scale=1,shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie-edge">
	<link rel="stylesheet" type="text/css" href="/esis.library.unjbg/resources/css/bootstrap.css">
	<script>
		function ImprimirEditorial(editorial, id){
			document.querySelector('#inputEd').setAttribute("value", editorial);
			document.querySelector('#idEd').setAttribute("value", id);
		}
		function ImprimirCategoria(categoria, id){
			document.querySelector('#inputCa').setAttribute("value", categoria);
			document.querySelector('#idCa').setAttribute("value", id);
		}
	</script>
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
		th, td{
			text-align: center;
		}
		.der{
			text-align: left;
		}
	</style>
	
</head>
<body>
<!-- ********************************************* EMPIEZA EL CONTENIDO ********************************************* -->
		<div>
		<div class="row-12">
			<div>
				<?php include ROOT . '/' . PATH_VIEWS . 'navegacionVertical.php'; ?>	
			</div>
		</div>

		<div class="row-12 m-0 p-0 ">
			<div>
				<?php include ROOT . '/' . PATH_VIEWS . 'navegacionBoton.php'; ?>

				<!-- ************************ CONTENIDO PRINCIPAL ************************ -->

				<div class="col-md-9 col-lg-10 float-right">
					<div class="mt-3">
						<ul class="breadcrumb p-2">
							<li class="breadcrumb-item"><a href="">Categorías</a></li>
							<li class="breadcrumb-item"><a href="">Categorías y editoriales</a></li>
						</ul>
					</div>	
					<div>
						<div class="col-sm-6 p-1 float-left">
						<div class="text-center p-3 border border-success" style="background-color: #F3FDF1">
							<div>
								<h4>CATEGORÍAS</h4>
							</div>
							<div class="d-flex justify-content-center">
								<div class="col-10 col-sm-12 col-lg-10 m-0 p-0">
									<table class="table table-sm table-bordered table-striped" style="background-color: white">
										<tr>
											<th>ID</th>
											<th>Categoria</th>
											<th>Editar</th>
										</tr>
										<?php 
											while($fila = $categoria->fetch_array()){
												$tabla = "
												<tr>
													<td>$fila[id_genero]</td>
													<td class=\"der\">$fila[nombre_genero]</td>
													<td><a href=\"\" data-toggle=\"modal\" data-target=\"#modal3\" onclick=\"ImprimirCategoria('$fila[nombre_genero]', $fila[id_genero])\">Editar</a></td>
												</tr>";
												echo $tabla;
											}
										?>
									</table>
									<div>
										<div class="block-center">
											<a href="" class="btn btn-danger" data-toggle="modal" data-target="#modal1">Nuevo</a>
										</div>
										<div class="modal" id="modal1">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<div class="col-11">
															<h5>NUEVA CATEGORÍA</h5>
														</div>
														<button type="button" class="close" data-dismiss="modal">
															<span>&times</span>
														</button>
													</div>
													<div class="modal-body px-0">

														<!--  ******* FORMULARIO DE INSERSION ******* -->
														<form action="/esis.library.unjbg/Categorias/InsertarCategoria" method="POST">
															Nombre categoría: <input type="text" name="nombrecategoria" autofocus required>
															<div class="modal-footer mt-3 pb-0">
        														<input type="submit" class="btn btn-primary" value="Aceptar">
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div class="col-sm-6 p-1 float-left">
						<div class="text-center p-3 border border-primary" style="background-color: #F1FAFF">
							<div>
								<h4>EDITORIALES</h4>
							</div>
							<div class="d-flex justify-content-center">		
								<div class="col-10 col-sm-12 col-lg-10 m-0 p-0">
									<table class="table table-sm table-bordered table-striped" style="background-color: white">
										<tr>
											<th>ID</th>
											<th>Editorial</th>
											<th>Editar</th>
										</tr>
										<?php 
											while($fila = $editorial->fetch_array()){
												$tabla = "
												<tr>
													<td>$fila[id_editorial]</td>
													<td class=\"der\">$fila[nombre_editorial]</td>
													<td><a href=\"\" data-toggle=\"modal\" data-target=\"#modal4\" onclick=\"ImprimirEditorial('$fila[nombre_editorial]', $fila[id_editorial])\">Editar</a></td>
												</tr>";
												echo $tabla;
											}
										?>
									</table>
									<div>
										<div class="block-center">
											<a href="" class="btn btn-danger" data-toggle="modal" data-target="#modal2">Nuevo</a>
										</div>
										<div class="modal" id="modal2">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<div class="col-11">
															<h5>NUEVA EDITORIAL</h5>
														</div>
														<button type="button" class="close" data-dismiss="modal">
															<span>&times</span>
														</button>
													</div>
													<div class="modal-body px-0">

														<!--  ******* FORMULARIO DE INSERSION ******* -->
														<form action="/esis.library.unjbg/Categorias/InsertarEditorial" method="POST">
															Nombre editorial: <input type="text" name="nombreeditorial" autofocus required>
															<div class="modal-footer mt-3 pb-0">
        														<input type="submit" class="btn btn-primary" value="Aceptar">
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<!--  *************** MODAL PARA MODIFICACIONES ***************  -->
									<div class="modal" id="modal3">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<div class="col-11">
														<h5>EDITAR CATEGORIA</h5>
													</div>
													<button type="button" class="close" data-dismiss="modal">
														<span>&times</span>
													</button>
												</div>
												<div class="modal-body px-0">

													<!--  ******* FORMULARIO DE INSERSION ******* -->
													<form action="/esis.library.unjbg/Categorias/ModificarCategoria" method="POST">
														Nombre categoria: <input id="inputCa" type="text" name="nombrecategoria" required>
														<input id="idCa" name="idcategoria" type="hidden">
														<div class="modal-footer mt-3 pb-0">
    														<input type="submit" class="btn btn-primary" value="Editar">
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div class="modal" id="modal4">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<div class="col-11">
														<h5>EDITAR EDITORIAL OK</h5>
													</div>
													<button type="button" class="close" data-dismiss="modal">
														<span>&times</span>
													</button>
												</div>
												<div class="modal-body px-0">

													<!--  ******* FORMULARIO DE INSERSION ******* -->
													<form action="/esis.library.unjbg/Categorias/ModificarEditorial" method="POST">
														Nombre editorial: <input id="inputEd" type="text" name="nombreeditorial" required>
														<input id="idEd" name="ideditorial" type="hidden">
														<div class="modal-footer mt-3 pb-0">
    														<input type="submit" class="btn btn-primary" value="Editar">
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
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