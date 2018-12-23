<?php 

	abstract class Controller
	{
		private $view;

		abstract function exec();

		public function render($controller_name = '', $param = array()){
			$this->view = new View($controller_name, $param);
		}
	}

 ?>