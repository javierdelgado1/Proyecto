<?php
	function moverArchivos($ubicacion,$destino){
		// Moviendo desde la ubicacion al destino
	    if(!file_exists($destino))
	    {
	    	mkdir($destino,  0775);
	    }
		if ($gestor = opendir($ubicacion)) {
		    while (false !== ($entrada = readdir($gestor))) {
		        //if ($entrada != "." && $entrada != ".." && !is_dir($ubicacion.'/'.$entrada)) {
		    	if ($entrada != "." && $entrada != "..") {
		            rename ($ubicacion.'/'.$entrada,$destino.'/'.$entrada);
		        }
		    }
		    closedir($gestor);
		}
	}

	function eliminarArchivos($ubicacion){ 
		// Eliminando todos los archivos del directorio recursivamente
		if(file_exists($ubicacion)){
			$files = array_diff(scandir($ubicacion), array('.','..')); 
			foreach ($files as $file) { 
				(is_dir("$ubicacion/$file")) ? eliminarArchivos("$ubicacion/$file") : unlink("$ubicacion/$file"); 
			}
		    return rmdir($ubicacion);
		}
		return true;
	}

?>