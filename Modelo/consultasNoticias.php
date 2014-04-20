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

		
		default;
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
			$objeto[$i]['Fecha']=$db_resultado['Fecha'];			
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