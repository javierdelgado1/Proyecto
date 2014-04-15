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
		case 3:
			ObtenerCorreoDestinatario();
			break;

		default;
	}
	function ObtenerCorreoDestinatario(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT Correo FROM  contacto WHERE  id='1'";
		$email="";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['m']=$resultado->num_rows;
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[0]['email']=$db_resultado['Correo'];	
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function enviarMailContacto(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT Correo FROM  contacto WHERE  id='1'";
		$resultado = $mysqli->query($tupla);
		$nombre=$_REQUEST['nombre'];
		$telefono=$_REQUEST['telefono'];
		$correo=$_REQUEST['correo'];
		$mensaje=$_REQUEST['mensaje'];
		$email="";
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$email=$db_resultado['Correo'];		
			/*echo "Id Contrato: ".$id."<br>";*/
			

			
			$asunto="Contacto ".$nombre." - ".$telefono." ";

			$headers = "MIME-Version: 1.0\r\n"; 
			$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
			$headers .= "From: GlobalSys <".$correo.">\r\n"; 				
			$headers .= "Reply-To: ".$correo."\r\n"; 
			mail($email, $asunto, $mensaje, $headers);

		}
		$mysqli->close();
	

	}

	function ActualizarMailContacto(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$correo=$_REQUEST['correo'];
		$tupla="UPDATE  contacto SET Correo='$correo' WHERE id='1'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();

	}

?>