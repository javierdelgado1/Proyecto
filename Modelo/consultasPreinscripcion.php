<?php
	include("conector.php");
	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			inscribir();
			break;		

		default;
	}

	function inscribir(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		
		$Curso=$_REQUEST['Curso'];
		$Modalidad=$_REQUEST['Modalidad'];
		$Fecha=$_REQUEST['Fecha'];
		$Temas=$_REQUEST['Temas'];

		$Tupla="INSERT INTO inscritos (Nombre, Apellido, Telefono, Correo, DiplomadoCursoTaller, Fechadeinicio, Temasdeinteres, Modalidad)  VALUES ('$Nombre', '$Apellido', '$Telefono', '$Correo', '$Curso', '$Fecha', '$Temas', '$Modalidad')";
		$resultado = $mysqli->query($Tupla) ;
		$mysqli->close();
		echo json_encode("true");

	}


?>