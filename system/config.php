<?php 

	//Para obtener el 'Identificador Unifore de Recursos' 
	define('URI', $_SERVER['REQUEST_URI']);

	//Para el Autoload
	define('CORE', 'system/core/');
	define('DEFAULT_CONTROLLER', 'Home');

	//Para la ruta de los controladores
	define('PATH_CONTROLLERS', 'app/controllers/');

	//define('PATH_VIEWS','app/views');
	define('PATH_VIEWS', 'CIIS-2019/app/views/');
	define('ROOT', $_SERVER['DOCUMENT_ROOT']);

	//Para el nombre del folder principal
	define('FOLDER_PATH','/CIIS-2019');

	
	define('LIBS_ROUTE', ROOT . FOLDER_PATH . '/system/libs/');
	define('REQUEST_METHOD', $_SERVER['REQUEST_METHOD']);
	define('HELPER_PATH', 'system/helper/');

	//Para la BD
	define('HOST', 'localhost');
	define('USER', 'root');
	define('PASS', '');
	define('DB', 'bd_biblioteca');

	define('ERROR_REPORTING_LEVEL', -1);
?>