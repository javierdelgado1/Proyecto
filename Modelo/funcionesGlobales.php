<?php
	function moverArchivos($ubicacion,$destino){
		// Moviendo desde la ubicacion al destino
	    if(!file_exists($destino))
	    {
	    	mkdir($destino,  0775);
	    }
		if ($gestor = opendir($ubicacion)) {
		    while (false !== ($entrada = readdir($gestor))) {
		        if ($entrada != "." && $entrada != ".." && !is_dir($ubicacion.'/'.$entrada)) {
		            rename ($ubicacion.'/'.$entrada,$destino.'/'.$entrada);
		        }
		    }
		    closedir($gestor);
		}
	}
?>