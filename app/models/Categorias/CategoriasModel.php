<?php 

	class CategoriasModel extends Model
	{
		public function __construct()
		{
			parent::__construct();
		}

		public function MostrarCategorias(){
			$query = "SELECT id_genero, nombre_genero FROM genero WHERE id_categoria=2 order by id_genero";
			$res = $this->db->query($query);
			return $res;
		}

		public function MostrarEditoriales(){
			$query = "SELECT id_editorial, nombre_editorial FROM editorial order by id_editorial";
			$res = $this->db->query($query);
			return $res;
		}

		public function InsertarCategoria($datos){
			$query = "INSERT INTO genero(id_categoria, nombre_genero) VALUES('2', '$datos[nombrecategoria]')";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Categoria";
			}
		}

		public function InsertarEditorial($datos){
			$query = "INSERT INTO editorial(nombre_editorial) VALUES('$datos[nombreeditorial]')";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo insertar Editorial";
			}
		}

		public function ModificarCategoria($datos){
			$query = "UPDATE genero SET nombre_genero='$datos[nombrecategoria]' WHERE id_genero='$datos[idcategoria]'";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo modificar Categoria";
			}
		}

		public function ModificarEditorial($datos){
			$query = "UPDATE editorial SET nombre_editorial='$datos[nombreeditorial]' WHERE id_editorial='$datos[ideditorial]'";
			$this->db->query($query);
			if($this->db->affected_rows < 0){
				echo "-ERROR: No se pudo modificar Editorial";
			}
		}
	}

 ?>