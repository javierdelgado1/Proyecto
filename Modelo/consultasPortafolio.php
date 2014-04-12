<?php
	include("conector.php");

	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			AgregarPortafolio();
			break;
		case 2:
			BuscarPerforacion();
			break;
		case 3:
			BuscarCurso();
			break;
		case 4:
			actualizarCurso();
			break;
	
		default;
	}
	function actualizarCurso(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$area=$_REQUEST['area'];
		$curso=$_REQUEST['curso'];
		$desde=$_REQUEST['desde'];;
		$hasta=$_REQUEST['hasta'];;
		$duracion=$_REQUEST['duracion'];
		$tupla="UPDATE portafolio SET Area='$area', Curso='$curso', Desde='$desde', Hasta='$hasta', Duracion='$duracion' WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		echo json_encode("true");
	}
	function BuscarCurso(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla = "SELECT * FROM  portafolio WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
	
		$objeto[0]['m']=$resultado->num_rows;

		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[0]['id']=$db_resultado['id'];
			$objeto[0]['Area']=$db_resultado['Area'];
			$objeto[0]['Curso']=$db_resultado['Curso'];
			$objeto[0]['Desde']=$db_resultado['Desde'];
			$objeto[0]['Hasta']=$db_resultado['Hasta'];
			
			$objeto[0]['Duracion']=$db_resultado['Duracion'];
			$objeto[0]['Archivo']=$db_resultado['Archivo'];
			 
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function BuscarPerforacion(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tipo=$_REQUEST['tipo'];
		$tupla="";
		if($tipo==1)
			$tupla = "SELECT * FROM  portafolio WHERE Area='Perforacion'";
		if($tipo==2)
			$tupla = "SELECT * FROM  portafolio WHERE Area='Yacimiento'";			
		if($tipo==3)
			$tupla = "SELECT * FROM  portafolio WHERE Area='Administracion'";
		if($tipo==4)
			$tupla = "SELECT * FROM  portafolio WHERE Area='Finanzas'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Curso']=$db_resultado['Curso'];

			$objeto[$i]['Desde']=$db_resultado['Desde'];
			$objeto[$i]['Hasta']=$db_resultado['Hasta'];

			$date = new DateTime($objeto[$i]['Desde']);
			$objeto[$i]['Desde']=$date->format('d-m-Y');
			$date = new DateTime($objeto[$i]['Hasta']);
			$objeto[$i]['Hasta']=$date->format('d-m-Y');
			$objeto[$i]['Duracion']=$db_resultado['Duracion'];
			$objeto[$i]['Archivo']=$db_resultado['Archivo'];
			 $i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}


	function AgregarPortafolio(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$area=$_REQUEST['area'];
		$curso=$_REQUEST['curso'];
		$desde=$_REQUEST['desde'];;
		$hasta=$_REQUEST['hasta'];;
		$duracion=$_REQUEST['duracion'];
		$tupla = "INSERT INTO portafolio (`Area`, `Curso`, `Desde`, `Hasta`, `Duracion`) VALUES ('$area','$curso','$desde','$hasta','$duracion')";
		$resultado = $mysqli->query($tupla);

		echo json_encode("true");
	}

?>