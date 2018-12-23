<?php 

	class newModel extends Model
	{
		
		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarDetalle($idtext){
			$query = "SELECT
						ge.id_genero,
						ge.nombre_genero as nom_genero
					FROM texto te
					INNER JOIN coleccion co 
					ON co.id_texto = te.id_texto
					INNER JOIN categoria ca 
					ON ca.id_categoria = co.id_categoria
					INNER JOIN genero ge 
					ON ge.id_genero = co.id_genero
					WHERE co.id_categoria = 1 AND te.id_texto = '$idtext'
					GROUP BY ge.id_genero";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleLibro($idtext){
			$query = "SELECT
						te.id_texto,
						te.nombre_texto,
						ed.nombre_editorial,
						li.isbn_libro
					FROM texto te
					INNER JOIN libro li
					ON li.id_texto = te.id_texto
					INNER JOIN editorial ed
					ON ed.id_editorial = li.id_editorial
					WHERE te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleTesis($idtext){
			$query = "SELECT
						te.id_texto,
						te.nombre_texto,
						gr.nombre_grado
					FROM texto te
					INNER JOIN tesis tes
					ON tes.id_texto = te.id_texto
					INNER JOIN grado gr
					ON gr.id_grado = tes.id_grado
					WHERE te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleArticulo($idtext){
			$query = "SELECT
						te.id_texto,
						te.nombre_texto
					FROM texto te
					WHERE te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}


		public function InsertarReserva($idtext, $iduser){
			
			$query1 = "SELECT MIN(e.id_ejemplar) as Ejemplar FROM ejemplar e
			WHERE e.id_texto = ".$idtext." AND e.disponible_ejemplar = 1";
			$res1 = $this->db->query($query1);
			$consulta1 = $res1->fetch_array();

			$query2 = "SELECT us.ident_usuario, es.id_estudiante FROM estudiante es
						INNER JOIN usuario us
						ON us.id_usuario = es.id_usuario
						WHERE us.ident_usuario = '$iduser'";
			$res2 = $this->db->query($query2);
			$consulta2 = $res2->fetch_array();
			$idestudiante = $consulta2['id_estudiante'];
			
			$query2 = "INSERT INTO reserva(id_estudiante, id_ejemplar, fecha_reserva, fecha_limite) VALUES ('".$idestudiante."', ".$consulta1['Ejemplar'].", NOW(), NOW() + INTERVAL 3 DAY)";
			$this->db->query($query2);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Editorial";
			}

			$query3 = "UPDATE ejemplar SET disponible_ejemplar = 0 WHERE id_ejemplar = ".$consulta1['Ejemplar']."";
			$this->db->query($query3);

		}

		public function MostrarCantidad($idtext){

			$query = "SELECT COUNT(e.disponible_ejemplar) AS disponible FROM ejemplar e
			WHERE e.id_texto = ".$idtext." AND e.disponible_ejemplar = 1";

			$res = $this->db->query($query);
			return $res;
		}
		
		public function MostrarDetalleReserva($iduser, $idtext){

			$query = "SELECT re.id_reserva, us.ident_usuario, re.id_ejemplar, re.fecha_reserva, re.fecha_limite, re.fecha_entregado FROM reserva re
						INNER JOIN estudiante es
						ON es.id_estudiante = re.id_estudiante
						INNER JOIN usuario us
						ON us.id_usuario = es.id_usuario
						INNER JOIN  ejemplar ej
						ON ej.id_ejemplar = re.id_ejemplar
						WHERE us.ident_usuario = '".$iduser."' AND ej.id_texto = '$idtext'
						ORDER BY re.id_reserva DESC LIMIT 1";

			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleSancion($iduser){

			$query = "SELECT sa.id_sancion, us.ident_usuario, sa.id_estudiante, sa.fecha_sancion_inicio, sa.fecha_sancion_final FROM sancion sa
						INNER JOIN estudiante es
						ON es.id_estudiante = sa.id_estudiante
						INNER JOIN usuario us
						ON us.id_usuario = es.id_usuario
						WHERE us.ident_usuario = '".$iduser."'
						ORDER BY sa.id_sancion DESC LIMIT 1";

			$res = $this->db->query($query);
			return $res;
		}

	}

 ?>