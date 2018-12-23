<?php 

	class textModel extends Model
	{
		
		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarDetalle($idtext){
			$query = "SELECT
						te.id_texto,
						ge.id_genero
					FROM texto te
					INNER JOIN coleccion co 
					ON co.id_texto = te.id_texto
					INNER JOIN categoria ca 
					ON ca.id_categoria = co.id_categoria
					INNER JOIN genero ge 
					ON ge.id_genero = co.id_genero
					WHERE ca.id_categoria = 1 AND te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}


		public function MostrarDetalleLibro($idtext){
			$query = "SELECT
						te.id_texto,
						ge.id_genero,
						te.foto_portada,
						te.nombre_texto,
						te.fecha_publicacion as Anio,
						te.num_paginas,
						te.cantidad_total,
						te.cantidad_stock,
						MIN(CASE WHEN ca.nombre_categoria='Tipo' THEN ge.nombre_genero END) AS Tipo,
						MIN(CASE WHEN ca.nombre_categoria='Materia' THEN ge.nombre_genero END) AS Materia,
						ed.nombre_editorial,
						edi.nombre_edicion,
						li.isbn_libro
					FROM texto te
					INNER JOIN coleccion co 
					ON co.id_texto = te.id_texto
					INNER JOIN categoria ca 
					ON ca.id_categoria = co.id_categoria
					INNER JOIN genero ge 
					ON ge.id_genero = co.id_genero
					INNER JOIN libro li
					ON li.id_texto = te.id_texto
					INNER JOIN editorial ed
					ON ed.id_editorial = li.id_editorial
					INNER JOIN edicion edi
					ON edi.id_edicion = li.id_edicion
					WHERE ca.id_categoria = 1 AND te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleTesis($idtext){
			$query = "SELECT
						te.id_texto,
						ge.id_genero,
						te.foto_portada,
						te.nombre_texto,
						te.fecha_publicacion as Anio,
						te.num_paginas,
						te.cantidad_total,
						te.cantidad_stock,
						MIN(CASE WHEN ca.nombre_categoria='Tipo' THEN ge.nombre_genero END) AS Tipo,
						MIN(CASE WHEN ca.nombre_categoria='Materia' THEN ge.nombre_genero END) AS Materia,
						gr.nombre_grado
					FROM texto te
					INNER JOIN coleccion co 
					ON co.id_texto = te.id_texto
					INNER JOIN categoria ca 
					ON ca.id_categoria = co.id_categoria
					INNER JOIN genero ge 
					ON ge.id_genero = co.id_genero
					INNER JOIN tesis tes
					ON tes.id_texto = te.id_texto
					INNER JOIN grado gr
					ON gr.id_grado = tes.id_grado
					WHERE ca.id_categoria = 1 AND te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDetalleArticulo($idtext){
			$query = "SELECT
						te.id_texto,
						ge.id_genero,
						te.foto_portada,
						te.nombre_texto,
						te.fecha_publicacion as Anio,
						te.num_paginas,
						te.cantidad_total,
						te.cantidad_stock,
						MIN(CASE WHEN ca.nombre_categoria='Tipo' THEN ge.nombre_genero END) AS Tipo,
						MIN(CASE WHEN ca.nombre_categoria='Materia' THEN ge.nombre_genero END) AS Materia
					FROM texto te
					INNER JOIN coleccion co 
					ON co.id_texto = te.id_texto
					INNER JOIN categoria ca 
					ON ca.id_categoria = co.id_categoria
					INNER JOIN genero ge 
					ON ge.id_genero = co.id_genero
					WHERE ca.id_categoria = 1 AND te.id_texto = ".$idtext."
					GROUP BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarEjemplar($codigo_textos){
			$query = "SELECT
						ej.id_ejemplar,
						ej.codigo_ejemplar,
						ej.disponible_ejemplar
					FROM texto te
					INNER JOIN ejemplar ej
					ON ej.id_texto = te.id_texto
					WHERE te.id_texto = '$codigo_textos'
					ORDER BY te.id_texto";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarDatosUsuario($idUsuario){
			$query = "SELECT ident_usuario, t.id_tipousuario, t.nombre_tipo, u.nombre_usuario, u.apellido_usuario, u.genero FROM usuario u
						INNER JOIN tipo_usuario t
						ON t.id_tipousuario = u.id_tipousuario
						WHERE u.ident_usuario = '".$idUsuario."'";
			$res = $this->db->query($query);
			return $res;
		}
		
	}

 ?>