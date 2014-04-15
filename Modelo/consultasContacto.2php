<?php
	include("conector.php");
	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			ActualizarMailContacto();
			break;
		case 2:
			enviarMailContacto();
			break;
		default;
	}
	function enviarMailContacto(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT Correo FROM  contacto WHERE  id='1'";
		$resultado = $mysqli->query($tupla);
		$nombre=$_REQUEST['nombre'];
		$telefono=$_REQUEST['telefono'];
		$correo=$_REQUEST['correo'];
		$mensaje=$_REQUEST['mensaje'];
		$email="":
		/*if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$email=$db_resultado['Correo'];		
		
		}
		$mysqli->close();*/
		 echo "ghola";

	}

	function ActualizarMailContacto(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$correo=$_REQUEST['correo'];
		$tupla="UPDATE  contacto SET Correo='$correo' WHERE id='1'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();

	}

?>