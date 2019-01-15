<?php
	$habilitar = false;
?>

<!DOCTYPE html>

<html id="top" lang="es">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<style type="text/css">
		.gm-control-active>img {
			box-sizing: content-box;
			display: none;
			left: 50%;
			pointer-events: none;
			position: absolute;
			top: 50%;
			transform: translate(-50%, -50%)
		}

		.gm-control-active>img:nth-child(1) {
			display: block
		}

		.gm-control-active:hover>img:nth-child(1),
		.gm-control-active:active>img:nth-child(1) {
			display: none
		}

		.gm-control-active:hover>img:nth-child(2),
		.gm-control-active:active>img:nth-child(3) {
			display: block
		}
	</style>
	<style type="text/css">
		.gm-ui-hover-effect {
			opacity: .6
		}

		.gm-ui-hover-effect:hover {
			opacity: 1
		}
	</style>
	<style type="text/css">
		.gm-style .gm-style-cc span,
		.gm-style .gm-style-cc a,
		.gm-style .gm-style-mtc div {
			font-size: 10px;
			box-sizing: border-box
		}
	</style>
	<style type="text/css">
		@media print {

			.gm-style .gmnoprint,
			.gmnoprint {
				display: none
			}
		}

		@media screen {

			.gm-style .gmnoscreen,
			.gmnoscreen {
				display: none
			}
		}
	</style>
	<style type="text/css">
		.gm-style-pbc {
			transition: opacity ease-in-out;
			background-color: rgba(0, 0, 0, 0.45);
			text-align: center
		}

		.gm-style-pbt {
			font-size: 22px;
			color: white;
			font-family: Roboto, Arial, sans-serif;
			position: relative;
			margin: 0;
			top: 50%;
			-webkit-transform: translateY(-50%);
			-ms-transform: translateY(-50%);
			transform: translateY(-50%)
		}
	</style>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>XX Congreso Internacional de Informatica y Sistemas 2019</title>
	<meta name="keywords" content="CIISXX, ciisxx, postmaster, ciis turismo, feria tecnologica, tacna ciis, congreso internacional, concursos, conference, technology, university, universidad">
	<meta name="description" content="El XX Congreso internacional de Informática y Sistemas brindando todo una gama de conocimiento con ponentes de la mejor excelencia 
					posible de distintos países con distinto temas de la actualidad de la informática, fecha del gran evento Noviembre 2019.">

	<script src="src/js/hm.js"></script>
	
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120253818-1"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-120253818-1');
	</script>

	
	<meta name="theme-color" content="#529CE0">
	<meta name="msapplication-navbutton-color" content="#005DB2">
	<meta name="apple-mobile-web-app-status-bar-style" content="#005DB2">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">

	<link rel="shortcut icon" href="src/assets/media/image/icon.png">

	<link rel="stylesheet" type="text/css" href="src/css/main.min.css">
	<link rel="stylesheet" type="text/css" href="src/css/main_2.min.css">
	<link rel="stylesheet" type="text/css" href="src/css/font-awesome.min.css">

	<style type="text/css">
		.gm-style {
			font: 400 11px Roboto, Arial, sans-serif;
			text-decoration: none;
		}

		.gm-style img {
			max-width: none;
		}
	</style>

</head>

