<?php 

	class View
	{
		protected $template;
		protected $controller_name;
		protected $param;
		
		public function __construct($controller_name, $param)
		{
			$this->controller_name = $controller_name;
			$this->param = $param;
			$this->render();
		}

		protected function render(){
			if (class_exists($this->controller_name)) {
				$file_name = str_replace('Controller', '', $this->controller_name);
				$this->template = $this->getContentTemplate($file_name);
				echo $this->template;
			}
			else{
				throw new Exception("-ERROR: No existe {$this->controller_name}");		
			}
		}

		protected function getContentTemplate($file_name){
			$file_path = ROOT . '/' . PATH_VIEWS . "{$file_name}/{$file_name}View.php";
			
			if (is_file($file_path)) {
				extract($this->param);	//Transforma los elementos del array $param en variables independiente
				ob_start();
				require($file_path);
				$template = ob_get_contents();
				ob_end_clean();
				return $template;
			}
			else{
				throw new Exception("-ERROR: No existe {$file_path}");	
			}
		}
	}

 ?>