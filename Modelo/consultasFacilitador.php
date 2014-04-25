<?php
	include("conector.php");
	include("funcionesGlobales.php");
	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			AgregarFacilitador();
			break;

		case 2:
			ObtenerFacilitadores();
			break;
		case 3: 
			editarFacilitador();
			break;
		case 4:
			ObtenerFacilitadorEspecifico();
			break;
		case 5:
			EliminarFacilitador();
			break;
		default;
	}
	function EliminarFacilitador(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="DELETE FROM  facilitador WHERE  id='$ID'";		
		$error="true";
		$resultado = $mysqli->query($tupla) or $error=$mysqli->error;		
		$mysqli->close();
		$ubicacion = '../server/php/files/facilitador/'.$ID;
		eliminarArchivos($ubicacion);
		echo json_encode($error);	
	}
	function ObtenerFacilitadorEspecifico(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="SELECT  * FROM  facilitador WHERE  id='$ID'";

		$resultado = $mysqli->query($tupla);
		$objeto[0]['m']=$resultado->num_rows;
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[0]['id']=$db_resultado['id'];
			$objeto[0]['Nombre']=$db_resultado['Nombre'];
			$objeto[0]['Apellido']=$db_resultado['Apellido'];
			$objeto[0]['Telefono']=$db_resultado['Telefono'];
			$objeto[0]['Correo']=$db_resultado['Correo'];
			$objeto[0]['Area']=$db_resultado['Area'];
			$objeto[0]['Curso']=$db_resultado['Curso'];			
		}
		$mysqli->close();
		echo json_encode($objeto);

	}
	function editarFacilitador(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		$Area=$_REQUEST['Areas'];
		$Curso=$_REQUEST['Curso'];
		$error="true";
		$tupla="UPDATE facilitador  SET  Nombre='$Nombre', Apellido='$Apellido', Telefono='$Telefono', Correo='$Correo', Area='$Area', Curso='$Curso' WHERE  id='$ID'";
		$resultado = $mysqli->query($tupla) or $error=$mysqli->error;
		$mysqli->close();
		echo json_encode($error);

	}
	function ObtenerFacilitadores(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT id, Nombre, Apellido, Telefono, Correo FROM facilitador";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Nombre']=$db_resultado['Nombre'];
			$objeto[$i]['Apellido']=$db_resultado['Apellido'];
			$objeto[$i]['Telefono']=$db_resultado['Telefono'];
			$objeto[$i]['Correo']=$db_resultado['Correo'];							
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function AgregarFacilitador(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		$Area=$_REQUEST['Areas'];
		$Curso=$_REQUEST['Curso'];
		$error="true";
		$tupla="INSERT INTO  facilitador (Nombre, Apellido, Telefono, Correo, Area, Curso) 
		                         VALUES ('$Nombre','$Apellido','$Telefono','$Correo','$Area','$Curso')";
	 	$resultado = $mysqli->query($tupla) or $error=$mysqli->error;
		$id = $mysqli->insert_id;
		session_start();
		$ubicacion = '../server/php/files/tempfacilitador/'.session_id();
		$destino = '../server/php/files/facilitador/'.$id;
		moverArchivos($ubicacion,$destino);
		$mysqli->close();	
		echo json_encode($error);                    
	}
?>