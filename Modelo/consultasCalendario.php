<?php
include("conector.php");
$id=$_REQUEST['id'];
switch($id)
{
	case 1:
	ListarAreas();
	break;
	default;
}

function ListarAreas(){
	$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
	$query="SELECT * FROM areas";
	$resultado = $mysqli->query($query);
	$objeto = array();
	$i=0;
	while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
	{
		$objeto[$i++] = $db_resultado;	
	}
	$mysqli->close();
	echo json_encode($objeto);
}

?>