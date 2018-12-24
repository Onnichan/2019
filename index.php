
<?php 

require 'system/config.php';
require 'system/core/autoload.php';
require 'system/helper/ValidateURI.php';
//error_reporting(0);

$router = new Router();
$controlador = $router->getController();
$metodo = $router->getMethod();
$param = $router->getParam();

if(!ValidateURI::ValidateController($controlador)){
	$controlador = 'ErrorPage';
}

require PATH_CONTROLLERS."{$controlador}/{$controlador}Controller.php";
$controlador = $controlador."Controller";

if(!ValidateURI::ValidateMethod($controlador,$metodo)){
	$metodo = 'exec';
}

$controller = new $controlador();
$controller->$metodo($param);

?>
