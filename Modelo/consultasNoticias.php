<?php
	include("conector.php");

	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			PublicarNoticia();
			break;
		case 2:
			ObtenerNoticias();
			break;

		case 3:
			eliminarNoticias();
			break;
		case 4:
			obtenernoticia();
			break;
		case 5:
			actualizar();
			break;


		
		default;
	}
	function actualizar(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];		
		$titulo=$_REQUEST['titulo'];
		$cuerpo=$_REQUEST['cuerpo'];
		$tupla="UPDATE  noticias set Titulo='$titulo', Cuerpo='$cuerpo' WHERE  id='$ID'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();	
		echo json_encode("true");

	}
	function obtenernoticia(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];		
		$tupla="SELECT * FROM noticias  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;		
		$objeto[0]['m']=$resultado->num_rows;
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[0]['id']=$db_resultado['id'];
			$objeto[0]['Titulo']=$db_resultado['Titulo'];
			$objeto[0]['Cuerpo']=$db_resultado['Cuerpo'];

			
			$date = new DateTime($db_resultado['Fecha']);
			$objeto[0]['Fecha']=$date->format('d-m-Y');			
			
		}
		$mysqli->close();	
		echo json_encode($objeto);
	}
	function eliminarNoticias(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];		
		$tupla="DELETE FROM noticias  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");

	}
	function ObtenerNoticias(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT * FROM noticias order by id desc;";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Titulo']=$db_resultado['Titulo'];
			$objeto[$i]['Cuerpo']=$db_resultado['Cuerpo'];
				
			$date = new DateTime($db_resultado['Fecha']);
			$objeto[$i]['Fecha']=$date->format('d-m-Y');					
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function PublicarNoticia(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);

		$Titulo=$_REQUEST['Titulo'];
		$Cuerpo=addslashes($_REQUEST['Cuerpo']);
		$fecha=date("Y-m-d");
		$error="nada ";
		$tupla = "INSERT INTO noticias (Titulo, Cuerpo, Fecha) VALUES ('$Titulo','$Cuerpo', '$fecha')";
		$resultado = $mysqli->query($tupla) or $error=$mysqli->error ;
		/*$id = $mysqli->insert_id;*/	
		$mysqli->close();	
		echo json_encode($error);
	}
?>