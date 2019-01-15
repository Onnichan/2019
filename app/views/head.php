<nav id="main-nav" style="scroll-behavior: smooth;">

		<a href="<?= FOLDER_PATH . '/' ?>" id="logo"><img src="src/assets/media/image/ciistacna.svg" alt="ciistacna"></a>

		<input type="checkbox" id="responsive-status-menu" name="resposive-status-menu">
		<label for="responsive-status-menu" class="responsive-toggle-menu">
			<span class="icon-toggle"></span>
		</label>

		<div class="responsive-menu">
			<ul class="menu">
				<li class="item"><a href="<?= FOLDER_PATH . '/courses'?>">Programa de Talleres</a></li>
				<?php 
				/*
					<li class="item"><a href="#">Ponentes</a></li>
				<li class="item"><a href="#">Patrocinadores</a></li>
				<li class="item with-submenu">
					<a href="#">Eventos</a>
					<ul class="submenu">
						<li class="subitem"><a href="#">PostMaster</a></li>
						<li class="subitem"><a href="#">Talleres</a></li>
						<li class="subitem"><a href="#">Feria tecnológica</a></li>
						<li class="subitem"><a href="#">Concursos</a></li>
					</ul>
				</li>
				<li class="item"><a href="#">Organizadores</a></li>
				*/
				?>
				<li class="item with-submenu">
					<a href="#">Eventos Anteriores</a>
					<ul class="submenu">
						<li class="subitem"><a href="http://ciistacna.com/2018/" style="width: 190px;">XIX CIIS</a></li>
					</ul>
				</li>
			</ul>

			<a href="https://www.facebook.com/ciistacna/" id="call-to-action" target="_blank"><i class="fa fa-facebook-square"></i> &nbsp; Síguenos en facebook</a>
		</div>
	</nav>