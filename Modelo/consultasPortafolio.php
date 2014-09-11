<?php
	include("conector.php");
	include("funcionesGlobales.php");

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
		case 5:
			EliminarCurso();
			break;
		case 6:
			inscritos();
			break;
		case 7:
			MostrarInscrito();
			break;
		case 8:
			Actualizarinscrito();
			break;
		case 9:
			EliminarInscrito();
			break;
		case 10:
			BuscarCursosDeArea();
			break;
		case 11: 
			ObtenerTodoslosCursos();
			break;
		case 12 :
			ObtenerFechasdeCurso();
			break;
		case 13 :
			ObtenerProximosCursos();
			break;
		case 14:
			crearArea();
			break;
		case 15:
			ObtenerAreas();
			break;
		case 16:
			ObtenerAreaEspecifico();
			break;
		case 17:
			ActualizarArea();
			break;
		case 18:
			buscarCursoSegunArea();
			break;
		default;
	}

	function buscarCursoSegunArea(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$id=$_REQUEST['ID'];
		$tupla="SELECT  Curso, id FROM  portafolio Where Area='$id'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['m']=$resultado->num_rows;
		$i=0;		
		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['nombre']=$db_resultado['Curso'];
			$objeto[$i]['id']=$db_resultado['id'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function ActualizarArea(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$id=$_REQUEST['ID'];
		$NombreArea=$_REQUEST['NombreArea2'];
		$tupla="UPDATE areas SET nombre = '$NombreArea' WHERE id = '$id'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");
	}
	function ObtenerAreaEspecifico(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$id=$_REQUEST['ID'];
		$tupla="SELECT * FROM areas WHERE  id='$id'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['m']=$resultado->num_rows;
		$i=0;
		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['nombre']=$db_resultado['nombre'];
			$objeto[$i]['id']=$db_resultado['id'];
			//$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function ObtenerAreas(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla = "SELECT * FROM areas ORDER BY id DESC";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['m']=$resultado->num_rows;
		$i=0;
		
		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['nombre']=$db_resultado['nombre'];
			$objeto[$i]['id']=$db_resultado['id'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function crearArea(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$NombreArea=$_REQUEST['NombreArea'];
		$tupla="INSERT INTO areas (nombre) values ('$NombreArea')";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");
	}
	function ObtenerProximosCursos(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$desde=$_REQUEST['desde'];
		$tupla = "SELECT * FROM portafolio WHERE (UNIX_TIMESTAMP(Desde) >= $desde) ORDER BY Desde LIMIT 5";
		$resultado = $mysqli->query($tupla);
		$i=0;
		$objeto = array();
		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['Area']=$db_resultado['Area'];
			$objeto[$i]['Curso']=$db_resultado['Curso'];
			$objeto[$i]['Cupos']=$db_resultado['Cupos'];
			$objeto[$i]['Desde']=explode("-", $db_resultado['Desde']);
			$objeto[$i]['Hasta']=explode("-", $db_resultado['Hasta']);
			$objeto[$i]['Duracion']=$db_resultado['Duracion'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function ObtenerFechasdeCurso(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$desde=$_REQUEST['desde'];
		$hasta=$_REQUEST['hasta'];
		$tupla = "SELECT * FROM portafolio WHERE (UNIX_TIMESTAMP(Desde) BETWEEN $desde AND $hasta)";
		$resultado = $mysqli->query($tupla);
		$i=0;
		$objeto = array();
		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['Area']=$db_resultado['Area'];
			$objeto[$i]['Curso']=$db_resultado['Curso'];
			$objeto[$i]['Cupos']=$db_resultado['Cupos'];
			$objeto[$i]['Desde']=explode("-", $db_resultado['Desde']);
			$objeto[$i]['Hasta']=explode("-", $db_resultado['Hasta']);
			$objeto[$i]['Duracion']=$db_resultado['Duracion'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function ObtenerTodoslosCursos(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla = "SELECT * FROM  portafolio";
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
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function BuscarCursosDeArea(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$Area=$_REQUEST['Areas'];
		$tupla="SELECT Curso FROM portafolio WHERE Area='$Area'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['Curso']=$db_resultado['Curso'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function EliminarInscrito(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];		
		$tupla="DELETE FROM inscritos  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");
	}
	function Actualizarinscrito(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		$diplomadocursotaller=$_REQUEST['diplomadocursotaller'];
		$fecha=$_REQUEST['Fecha'];
		$Tema=$_REQUEST['Tema'];
		$Modalidad=$_REQUEST['Modalidad'];
		$tupla="UPDATE inscritos SET Nombre='$Nombre', Apellido='$Apellido', Telefono='$Telefono', Correo='$Correo', DiplomadoCursoTaller='$diplomadocursotaller',  Fechadeinicio='$fecha', Temasdeinteres='$Tema', Modalidad='$Modalidad' WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");
	}
	function MostrarInscrito(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="SELECT *  FROM inscritos WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Nombre']=$db_resultado['Nombre'];
			$objeto[$i]['Apellido']=$db_resultado['Apellido'];
			$objeto[$i]['Telefono']=$db_resultado['Telefono'];			
			$objeto[$i]['Correo']=$db_resultado['Correo'];
			$objeto[$i]['DiplomadoCursoTaller']=$db_resultado['DiplomadoCursoTaller'];
			$objeto[$i]['Fechadeinicio']=$db_resultado['Fechadeinicio'];
			/*$date = new DateTime($objeto[$i]['Fechadeinicio']);
			$objeto[$i]['Fechadeinicio']=$date->format('d-m-Y');*/
			$objeto[$i]['Temasdeinteres']=$db_resultado['Temasdeinteres'];
			$objeto[$i]['Modalidad']=$db_resultado['Modalidad'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function inscritos(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$idArea=$_REQUEST['idArea'];
		$idCurso=$_REQUEST['Curso'];
		$Fechadeinicio=$_REQUEST['Fechadeinicio'];
		$date = new DateTime($Fechadeinicio);
		$Fechadeinicio=$date->format('Y-m-d');

		$tupla="SELECT id, Nombre, Apellido, Telefono, Correo  FROM inscritos WHERE idArea='$idArea' AND  idCurso='$idCurso' AND Fechadeinicio='$Fechadeinicio'";
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
			/*$objeto[$i]['DiplomadoCursoTaller']=$db_resultado['DiplomadoCursoTaller'];
			$objeto[$i]['Fechadeinicio']=$db_resultado['Fechadeinicio'];
			$date = new DateTime($objeto[$i]['Fechadeinicio']);
			$objeto[$i]['Fechadeinicio']=$date->format('d-m-Y');
			$objeto[$i]['Temasdeinteres']=$db_resultado['Temasdeinteres'];*/
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function EliminarCurso(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];		
		$tupla="DELETE FROM portafolio  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$ubicacion = '../server/php/files/portafolio/'.$ID;
		eliminarArchivos($ubicacion);
		$tupla="DELETE FROM inscritos  WHERE idCurso='$ID'";
		$resultado = $mysqli->query($tupla);
		echo json_encode("true");
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
		$tupla = "SELECT *, areas.nombre as Area FROM  portafolio INNER JOIN areas on areas.id=portafolio.Area WHERE  portafolio.id='$ID'";
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
			$objeto[0]['Cupos']=$db_resultado['Cupos'];
			$objeto[0]['Duracion']=$db_resultado['Duracion'];
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function BuscarPerforacion(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$idArea=$_REQUEST['idArea'];
	
		$tupla = "SELECT * FROM  portafolio WHERE Area='$idArea'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Curso']=$db_resultado['Curso'];
			$objeto[$i]['Area']=$db_resultado['Area'];

			$objeto[$i]['Desde']=$db_resultado['Desde'];
			$objeto[$i]['Hasta']=$db_resultado['Hasta'];

			$date = new DateTime($objeto[$i]['Desde']);
			$objeto[$i]['Desde']=$date->format('d-m-Y');
			$date = new DateTime($objeto[$i]['Hasta']);
			$objeto[$i]['Hasta']=$date->format('d-m-Y');
			$objeto[$i]['Duracion']=$db_resultado['Duracion'];
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
		$cupos=$_REQUEST['cupos'];
		$tupla = "INSERT INTO portafolio (`Area`, `Curso`, `Desde`, `Hasta`, `Duracion`, `Cupos`) VALUES ('$area','$curso','$desde','$hasta','$duracion','$cupos')";
		$resultado = $mysqli->query($tupla);
		$id = $mysqli->insert_id;
		session_start();
		$ubicacion = '../server/php/files/tempportafolio/'.session_id();
		$destino = '../server/php/files/portafolio/'.$id;
		moverArchivos($ubicacion,$destino);
		echo json_encode("true");
	}

?>