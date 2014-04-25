function abrirCalendario() { 
	open('calendario.html','','top=50,left=50,width=850,height=740') ; 
} 
function eventos() {

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

	LabelTodosCursos.onclick=function(){
		$("#SERVICIOS").click();
	}
	$("#INICIO2").click(function(){
		$("#contenedor").load('formas/inicio.html');	
		$('#girar').fadeIn();
		abrirCalendario();
	});
	INICIO.onclick=function(){
		$("#contenedor").load('formas/inicio.html');	
		$('#girar').fadeIn();
		abrirCalendario();
	}
	LAEMPRESA.onclick=function(){		
		$("#contenedor").load('formas/laempresa.html');	
		$('#girar').fadeOut();
	}
	SERVICIOS.onclick=function(){
		$("#contenedor").load('formas/servicios.html' , function() {
		$("#perforacion").click(function(){
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:2, tipo:1},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{			
					$('#tabla').html("");	
					var table = $('<table></table>');	

					var row=$('<tr></tr>');
					$('#tabla').append(ListarTabla(msg, table, row));
				},
			error:
			function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});
			VerContenido();
		});
		$("#yacimiento").click(function(){
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:2, tipo:2},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{			
					$('#tabla').html("");	
					var table = $('<table></table>');							
					var row=$('<tr></tr>');
					$('#tabla').append(ListarTabla(msg, table, row));
				},
			error:
			function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});
			VerContenido();
		});
		$("#administracion").click(function(){
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:2, tipo:3},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{			
					$('#tabla').html("");	
					var table = $('<table></table>');							
					var row=$('<tr></tr>');
					$('#tabla').append(ListarTabla(msg, table, row));
				},
			error:
			function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});
			VerContenido();
		});
		$("#finanzas").click(function(){
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:2, tipo:4},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{			
					$('#tabla').html("");	
					var table = $('<table></table>');							
					var row=$('<tr></tr>');
					$('#tabla').append(ListarTabla(msg, table, row));
				},
			error:
			function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});	
			VerContenido();	
		});

		descargar.onclick=function(){
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:11},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{			
					$('#tabla').html("");	
					var table = $('<table></table>');							
					var row=$('<tr></tr>');
					$('#tabla').append(ListarTabla(msg, table, row));
				},
				error:
				function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});	
			VerContenido();
		}
		$("#facilitador").click(function(){
			$("#tabla").load('formas/facilitador.html', function(){
				$("input[name=tareas]").change(function(){				
				$("#cursos").empty();
				$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPortafolio.php",
						data: {id:10, Areas:$(this).val()},
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{				
							for(var i=0; i<msg[0].m; i++){								
								$("#cursos").append("<option value='"+msg[i].Curso+"'>");
							}
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
				});	
				$("#RegistrarFacilitador").click(function(){
					if(validarFormularioFacilitador()){
						$.ajax
						({
							type: "POST",
							url: "Modelo/consultasFacilitador.php",
							data: {id:1, Nombre:tnombre.value, Apellido:tapellido.value, Telefono:tTelefono.value, Areas:tareas.value, Curso:tcurso.value, Correo:tcorreo.value },
							async: false,
							dataType: "json",
							success:
							function (msg) 
							{				
								if(msg=="true"){
									tnombre.value="";
									tapellido.value="";
									tTelefono.value="";
									tareas.value="";
									tcurso.value="";
									tcorreo.value="";
								}

							},
						error:
						function (msg) {
							console.log( msg +"No se pudo realizar la conexion");}
						});					
					}
				});

			});
		});	
				

		$("#participar").click(function(){
			$("#tabla").load('formas/preinscripcion.html', function(){
			$("input[name=tareas]").change(function(){				
				$("#cursos").empty();
				$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPortafolio.php",
						data: {id:10, Areas:$(this).val()},
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{				
							for(var i=0; i<msg[0].m; i++){								
								$("#cursos").append("<option value='"+msg[i].Curso+"'>");
							}
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
			});
			$("#inscribirse").click(function(){
				if(validarFormulariodeinscripcion()){
					$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPreinscripcion.php",
						data: {id:1, Nombre:tnombre.value, Apellido:tapellido.value, Telefono:tTelefono.value, Correo:tcorreo.value,  Curso:tcurso.value, Modalidad:tmodalidad.value, Fecha:tFecha.value, Temas:tTemas.value},
						async: false,
						
						success:
						function (msg) 
						{				
							console.log(msg);
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
				}
			});
		});
		});


		});	
		$('#girar').fadeOut();
	}
	CLIENTES.onclick=function(){		
		$("#contenedor").load('formas/clientes.html');	
		$('#girar').fadeOut();
	}
	VALORES.onclick=function(){		
		$("#contenedor").load('formas/valores.html');	
		$('#girar').fadeOut();
	}
	BLOG.onclick=function(){		
		$("#contenedor").load('formas/blog.html', function(){
				$.ajax
				({
				type: "POST",
				url: "Modelo/consultasNoticias.php",
				data: {id:2},
				async: false,
				dataType: "json",									
				success:
				function (msg) 
				{	

					var publicaciones="";
					for (var i = 0; i <msg[0].m; i++) {
						publicaciones+='<h2 class="alert alert-info"><i id="tituloNoticia">'+msg[i].Titulo+'</i> </h2><small style=" position: absolute; color: #ECF0FF; font-size: 11px; right: 25px;" > Publicado:'+msg[i].Fecha + '</small> <div class="noticias">'+msg[i].Cuerpo+' <br></div><br>';
					}
					noticias.innerHTML=publicaciones;
				},
				error:
				function (msg) {console.log(msg +"No se pudo realizar la conexion");}
				});		
		});	
		$('#girar').fadeOut();
	}
	CONTACTO.onclick=function(){		
		$("#contenedor").load('formas/contacto.html', function(){
			$("#enviarcontacto").click(function(){
					if(validarFormularioContacto()){
						$.ajax
						({
						type: "POST",
						url: "Modelo/consultasContacto.php",
						data: {id:2, nombre:tnombre2.value, correo:temail2.value, telefono:tTelefono2.value, mensaje:tmensajec.value},
						async: false,								
						success:
						function (msg) 
						{	
							tnombre2.value="";
							temail2.value="";
							tTelefono2.value="";
							tmensajec.value="";
						},
						error:
						function (msg) {console.log(msg +"No se pudo realizar la conexion");}
						});		
					}
			});
		});	
		$('#girar').fadeOut();
	}
	$("#preinscripcionaloscursos").click(function(){
		$("#contenedor").load('formas/preinscripcion.html', function(){
			$("input[name=tareas]").change(function(){				
				$("#cursos").empty();
				$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPortafolio.php",
						data: {id:10, Areas:$(this).val()},
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{				
							for(var i=0; i<msg[0].m; i++){								
								$("#cursos").append("<option value='"+msg[i].Curso+"'>");
							}
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
			});
			$("#inscribirse").click(function(){
				if(validarFormulariodeinscripcion()){
					$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPreinscripcion.php",
						data: {id:1, Nombre:tnombre.value, Apellido:tapellido.value, Telefono:tTelefono.value, Correo:tcorreo.value,  Curso:tcurso.value, Modalidad:tmodalidad.value, Fecha:tFecha.value, Temas:tTemas.value},
						async: false,
						
						success:
						function (msg) 
						{				
							console.log(msg);
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
				}
			});
		});
		$('#girar').fadeOut();
	});
	$("#formasdepago").click(function(){
		VaciarFileInput();
		fileupload.action = "server/php/FormasPago.php";
		mainInputFile();
		$("#contenedor").load('formas/formasdepago.html', function(){
					$.ajax
						({
						type: "POST",
						url: "Modelo/consultasFormasdePago.php",
						data: {id:6},
						async: false,
						dataType: "json",									
						success:
						function (msg) 
						{	
							var salida="<h4><i>";
							for(var i=0; i<msg[0].m; i++){
								salida+=msg[i].Banco+ ", " + msg[i].Titular + "," + msg[i].Numero + ", " + msg[i].Tipo + ", " + msg[i].CIRIF+"<br>";	
							}
							salida+="</i></h4>"
							$("#cuentas").html(salida);

							for(var i=0; i<msg[0].m; i++){								
								$("#bancos").append("<option value='"+msg[i].Banco+"'>");
							}
						},
						error:
						function (msg) {console.log(msg +"No se pudo realizar la conexion");}
						});	
			$("input[name=tbanco]").change(function(){
				
				tnumerodecuenta.value="";
				$("#numeros").empty();
				$.ajax
					({
						type: "POST",
						url: "Modelo/consultasFormasdePago.php",
						data: {id:7, Banco:$(this).val()},
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{				
							for(var i=0; i<msg[0].m; i++){								
								$("#numeros").append("<option value='"+msg[i].Numero+"'>");
							}
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
			});

			$("#enviarformadepago").click(function(){
				if(validarFormularioFormasdepago()){
					$.ajax
					({
						type: "POST",
						url: "Modelo/consultasFormasdePago.php",
						data: {id:8, Nombre:tnombre.value, Apellido:tapellido.value, Telefono:tTelefono.value, Correo:tcorreo.value,  Banco:tbanco.value, Numero:tnumerodecuenta.value, Tipo:tTipo.value, Comprobante:tComprobante.value, Fecha:tfechadepago.value, Monto:tmonto.value, Concepto:tconcepto.value},
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{
							if(msg=="true"){
								tnombre.value="";
								tapellido.value="";
								tTelefono.value="";
								tcorreo.value=""; 
								tbanco.value=""; 
								tnumerodecuenta.value="";
								tTipo.value="";
								tComprobante.value="";
								tfechadepago.value="";
								tmonto.value="";
								tconcepto.value="";
								// Eliminando visualmente los archivos cargados
								var trs = $('tr.template-download');
								for(var i = trs.length - 1; i > -1; i--)
								{
								    trs[i].outerHTML = "";
								}
							}
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
				}
			});
		});	
		$('#girar').fadeOut();
	});

	minicio.onclick=function(){		
		$("#contenedor").load('formas/inicio.html');	
		$('#girar').fadeIn();
		abrirCalendario();
	}
	mlaempresa.onclick=function(){		
		$("#contenedor").load('formas/laempresa.html');	
		$('#girar').fadeOut();
	}
	mservicios.onclick=function(){		
		$("#contenedor").load('formas/servicios.html');	
		$('#girar').fadeOut();
	}
	mclientes.onclick=function(){		
		$("#contenedor").load('formas/clientes.html');	
		$('#girar').fadeOut();
	}
	mvalores.onclick=function(){		
		$("#contenedor").load('formas/valores.html');	
		$('#girar').fadeOut();
	}
	mblog.onclick=function(){		
		$("#contenedor").load('formas/blog.html');	
		$('#girar').fadeOut();
	}
	mcontacto.onclick=function(){		
		$("#contenedor").load('formas/contacto.html');	
		$('#girar').fadeOut();
	}
}

function validarFormulariodeinscripcion(){
	if(tnombre.value==""){
		alertas.innerHTML="<center><b>Escriba  su  nombre</b></center>";
		return false;
	}	
	else if(tapellido.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba su Apellido</b></center>";
		return false;
	}
	else if(!tTelefono.value.match(/^[0-9-]+$/))
	{  
        alertas.innerHTML="<center><b>Escriba un telefono valido</b></center>";
		return false;
	}		

	else if(tcorreo.value==""||!validar_email(tcorreo.value))
	{  
        alertas.innerHTML="<center><b>Escriba un correo valido</b></center>";
		return false;
	}	
	else if(tareas.value=="")
	{  
        alertas.innerHTML="<center><b>Debe escribir el Area</b></center>";
		return false;
	}
	else if(tcurso.value=="")
	{  
        alertas.innerHTML="<center><b>Debe escribir un Curso/Diplomado/Taller</b></center>";
		return false;
	}
	else if(tFecha.value=="")
	{  
        alertas.innerHTML="<center><b>Debe escribir una fecha</b></center>";
		return false;
	}
	else if(tTemas.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba un tema de interes</b></center>";
		return false;
	}	
	else if(tmodalidad.value=="")
	{  
        alertas.innerHTML="<center><b>Elija una modalidad</b></center>";
		return false;
	}								
	
	else {return true;}	
}
function validarFormularioContacto(){
	if(tnombre2.value==""){
		alertas.innerHTML="<center><b>Escriba un nombre</b></center>";
		return false;
	}	
	else if(temail2.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba un correo valido</b></center>";
		return false;
	}
	else if(!tTelefono2.value.match(/^[0-9-]+$/))
	{  
        alertas.innerHTML="<center><b>Escriba un telefono valida</b></center>";
		return false;
	}		
	else if(tmensajec.value=="")
	{  
        alertas.innerHTML="<center><b>Debe escribir un mensaje</b></center>";
		return false;
	}	
	else {return true;}	
}

function validarFormularioFormasdepago(){
	if(tnombre.value==""){
		alertas.innerHTML="<center><b>Escriba un nombre</b></center>";
		return false;
	}	
	else if(tapellido.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba un Apellido</b></center>";
		return false;
	}
	else if(!tTelefono.value.match(/^[0-9-]+$/))
	{  
        alertas.innerHTML="<center><b>Escriba un telefono valido</b></center>";
		return false;
	}		
	else if(tcorreo.value==""||!validar_email(tcorreo.value))
	{  
        alertas.innerHTML="<center><b>Escriba un correo valido</b></center>";
		return false;
	}	
	else if(!tnumerodecuenta.value.match(/^[0-9-]+$/)){
		alertas.innerHTML="<center><b>Escriba un numero de cuenta valido</b></center>";
		return false;
	}	
	else if(tComprobante.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba en numero de comprobante</b></center>";
		return false;
	}
	else if(tfechadepago.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba la fecha de pago</b></center>";
		return false;
	}		
	else if(tbanco.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba el banco donde hizo el pago</b></center>";
		return false;
	}	
	else if(tmonto.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba el monto del pago</b></center>";
		return false;
	}

	else if(tconcepto.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba el concepto de pago</b></center>";
		return false;
	}
	else if (typeof ArchivoSubido == "undefined") 
	{
		alertas.innerHTML="<center><b>Cargue el escaneo del recibo</b></center>";
		return false;
	}

	else {return true;}	
}
	function validar_recibo(valor){

	}

	function validar_email(valor)
	{
		// creamos nuestra regla con expresiones regulares.
		var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		// utilizamos test para comprobar si el parametro valor cumple la regla
		if(filter.test(valor))
			return true;
		else
			return false;
	}

	function ListarTabla(msg, table, row){			
		table.addClass('CSSTableGenerator');
		row.append($('<td></td>').html("<b>Curso</b>"));							
		row.append($('<td></td>').html("<b>Desde</b>"));
		row.append($('<td></td>').html("<b>Hasta</b>"));
		row.append($('<td></td>').html("<b>Duracion</b>"));
		row.append($('<td></td>').html("<b>Contenido</b>"));
		table.append(row);
	
		for(i=0; i<msg[0].m; i++){
			var row2 = $('<tr></tr>');
			var fila1 = $('<td></td>').text(msg[i].Curso);
			var fila2 = $('<td></td>').text(msg[i].Desde);
			var fila3 = $('<td></td>').text(msg[i].Hasta);
			var fila4 = $('<td></td>').text(msg[i].Duracion);
		    var fila6 = $('<td></td>').append('<button name="'+msg[i].id+'" type="button" class="boton vercontenido"  data-toggle="modal" data-target="#ModalDescargarArchivo" title="Ver contenido" >Ver</span></button>');

			row2.append(fila1);
			row2.append(fila2);
			row2.append(fila3);
			row2.append(fila4);									
			row2.append(fila6);									
		    table.append(row2);
		}
		return table;
	}
	function VerContenido(){
		$('button.vercontenido').on('click',  function()
		{
			var id=$(this).attr('name');
			VaciarFileInput();
			fileupload.action = "server/php/PortafolioVerAdjuntos.php?id="+id;
			mainInputFile();
		});
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


	function validarFormularioFacilitador(){
		if(tnombre.value==""){
		alertas.innerHTML="<center><b>Escriba  su  nombre</b></center>";
		return false;
		}	
		else if(tapellido.value=="")
		{  
	        alertas.innerHTML="<center><b>Escriba su Apellido</b></center>";
			return false;
		}
		else if(!tTelefono.value.match(/^[0-9-]+$/))
		{  
	        alertas.innerHTML="<center><b>Escriba un telefono valido</b></center>";
			return false;
		}		
		else if(tareas.value=="")
		{  
	        alertas.innerHTML="<center><b>Debe escribir el Area</b></center>";
			return false;
		}
		else if(tcurso.value=="")
		{  
	        alertas.innerHTML="<center><b>Debe escribir un Curso/Diplomado/Taller</b></center>";
			return false;
		}
		else if(tcorreo.value==""||!validar_email(tcorreo.value))
		{  
	        alertas.innerHTML="<center><b>Escriba un correo valido</b></center>";
			return false;
		}	
		else {return true;}	
	}
