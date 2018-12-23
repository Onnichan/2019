<?php 

	class Session
	{

		public function add($name, $value){
			session_start();
			$_SESSION[$name] = $value;
		}

		public function get($name){
			if(empty($_SESSION[$name])) {
				return null;
			}
			else{
				return $_SESSION[$name];
			}
		}
		public function getAll(){
			session_start();
			return $_SESSION;
		}

		public function getStatus(){
			session_start();
			return session_status();
		}

		public function close(){
			//session_unset();
			session_start();
			session_destroy();
		}
	}

 ?>