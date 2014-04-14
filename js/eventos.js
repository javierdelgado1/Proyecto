function eventos() {
	INICIO.onclick=function(){		
		$("#contenedor").load('formas/inicio.html');	
		$('#girar').fadeIn();		
	}
	LAEMPRESA.onclick=function(){		
		$("#contenedor").load('formas/laempresa.html');	
		$('#girar').fadeOut();
	}
	SERVICIOS.onclick=function(){		
		$("#contenedor").load('formas/servicios.html' , function() {
			$("input[name=tareas]").change(function(){
				console.log($(this).val());
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
		$("#contenedor").load('formas/blog.html');	
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
							console.log(msg);			
						},
						error:
						function (msg) {console.log(msg +"No se pudo realizar la conexion");}
						});		
					}
			});
		});	
		$('#girar').fadeOut();
	}

	minicio.onclick=function(){		
		$("#contenedor").load('formas/inicio.html');	
		$('#girar').fadeIn();
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
	else if(tTelefono2.value=="")
	{  
        alertas.innerHTML="<center><b>Escriba un telefono</b></center>";
		return false;
	}		
	else if(tmensajec.value=="")
	{  
        alertas.innerHTML="<center><b>Debe escribir un mensaje</b></center>";
		return false;
	}	
	else {return true;}	
}