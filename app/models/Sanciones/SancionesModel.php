<?php 

	class SancionesModel extends Model
	{
		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarSanciones(){
			$query = "SELECT CONCAT(nombre_usuario,' ',apellido_usuario) as nombre_estudiante, cod_biblioteca_est, fecha_sancion_inicio, fecha_sancion_final FROM sancion S inner join estudiante E on E.id_estudiante=S.id_estudiante inner join usuario U on U.id_usuario=E.id_usuario";
			$res = $this->db->query($query);
			return $res;
		}

		
	}

 ?>