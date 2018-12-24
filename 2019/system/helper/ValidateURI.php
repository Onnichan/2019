<?php 

	class ValidateURI
	{
		static function ValidateController($controller){
			if(is_file(PATH_CONTROLLERS . "{$controller}/{$controller}Controller.php")){
				return true;
			}
			return false;
		}

		static function ValidateMethod($controller,$method){
			if(method_exists($controller,$method)){
				return true;
			}
			return false;

		}		
	}

 ?>