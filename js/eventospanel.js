function eventosPanel() {
	console.log("entro envento panel");
	cerrar.onclick=function(){
		$.ajax
			({
			type: "POST",
		   	url: "Modelo/consultasPanel.php",
		   	data: {id:3},
			async: false,			
			success:
		    function (msg) 
			{	
				window.open('login.html' , '_self');			
		     },
		        error:
		        function (msg) {console.log(msg +"No se pudo realizar la conexion");}
			});
	}
	$("#contacto").click(function(){
		$("#contenedor").load('formas/configContacto.html', function(){
			console.log("click en contacto");
			$("#guardarcontacto").click(function(){
				$.ajax
				({
				type: "POST",
				url: "Modelo/consultasContacto.php",
				data: {id:1, correo:tcorreo.value},
				async: false,			
				success:
				function (msg) 
				{	
					alertas.innerHTML="<div class='alert alert-success'>Se ha Actualizado el correo de contacto</div>";			
				},
				error:
				function (msg) {console.log(msg +"No se pudo realizar la conexion");}
				});				
			});
		});
		
	});
	portafolio.onclick=function(){
		$("#contenedor").load('formas/portafoliodecurso.html', function() {
			  agregarPortafolio.onclick=function(){
				if(validarAgregarCurso()){
					var archivos = document.getElementById("subir");
					var archivo = archivos.files;
					$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPortafolio.php",
						data: {id:1, area:tareas.value, curso:curso.value, desde:tdesde.value, hasta:thasta.value, duracion:tduracion.value, cupos:tcupos.value},
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{				
							if(msg=="true"){
								limpiarFormularioAgregarPortafolio();
							}
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
				}
		  	}

		  	inscritos.onclick=function(){
				$.ajax
				({
					type: "POST",
					url: "Modelo/consultasPortafolio.php",
					data: {id:6},
					async: false,
					dataType: "json",
					success:
					function (msg) 
					{				
						$('#Inscritos').html("");	
						var table = $('<table></table>').addClass('table table-hover');							
						var row=$('<tr></tr>');
						row.append($('<td></td>').html("<b>Nombre</b>"));							
						row.append($('<td></td>').html("<b>Apellido</b>"));					
						row.append($('<td></td>').html("<b>Telefono</b>"));
						row.append($('<td></td>').html("<b>Correo</b>"));
						row.append($('<td></td>').html("<b>Opciones</b>"));
						table.append(row);								
						for(i=0; i<msg[0].m; i++){
							var row2 = $('<tr></tr>');
							var fila1 = $('<td></td>').text(msg[i].Nombre);
							var fila2 = $('<td></td>').text(msg[i].Apellido);
							var fila3 = $('<td></td>').text(msg[i].Telefono);
							var fila4 = $('<td></td>').text(msg[i].Correo);																	
						    var fila6 = $('<td></td>').append('<a  class="editarinscritos btn btn-default btn-sm" data-toggle="modal" data-target="#ModalInscritos"  title="Editar/Modificar" name="'+msg[i].id+'"> <span class="glyphicon glyphicon-pencil"></span></a>');
						    fila6.append('<a type="button" class="btn btn-default btn-sm eliminarinscrito" data-toggle="modal" data-target="#EliminarInscrito"  title="Eliminar" name="'+msg[i].id+'"> <span class="glyphicon glyphicon-remove"></span></a>');							row2.append(fila1);
							row2.append(fila2);
							row2.append(fila3);
							row2.append(fila4);									
							row2.append(fila6);									
						    table.append(row2);
						}
						$('#Inscritos').append(table);
					},
				error:
				function (msg) {
					console.log( msg +"No se pudo realizar la conexion");}
				});
			EditarActualizarInscritos();
			eliminarinscrito();
		  	}

  			ver.onclick=function(){
  				console.log("ver");
				perforacion.onclick=function(){
					console.log("Perforacion");
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
							$('#Perforacion').html("");	
							var table = $('<table></table>').addClass('table table-hover');							
							var row=$('<tr></tr>');
							$('#Perforacion').append(ListarTabla(msg, table, row));
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});		
					EditarActualizar();
					eliminar();
				}
				yacimiento.onclick=function(){
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
							$('#Yacimiento').html("");		
							var table = $('<table></table>').addClass('table table-hover');							
							var row=$('<tr></tr>');
							$('#Yacimiento').append(ListarTabla(msg, table, row));
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
					
					EditarActualizar();
					eliminar();
				}
				administracion.onclick=function(){
					$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPortafolio.php",
						data: {id:2, tipo:3 },
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{			
							$('#Administracion').html("");	
							var table = $('<table></table>').addClass('table table-hover');							
							var row=$('<tr></tr>');							
							$('#Administracion').append(ListarTabla(msg, table, row));
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
					EditarActualizar();
					eliminar();
				}
				finanzas.onclick=function(){
					$.ajax
					({
						type: "POST",
						url: "Modelo/consultasPortafolio.php",
						data: {id:2, tipo:4 },
						async: false,
						dataType: "json",
						success:
						function (msg) 
						{				
							$('#Finanzas').html("");
							var table = $('<table></table>').addClass('table table-hover');							
							var row=$('<tr></tr>');							
							$('#Finanzas').append(ListarTabla(msg, table, row));
						},
					error:
					function (msg) {
						console.log( msg +"No se pudo realizar la conexion");}
					});
					EditarActualizar();
					eliminar();
				}
			}
		});	
	}
	participante.onclick=function(){
		$("#contenedor").load('formas/participante.html');	
	}
	facilitador.onclick=function(){
		$("#contenedor").load('formas/facilitador.html');	
	}

}


