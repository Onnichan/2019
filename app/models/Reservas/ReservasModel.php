<?php 

	class ReservasModel extends Model
	{
		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarReservas(){
			$query = "SELECT concat(nombre_usuario,' ',apellido_usuario) as Nombres_Apellidos, 
				codigo_universitario,
				codigo_ejemplar,
				fecha_reserva,
				fecha_limite,
				fecha_entregado FROM reserva R
				inner join estudiante E on E.id_estudiante=R.id_estudiante 
				inner join usuario U on U.id_usuario=E.id_usuario
				inner join ejemplar EJ on EJ.id_ejemplar=R.id_ejemplar
                WHERE fecha_reserva <= CURDATE() 
				AND fecha_limite = DATE_ADD(fecha_reserva, INTERVAL 3 DAY)";

				$res = $this->db->query($query);
				return $res;
		}
	}
 ?>