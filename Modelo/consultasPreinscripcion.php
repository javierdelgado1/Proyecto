<?php
	include("conector.php");
	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			inscribir();
			break;		
		/*case 2:
			consultarCupos();
			break;*/

		default;
	}

	function consultarCupos($idArea, $idCurso){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		
		$tupla="SELECT cupos FROM portafolio WHERE  id='$idCurso'";
		$resultado = $mysqli->query($tupla);
		$cupos="";
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$cupos=$db_resultado['cupos'];			
		}

		$tupla="SELECT count(*) as inscritos FROM inscritos WHERE  idArea='$idArea' AND  idCurso='$idCurso'";
		$resultado = $mysqli->query($tupla);
		$inscritos="";
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$inscritos=$db_resultado['inscritos'];			
		}

		$disponibles=$cupos-$inscritos;

		$mysqli->close();
		return $disponibles;
	}
	function inscribir(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		
		$idArea=$_REQUEST['idArea'];
		$idCurso=$_REQUEST['Curso'];
		$Modalidad=$_REQUEST['Modalidad'];
		$Fecha=$_REQUEST['Fecha'];
		$Temas=$_REQUEST['Temas'];
		if(consultarCupos($idArea,$idCurso)>0){
			$Tupla="INSERT INTO inscritos (Nombre, Apellido, Telefono, Correo, idCurso, Fechadeinicio, Temasdeinteres, Modalidad, idArea)  VALUES ('$Nombre', '$Apellido', '$Telefono', '$Correo', '$idCurso', '$Fecha', '$Temas', '$Modalidad', '$idArea')";
			$resultado = $mysqli->query($Tupla) ;
			$mysqli->close();
			echo json_encode("true");
		}
		else{
			echo json_encode("false");
		}

	}


?>