function validarAgregarCurso(){
	var archivos = document.getElementById("subir");
	var archivo = archivos.files;
	if(tareas.value==""){
		alertas.innerHTML="<div class='alert alert-danger'>Elija un area</div>";
		return false;
	}
	else if(curso.value == "" )
	{  
        alertas.innerHTML="<div class='alert alert-danger'>Llene el campo curso</div>";
		return false;
	}	
	else if(tdesde.value == "" )
	{  
        alertas.innerHTML="<div class='alert alert-danger'>Seleccione una fecha  de inicio del curso</div>";
		return false;
	}	
	else if(thasta.value == "" )
	{  
        alertas.innerHTML="<div class='alert alert-danger'>Seleccione una fecha  de final del curso</div>";
		return false;
	}
	else if(tduracion.value == "" )
	{  
        alertas.innerHTML="<div class='alert alert-danger'>Escriba en horas la duracion del curso</div>";
		return false;
	}
	else if(tcupos.value == "" )
	{  
        alertas.innerHTML="<div class='alert alert-danger'>Escriba la cantidad de cupos</div>";
		return false;
	}
	else if(archivo.length==0){
		alertas.innerHTML="<div class='alert alert-danger'>Debe seleccionar un archivo pdf del contenido del curso</div>";
		return true;
	}
	else {return true;}
}

function limpiarFormularioAgregarPortafolio(){
	var archivos = document.getElementById("subir");
	var archivo = archivos.files;
	tareas.value="";
	curso.value = "";
	tdesde.value = "";
	thasta.value = "";
	tduracion.value = "" ;
	archivos.value="";
	tcupos.value="";
}

function EditarActualizar(){
	$('a.editar').on('click',  function(){
	var id=$(this).attr('name');
	console.log(id);
	alertas2.innerHTML="";
	$.ajax
	({
		type: "POST",
		url: "Modelo/consultasPortafolio.php",
		data: {id:3, ID:id},
		async: false,
		dataType: "json",
		success:
		function (msg) 
		{
			tareas2.value=msg[0].Area;
			curso2.value=msg[0].Curso;
			tdesde2.value=msg[0].Desde;
			thasta2.value=msg[0].Hasta;
			tduracion2.value=msg[0].Duracion;
			tcupos2.value=msg[0].Cupos;
			$("#alertas2").html("");
			$("#footermodificar").html("");
			$("#footermodificar").append(' <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> <a class="actualizar btn btn-primary" name="'+id+'">Actualizar</a>');
		},
		error:
		function (msg) {
			console.log( msg +"No se pudo realizar la conexion");}
		});

		$('a.actualizar').on('click',  function(){
			var id=$(this).attr('name');
			console.log(id+"Actualizar");
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:4, ID:id, area:tareas2.value, curso:curso2.value, desde:tdesde2.value, hasta:thasta2.value, duracion:tduracion2.value},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{
					if(msg=="true")
					alertas2.innerHTML="<div class='alert alert-success'>Se ha Actualizado</div>";

				},
				error:
				function (msg) {
					console.log( msg +"No se pudo realizar la conexion");}
				});
		});

	});
}

