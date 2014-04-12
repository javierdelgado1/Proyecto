<?php
	include("conector.php");

	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			iniciarSesion();
			break;
		case 2:
			ValidarSesion();
			break;
		case 3:
			cerrarSesion();
			break;

		
		default;
	}
	function cerrarSesion(){
		session_start();
		session_destroy();

	}
	function ValidarSesion(){
		session_start();
		if(isset($_SESSION['id']))
			echo "true";
		else 
			echo "false";

	}

	function iniciarSesion(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$correo = $_REQUEST['temail'];
		$pass = $_REQUEST['tpass'];
		$tupla = "SELECT Nombre, Usuario, id, Contrasena FROM usuario WHERE  Usuario='$correo'";
		$resultado = $mysqli->query($tupla);
		$objeto=mysqli_fetch_array($resultado, MYSQLI_ASSOC);	
		$salida=false;
		if($objeto['Contrasena']==$pass)
		{
			session_start();
			$_SESSION['id'] =$objeto['id'];			

			echo "true";
		}
		else {

			echo "false";
		}

		$mysqli->close();
	}

?>