<body style="">

	<?php require(ROOT . '/' . PATH_VIEWS . 'head.php'); ?>

	<header id="home">
		
		<div class="wrapper">
			<img src="src/assets/media/image/ciistacna2.svg" style="width: 250px; margin: 10px 10px;" alt="CIIS">
			<h1>Noviembre 2019</h1>
			<h2>Universidad Nacional Jorge Basadre Grohmann</h2>
		</div>
		<article id="timeline">
			<div id="items">
				<a class="m15" href="<?= FOLDER_PATH . '/courses' ?>">
		<p>14 de Enero 2019</p>
		<h3>Talleres de verano</h3>
		<i class="fa fa-circle-o"></i>
		</a>

		<a class="small m10">
			<p>Próximamente</p>
			<h3>Inscripsiones XVI PostMaster</h3>
			<i class="fa fa-circle-o"></i>
		</a>

		<a class="m10">
			<p>Próximamente</p>
			<h3>XVI PostMaster</h3>
			<i class="fa fa-circle-o"></i>
		</a>

		<a class="small m15">
			<p>Próximamente</p>
			<h3>Inscripciones XX CIIS</h3>
			<i class="fa fa-circle-o"></i>
		</a>

		<a class="m5" target="_blank">
			<p>Noviembre 2019</p>
			<h3>XX CIIS y Eventos</h3>
			<i class="fa fa-circle-o"></i>
		</a>
		</div>
		<div id="progress">
			<div id="fill" style="width: 25%;"></div>
		</div>
		</article>
		

		

	</header>

	<main id="home">

		<?php 
			if($habilitar == true){
				echo '
				<section id="empresas" class="resizable">

			<a href="#" style="width: 6.75751%;"> <img src="src/assets/media/image/bbva.png" alt="BBVA"> </a>

			<a href="#"> <img src="src/assets/media/image/autentia.png" alt="Autentia">
			</a>

			<a href="#"> <img src="src/assets/media/image/airbus.png" alt="Airbus">
			</a>

			<a href="#"> <img src="src/assets/media/image/paradigma.png" alt="Paradigma">
			</a>

			<a href="#"> <img src="src/assets/media/image/redhat.png" alt="Red Hat">
			</a>

			<a href="#"> <img src="src/assets/media/image/google.png" alt="Google">
			</a>

			<a href="#"> <img src="src/assets/media/image/profile.png" alt="Profile">
			</a>

			<a href="#"> <img src="src/assets/media/image/opensistemas.png" alt="Open Sistemas">
			</a>

			<a href="#"> <img src="src/assets/media/image/sogeti.png" alt="Sogeti">
			</a>

			<a href="#" style="width: 6.75751%;"> <img src="src/assets/media/image/k2.png" alt="K2"> </a>

			<a href="#"> <img src="src/assets/media/image/plainconcepts.png" alt="Plain Concepts">
			</a>

		</section>
				';
			}
		?>

		<section>

			<?php 

			if ($habilitar == true) {
				echo '
				<div id="anc_headline" class="bg-gray-translucent next-to-cover">
				<div class="container-outer">
					<div class="container">
						<div class="soft-double-ends">
							<h2 class="heading-block ff-thin text-huge fc-inverse text-center text-shadow soft-top flush-bottom bd-inverse-top text-normal">
								Titulares
							</h2>
						</div>
					</div>
				</div>
			</div>

			<div class="board-headline bg-gray-translucent equalize clearfix">
				<div class="board-headline-container eq" style="visibility: visible">
					<a href="<?= FOLDER_PATH . \'/courses\' ?>" class="board-headline-anchor"></a>
					<div class="board-headline-bg">
						<div style="background-image: url(src/assets/media/image/titular1.png);"></div>
					</div>
					<div class="board-headline-base">
						<div class="board-headline-base-inner">
							<div class="board-headline-title">
								<h2>
									Talleres de verano 2019 </h2>
							</div>
							<div class="board-headline-summary">
								<time class="posted-date"> Inicio de clases: Lun, 14 Enero 2019</time>
								
							</div>
						</div>
					</div>
				</div>
				<div class="board-headline-container eq" style="visibility: visible">
					<a class="board-headline-anchor"></a>
					<div class="board-headline-bg">
						<div style="background-image: url(src/assets/media/image/titular2.jpg);"></div>
					</div>
					<div class="board-headline-base">
						<div class="board-headline-base-inner">
							<div class="board-headline-title">
								<h2>
									XX Congreso Internacional en Informatica y Sistemas </h2>
							</div>
							<div class="board-headline-summary">
								<time class="posted-date"> Noviembre 2019</time>
							</div>
						</div>
					</div>
				</div>
			</div>
				
				';
			}
			
			?>
			<div id="anc_topics" class="bg-gray-translucent">
				<div class="container-outer">
					<div class="container">

						<div class="soft-double-ends">
							<h2 class="heading-block ff-thin text-huge fc-inverse text-center text-shadow soft-top bd-inverse-top text-normal">
								Noticias
							</h2>
						</div>

						<div class="row row-tighten equalize push-double-bottom">
							<div class="col-sm-4">
								<div class="board board-filled push-half-bottom eq" style="visibility: visible; height: 354px;">
									<div class="board-image board-image-panel js-middle">
										<a href="http://www.unjbg.edu.pe/noticia/noticia.php?n=3185">
											<img width="360" height="270" src="src/assets/media/image/1.jpg"
											 class="img-responsive wp-post-image" alt=""
											 sizes="(max-width: 360px) 100vw, 360px"> </a>
									</div>
									<div class="board-drawer soft">
										<h5><a class="topic-letter" href="http://www.unjbg.edu.pe/noticia/noticia.php?n=3185">El jueves 3 de Enero empiezan las inscripciones de los talleres 2019 hasta el viernes 18 de Enero</a></h5>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="board board-filled push-half-bottom eq" style="visibility: visible; height: 354px;">
									<div class="board-image board-image-panel js-middle">
										<a href="<?= FOLDER_PATH . '/courses' ?>" target="_blank">
											<img width="360" height="270" src="src/assets/media/image/2.jpg" class="img-responsive wp-post-image"
											 alt=""
											 sizes="(max-width: 360px) 100vw, 360px"> </a>
									</div>
									<div class="board-drawer soft">
										<h5><a class="topic-letter" href="<?= FOLDER_PATH . '/courses' ?>" target="_blank">Inicio de clases, 14 de Enero, conoce el horario y el lugar de estudio </a></h5>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="board board-filled push-half-bottom eq" style="visibility: visible; height: 354px;">
									<div class="board-image board-image-panel js-middle">
										<a href="https://www.facebook.com/ciistacna/">
											<img width="360" height="270" src="src/assets/media/image/3.png" class="img-responsive wp-post-image"
											 alt="" sizes="(max-width: 360px) 100vw, 360px"> </a>
									</div>
									<div class="board-drawer soft">
										<h5><a class="topic-letter" href="https://www.facebook.com/ciistacna/">Conoce todos los detalles de los talleres</a></h5>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="board board-filled push-half-bottom eq" style="visibility: visible; height: 354px;">
									<div class="board-image board-image-panel js-middle">
										<a>
											<img width="360" height="270" src="src/assets/media/image/4.jpg" class="img-responsive wp-post-image"
											 alt="" sizes="(max-width: 360px) 100vw, 360px"> </a>
									</div>
									<div class="board-drawer soft">
										<h5><a class="topic-letter" >Evento próximo, XVI Postmaster</a></h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


		<section id="past">
			<div class="wrapper">
				<h2 style="text-align: center;">Conoce mas del evento 2019</h2>
				<div id="content">
					<article id="video">
						<div class="videoWrapper">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/aS5bgHWPZdM" frameborder="0" allowfullscreen=""></iframe>
						</div>
					</article>
					<article id="video">
						<div class="videoWrapper">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/FdkGY17DTDw" frameborder="0" allowfullscreen=""></iframe>
						</div>
					</article>
					<?php 
						if($habilitar == true) {
							echo '
							<article id="figures">
								<p>
									<i class="fa fa-users"></i>
									+400 <b>asistentes</b>
								</p>
								<p>
									<i class="fa fa-briefcase"></i>
									10 <b>empresas</b>
								</p>
								<p>
									<i class="fa fa-commenting"></i>
									+10 <b>charlas</b>
								</p>
							</article>
							';
						}
					?>

				</div>
			</div>
		</section>

		<section id="newsletter">
			<div class="wrapper">
				<h3>Entérate de todo</h3>
				<p><a style="color:#fff;" target="_blank">Síguenos a nuestras redes sociales</a></p>
				<ul>
					<li><a href="https://www.flickr.com/photos/160684070@N02/albums" target="_blank" title="Flickr de CIIS XX"><i
							 class="fa fa-flickr"></i></a></li>
					<!-- <li><a href="#" target="_blank" title="Linkedin de CIIS XX"><i class="fa fa-linkedin"></i></a></li> -->
					<li><a href="https://www.instagram.com/xx_ciis" target="_blank" title="Instagram de CIIS XX"><i class="fa fa-instagram"></i></a></li>
					<li><a href="https://www.youtube.com/user/ciistacna" target="_blank" title="YouTube de CIIS XX"><i class="fa fa-youtube"></i></a></li>
					<li><a href="https://www.facebook.com/ciistacna" target="_blank" title="Facebook de CIIS XX"><i class="fa fa-facebook-official"></i></a></li>
					<li><a href="https://twitter.com/ciistacna" target="_blank" title="Twitter de CIIS XX"><i class="fa fa-twitter"></i></a></li>
				</ul>
			</div>
		</section>

		<section id="photos">
			<img src="src/assets/media/image/home1.jpg">
			<img src="src/assets/media/image/home2.jpg">
			<img src="src/assets/media/image/home3.jpg">

			<img class="big" src="src/assets/media/image/home4.jpg">
			<img class="big" src="src/assets/media/image/home5.jpg">

			<img src="src/assets/media/image/home6.jpg">
			<img src="src/assets/media/image/home7.jpg">
			<img src="src/assets/media/image/home8.jpg">

			<img class="big" src="src/assets/media/image/home9.jpg">
			<img class="big" src="src/assets/media/image/home10.jpg">

			<img class="small responsive-hide" src="src/assets/media/image/home11.jpg">
			<img class="small responsive-hide" src="src/assets/media/image/home12.jpg">
			<img class="small responsive-hide" src="src/assets/media/image/home13.jpg">
			<a class="small responsive-hide" href="https://www.flickr.com/photos/160684070@N02/albums" target="_blank">
				<i class="fa fa-camera"></i>
				Ver más fotos
			</a>
		</section>

		<section id="infoinscription">
			<div class="wrapper">
				<h3>Inscríbete al XX CIIS</h3>
				<p>
					<a style="color:#fff;" target="_blank">
						Este evento comenzará en noviembre del 2019 <br>
						para más información ingrese <a href="https://www.facebook.com/ciistacna/" style="color: #4A00E0;">aquí</a> o comuníquenos al <i class="fa fa-whatsapp"></i> +51 971243797
					</a>
				</p>
			</div>
		</section>

		<a class="page-top bd-light-top bg-white top" href="<?= FOLDER_PATH . '/#top' ?>">Page Top</a>

		<!--
		<section id="location">
			<div id="auditorium">
				<a id="info" href="#">
					<h3>Auditorio Universidad Jorge Basadre Grohmann</h3>
					<p class="address">Avenida Miraflores, S/N <br> 23000 (Tacna-Perú)</p>
				</a>
			</div>
			
			<div id="map" style="position: relative; overflow: hidden;"></div>
		</section>
		-->
	</main>

	<?php require(ROOT . '/' . PATH_VIEWS . 'foot.php'); ?>

	<script src="src/js/jquery-1.10.1.min.js"></script>
	<script src="src/js/home.js"></script>

</body>

</html>