<?php
	include("conector.php");

	$id=$_REQUEST['id'];

	switch($id)
	{
		case 1:
			RegistrarCuenta();
			break;	
		case 2:
			ListarCuentas();
			break;
		case 3:
			MostrarCuentaEspecifica();
			break;
		case 4:
			ActualizarCuenta();
			break;
		case 5:
			EliminarCuenta();
			break;
		case 6:
			obtenerCuentasBancarias();
			break;
		case 7:
			obtenerNumerodeCuentasBancarias();
			break;
		case 8:
			ComprobantedePago();
			break;
		case 9:
			ListarComprobantes();
			break;
		case 10:
			ObtenerComprobanteEspecifico();
			break;
		case 11:
			ActualizarComprobante();
			break;
		case 12:
			EliminarComprobante();
			break;

		default;
	}

	function EliminarComprobante(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="DELETE FROM comprobantes  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		echo json_encode("true");

	}
	function ActualizarComprobante(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		$Banco=$_REQUEST['Banco'];
		$Numero=$_REQUEST['Numero'];
		$Tipo=$_REQUEST['Tipo'];
		$Comprobante=$_REQUEST['Comprobante'];
		$Fecha=$_REQUEST['Fecha'];
		$Monto=$_REQUEST['Monto'];
		$Concepto=$_REQUEST['Concepto'];
		$tupla="UPDATE comprobantes SET Nombre='$Nombre', Apellido='$Apellido', Telefono='$Telefono', Correo='$Correo', Banco='$Banco', Concepto='$Concepto', Nrodecuenta='$Numero', 
		Tipodepago='$Tipo', NroComprobante='$Comprobante', Fecha='$Fecha', Monto='$Monto'  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");
		

	}
	function ObtenerComprobanteEspecifico(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="SELECT * FROM comprobantes WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['Nombre']=$db_resultado['Nombre'];	
			$objeto[$i]['Apellido']=$db_resultado['Apellido'];
			$objeto[$i]['Telefono']=$db_resultado['Telefono'];
			$objeto[$i]['Correo']=$db_resultado['Correo'];	
			$objeto[$i]['Banco']=$db_resultado['Banco'];
			$objeto[$i]['Concepto']=$db_resultado['Concepto'];
			$objeto[$i]['Nrodecuenta']=$db_resultado['Nrodecuenta'];
			$objeto[$i]['Tipodepago']=$db_resultado['Tipodepago'];
			$objeto[$i]['NroComprobante']=$db_resultado['NroComprobante'];
			$objeto[$i]['Fecha']=$db_resultado['Fecha'];
			$objeto[$i]['Monto']=$db_resultado['Monto'];			
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function ListarComprobantes(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT id, Nombre, Apellido, Telefono, Correo FROM comprobantes";
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
	function ComprobantedePago(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$Nombre=$_REQUEST['Nombre'];
		$Apellido=$_REQUEST['Apellido'];
		$Telefono=$_REQUEST['Telefono'];
		$Correo=$_REQUEST['Correo'];
		$Banco=$_REQUEST['Banco'];
		$Numero=$_REQUEST['Numero'];
		$Tipo=$_REQUEST['Tipo'];
		$Comprobante=$_REQUEST['Comprobante'];
		$Fecha=$_REQUEST['Fecha'];
		$Monto=$_REQUEST['Monto'];
		$Concepto=$_REQUEST['Concepto'];
		$tupla="INSERT INTO  comprobantes (Nombre, Apellido, Telefono, Correo, Banco, Concepto, NrodeCuenta, Tipodepago, NroComprobante, Fecha, Monto)  
		VALUES ('$Nombre','$Apellido','$Telefono','$Correo','$Banco', '$Concepto', '$Numero','$Tipo','$Comprobante','$Fecha','$Monto')";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");

	}
	function obtenerNumerodeCuentasBancarias(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$banco=$_REQUEST['Banco'];
		$tupla="SELECT Numero FROM banco WHERE Banco='$banco'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['Numero']=$db_resultado['Numero'];			
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function obtenerCuentasBancarias(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT * FROM banco ";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Banco']=$db_resultado['Banco'];
			$objeto[$i]['Titular']=$db_resultado['Titular'];
			$objeto[$i]['Numero']=$db_resultado['Numero'];
			$objeto[$i]['Tipo']=$db_resultado['Tipo'];
			$objeto[$i]['CIRIF']=$db_resultado['CIRIF'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
		
	}
	function EliminarCuenta(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="DELETE FROM banco  WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		echo json_encode("true");
	}
	function ActualizarCuenta(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$banco=$_REQUEST['Banco'];
		$titular=$_REQUEST['Titular'];
		$nrodecuenta=$_REQUEST['Numero'];
		$tipo=$_REQUEST['Tipo'];
		$rif=$_REQUEST['Rif'];
		$tupla="UPDATE banco SET Banco='$banco', Titular='$titular', Numero='$nrodecuenta', Tipo='$tipo', CIRIF='$rif' WHERE id='$ID'";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		echo json_encode("true");
	}
	function MostrarCuentaEspecifica(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$ID=$_REQUEST['ID'];
		$tupla="SELECT * FROM banco WHERE  id='$ID'";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		if($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Banco']=$db_resultado['Banco'];
			$objeto[$i]['Titular']=$db_resultado['Titular'];
			$objeto[$i]['Numero']=$db_resultado['Numero'];
			$objeto[$i]['Tipo']=$db_resultado['Tipo'];
			$objeto[$i]['CIRIF']=$db_resultado['CIRIF'];
			
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function ListarCuentas(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$tupla="SELECT * FROM banco";
		$resultado = $mysqli->query($tupla);
		$objeto[0]['mensaje']=false;
		$i=0;
		$objeto[0]['m']=$resultado->num_rows;

		while($db_resultado = mysqli_fetch_array($resultado, MYSQLI_ASSOC))
		{
			$objeto[$i]['id']=$db_resultado['id'];
			$objeto[$i]['Banco']=$db_resultado['Banco'];
			$objeto[$i]['Titular']=$db_resultado['Titular'];
			$objeto[$i]['Numero']=$db_resultado['Numero'];
			$objeto[$i]['Tipo']=$db_resultado['Tipo'];
			$objeto[$i]['CIRIF']=$db_resultado['CIRIF'];
			$i++;
		}
		$mysqli->close();
		echo json_encode($objeto);
	}
	function RegistrarCuenta(){
		$mysqli = new mysqli(Host, User, Pass, BasedeDatos);
		$banco=$_REQUEST['banco'];
		$titular=$_REQUEST['titular'];
		$nrodecuenta=$_REQUEST['nrodecuenta'];
		$tipo=$_REQUEST['tipo'];
		$rif=$_REQUEST['rif'];
		$tupla="INSERT INTO  banco (Banco, Titular, Numero, Tipo, CIRIF)  VALUES ('$banco', '$titular', '$nrodecuenta', '$tipo', '$rif')";
		$resultado = $mysqli->query($tupla);
		$mysqli->close();
		
	}
?>