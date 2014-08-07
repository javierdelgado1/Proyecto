function eventos(){	
	categoria1.onchange=function(){
		var area = categoria1.options[categoria1.selectedIndex].value;
		var result;
		switch(area){
			case "Perforacion":
				result = ConsultaCursos(1);
				break;
			case "Yacimiento":
				result = ConsultaCursos(2);
				break;
			case "Administracion":
				result = ConsultaCursos(3);
				break;
			case "Finanzas":
				result = ConsultaCursos(4);
				break;
			default:
				curso1.innerHTML = "";
				var option = document.createElement("option");
				option.text = "Selección por curso";
				option.value = "";
				curso1.add(option);
				return;
				break;
		}
		LlenarSelectCursos(result);
	}
	curso1.onchange=function(){
		var cursoID = curso1.options[curso1.selectedIndex].value;
		if(cursoID == "")
			return;
		VaciarFileInput();
		fileupload.action = "server/php/PortafolioVerAdjuntos.php?id="+cursoID;
		mainInputFile();
		$("#ModalDescargarArchivo").modal("show");
	}

	laempresa.onclick=function(){			 
		 $.ajax({  
            url: 'formas/laempresa.html',  
            success: function(data) {  
            	$('#contenedor').hide().html(data).slideDown(1000);
            }  
        }); 
	}
    mlaempresa.onclick=function(){			 
		 $.ajax({  
            url: 'formas/laempresa.html',  
            success: function(data) {  
            	$('#contenedor').hide().html(data).slideDown(1000);
            }  
        }); 
	}	
	contacto.onclick=function(){	
		console.log("contacto");
		 $.ajax({  
            url: 'formas/contacto.html',  
            success: function(data) {  
            	$('#contenedor').hide().html(data).slideDown(1000);
            }  
        }); 
	}	

	incompany.onclick=function(){	
		console.log("contacto");
		 $.ajax({  
            url: 'formas/incompany.html',  
            success: function(data) {  
            	$('#contenedor').hide().html(data).slideDown(1000);
            }  
        }); 
	}	

}
	function LlenarSelectCursos(datosCurso){
		curso1.innerHTML = "";
		var option = document.createElement("option");
		option.text = "Selección por curso";
		option.value = "";
		curso1.add(option);
		for(i=0; i < datosCurso[0].m; i++){
			var option = document.createElement("option");
			option.text = datosCurso[i].Curso;
			option.value = datosCurso[i].id;
			curso1.add(option);
		}
    }
	function ConsultaCursos(tipo){
		var result;
		$.ajax
		({
			type: "POST",
			url: "Modelo/consultasPortafolio.php",
			data: {id:2, tipo:tipo},
			async: false,
			dataType: "json",
			success:
			function (msg)
			{
				result = msg;
			},
		error:
		function (msg) {
			console.log("No se pudo realizar la conexion");}
		});
		return result;
	}
		function VaciarFileInput(){
		// Eliminando visualmente los archivos cargados
		var trs = $('tr.template-download');
		if (typeof trs != "undefined") {
			for(var i = trs.length - 1; i > -1; i--)
			{
			    trs[i].outerHTML = "";
			}
		}
		trs = $('tr.template-upload');
		if (typeof trs != "undefined") {
			for(var i = trs.length - 1; i > -1; i--)
			{
			    trs[i].outerHTML = "";
			}
		}
	}