function EditarActualizarInscritos(){
	$('a.editarinscritos').on('click',  function(){
	var id=$(this).attr('name');
	alertasactualizado.innerHTML="";
	console.log(id+"Editar Inscrito");
	$.ajax
	({
		type: "POST",
		url: "Modelo/consultasPortafolio.php",
		data: {id:7, ID:id},
		async: false,
		dataType: "json",
		success:
		function (msg) 
		{
			tnombre.value=msg[0].Nombre;
			tapellido.value=msg[0].Apellido;
			tTelefono.value=msg[0].Telefono;
			tcorreo.value=msg[0].Correo;
			diplomadocursotaller.value=msg[0].DiplomadoCursoTaller;
			tFecha.value=msg[0].Fechadeinicio;
			tTemas.value=msg[0].Temasdeinteres;	
			tModalidad.value=msg[0].Modalidad;				
			$("#footerModificarInscrito").html("");
			$("#footerModificarInscrito").append(' <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> <a class="actualizarinscrito btn btn-primary" name="'+id+'">Actualizar</a>');
		},
		error:
		function (msg) {
			console.log( msg +"No se pudo realizar la conexion");}
		});

		$('a.actualizarinscrito').on('click',  function(){
			var id=$(this).attr('name');
			console.log(id+"Actualizar");
			$.ajax
			({
				type: "POST",
				url: "Modelo/consultasPortafolio.php",
				data: {id:8, ID:id, Nombre:tnombre.value, Apellido:tapellido.value, Telefono:tTelefono.value, Correo:tcorreo.value, diplomadocursotaller:diplomadocursotaller.value, Fecha:tFecha.value,  Tema:tTemas.value, Modalidad:tModalidad.value},
				async: false,
				dataType: "json",
				success:
				function (msg) 
				{
					if(msg=="true")
					alertasactualizado.innerHTML="<div class='alert alert-success'>Se ha Actualizado</div>";

				},
				error:
				function (msg) {
					console.log( msg +"No se pudo realizar la conexion");}
				});
		});

	});
}
function eliminar(){
	$('a.eliminar').on('click',  function(){
		var id=$(this).attr('name');
		$("#footereliminar").html("");
		$("#footereliminar").append('<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> <a class="eliminardefinitivo btn btn-primary" name="'+id+'">Borrar</a>');
		$('a.eliminardefinitivo').on('click',  function(){	
			var id=$(this).attr('name');
			$.ajax
		({
			type: "POST",
			url: "Modelo/consultasPortafolio.php",
			data: {id:5, ID:id},
			async: false,
			dataType: "json",
			success:
			function (msg) 
			{
				alertas3.innerHTML="<div class='alert alert-success'>Se ha eliminado</div>";
							
							},
			error:
			function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});
		});
	});
}
function eliminarinscrito(){
	$('a.eliminarinscrito').on('click',  function(){
		var id=$(this).attr('name');
		$("#footereliminarinscrito").html("");
		$("#footereliminarinscrito").append('<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button> <a class="eliminardefinitivo2 btn btn-primary" name="'+id+'">Borrar</a>');
		$('a.eliminardefinitivo2').on('click',  function(){	
			var id=$(this).attr('name');
			$.ajax
		({
			type: "POST",
			url: "Modelo/consultasPortafolio.php",
			data: {id:9, ID:id},
			async: false,
			dataType: "json",
			success:
			function (msg) 
			{
				alertaseliminarinscrito.innerHTML="<div class='alert alert-success'>Se ha eliminado</div>";							
							},
			error:
			function (msg) {
				console.log( msg +"No se pudo realizar la conexion");}
			});
		});
	});
}

function ListarTabla(msg, table, row){			
	row.append($('<td></td>').html("<b>Curso</b>"));							
	row.append($('<td></td>').html("<b>Desde</b>"));
	row.append($('<td></td>').html("<b>Hasta</b>"));
	row.append($('<td></td>').html("<b>Duracion</b>"));
	row.append($('<td></td>').html("<b>opciones</b>"));
	table.append(row);					
	
	for(i=0; i<msg[0].m; i++){
		var row2 = $('<tr></tr>');
		var fila1 = $('<td></td>').text(msg[i].Curso);
		var fila2 = $('<td></td>').text(msg[i].Desde);
		var fila3 = $('<td></td>').text(msg[i].Hasta);
		var fila4 = $('<td></td>').text(msg[i].Duracion);
	    var fila6 = $('<td></td>').append('<button type="button" class="btn btn-default btn-sm"  title="Ver contenido" > <span class="glyphicon glyphicon-eye-open"></span></button>');
	    fila6.append('<a  class="editar btn btn-default btn-sm" data-toggle="modal" data-target="#Modificar"  title="Editar/Modificar" name="'+msg[i].id+'"> <span class="glyphicon glyphicon-pencil"></span></a>');
	    fila6.append('<a type="button" class="btn btn-default btn-sm eliminar" data-toggle="modal" data-target="#Eliminar"  title="Eliminar" name="'+msg[i].id+'"> <span class="glyphicon glyphicon-remove"></span></a>');

		row2.append(fila1);
		row2.append(fila2);
		row2.append(fila3);
		row2.append(fila4);									
		row2.append(fila6);									
	    table.append(row2);
	}
	return table;
}