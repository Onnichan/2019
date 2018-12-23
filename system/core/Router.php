<?php 

class Router
{
	public $uri;
	public $controller;
	public $method;
	public $param;
	
	function __construct()
	{
		$this->setUri();
		$this->setController();
		$this->setMethod();
		$this->setParam();
	}

	public function setUri(){
		$this->uri = explode('/', URI);
	}

	public function setController(){
		if($this->uri[2] === ''){
			$this->controller = 'Home';
		}
		else{
			$this->controller = $this->uri[2];
		}
	} 

	public function setMethod(){
		if(empty($this->uri[3])){
			$this->method = 'exec'; 
		}
		else{
			$this->method = $this->uri[3];
		}
	} 

	public function setParam(){
		if($_SERVER['REQUEST_METHOD'] == 'POST'){
			$this->param = $_POST;
		}
		else if($_SERVER['REQUEST_METHOD'] == 'GET'){
			if(empty($this->uri[4])){
				$this->param = '';
			}
			else{
				$this->param = $this->uri[4];
			}
		}
	} 

	public function getUri(){
		return $this->uri;
	}

	public function getController(){
		return $this->controller;
	}

	public function getMethod(){
		return $this->method;
	}

	public function getParam(){
		return $this->param;
	}
}

 ?>