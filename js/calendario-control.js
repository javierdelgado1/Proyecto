"use strict";
$(document).ready(function () {

	//console.log($("input[id^=checkboxArea]"));

	var eventos;
	var contador = 0;
	var globaldesde = 0;
	var debug = 1;
	var globalAreas = [];
	globalAreas = ListarAreas();
	// Agregando áreas al html.
	HTML_ListarAreas();
	checkbox_onclick();
	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
  		e.stopPropagation();
  	});
	MostrarCursosProximos();
	calendario();
	AbrirModal();
	
	function HTML_ListarAreas(){
		var ul = $('<ul></ul>').addClass('dropdown-menu');
		var li = '<li><a href="#"><label><input type="checkbox" id="areaTodosCheckbox" checked="true"><span class="lbl"> Todas</span></label></a></li>';
		ul.append(li);
		li = '<li class="divider"></li>';
		ul.append(li);
		for(var i=0; i < globalAreas.length; i++){
			var li= $('<li><a href="#" ><label><input type="checkbox" id="checkboxArea'+ globalAreas[i].id +'"><span class="lbl"> '+ globalAreas[i].nombre +'</span></label></a></li>');
			ul.append(li);
		}
		$('#menuCheckBox').innerHTML = "";
		$('#menuCheckBox').append(ul);
	}

	function ListarAreas(){
		var resultado = null;
		$.ajax
		({
			type: "POST",
			url: "Modelo/consultasCalendario.php",
			data: {id:1},
			async: false,
			dataType: "json",			
			success:
			function (result) 
			{	
				resultado = result;
			},
			error:
			function (result) { console.log(result +"No se pudo realizar la conexion");}
		});
		return resultado;
	}

	function AbrirModal(){
		$('td.day').on('click',  function(){
			var datosCurso=$(this).attr('name');
			if(typeof datosCurso != "undefined"){
				$('td.day').attr('data-toggle',"modal");
				$('td.day').attr('data-target',"#ModalVerEvento");
				datosCurso = datosCurso.split("&&&");
				for(var i = 0; i < datosCurso.length; i++)
					datosCurso[i] = datosCurso[i].split("|||");
				LlenarModal(datosCurso);
			}
		});
	}


	function LlenarModal(datosCurso){
		$('#TablaVerCurso').html("");	

		var table = $('<table></table>').addClass('table table-hover');							
		var row= $('<tr></tr>');
		row.append($('<td></td>').html("<b>Curso</b>"));
		row.append($('<td></td>').html("<b>Area</b>"));							
		row.append($('<td></td>').html("<b>Desde</b>"));
		row.append($('<td></td>').html("<b>Hasta</b>"));
		row.append($('<td></td>').html("<b>Duración</b>"));
		table.append(row);

		for(var i=0; i<datosCurso.length; i++){
			var row2 = $('<tr></tr>');
			var fila1 = $('<td></td>').text(datosCurso[i][0]);
			var fila2 = $('<td></td>').text(datosCurso[i][1]);
			var fila3 = $('<td></td>').text(datosCurso[i][4]);
			var fila4 = $('<td></td>').text(datosCurso[i][5]);
			var fila5 = $('<td></td>').text(datosCurso[i][2]);
			row2.append(fila1);
			row2.append(fila2);
			row2.append(fila3);
			row2.append(fila4);
			row2.append(fila5);									
			table.append(row2);
		}
		$('#TablaVerCurso').append(table);

	}
	function updateCalendario(){
		$('#calendario').datepicker('update');
	}


	function checkbox_onclick(){

		var cb_areas = $('input[id^="checkboxArea"]');

		areaTodosCheckbox.onclick=function(){
			for(var i=0; i < cb_areas.length; i++){
				cb_areas[i].checked = false;
				cb_areas[i].parentNode.parentNode.setAttribute("class","");
			}
			if(areaTodosCheckbox.checked)
				areaTodosCheckbox.parentNode.parentNode.setAttribute("class","active");
			else
				areaTodosCheckbox.parentNode.parentNode.setAttribute("class","");
			updateCalendario();
			AbrirModal();
		}
		
		for(var i=0; i < cb_areas.length; i++){
			cb_areas[i].onclick=function(){
				areaTodosCheckbox.checked = false;
				areaTodosCheckbox.parentNode.parentNode.setAttribute("class","");
				if(this.checked)
					this.parentNode.parentNode.setAttribute("class","active");
				else
					this.parentNode.parentNode.setAttribute("class","");
				updateCalendario();
				AbrirModal();
			}
		}

	}

	function buscarCursos(desde,hasta){
		$.ajax
		({
			type: "POST",
			url: "Modelo/consultasPortafolio.php",
			data: {id:12, desde:desde, hasta:hasta},
			async: false,	
			dataType: "json",		
			success:
			function (msg) 
			{	
				eventos = msg;
			},
			error:
			function (msg) {
				console.log("No se pudo realizar la conexion");}
			});		
	}
	function buscarProximosCursos(desde){
		var result;
		$.ajax
		({
			type: "POST",
			url: "Modelo/consultasPortafolio.php",
			data: {id:13, desde:desde},
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


	function MostrarCursosProximos(){
		var desde = new Date();
		var resultCursos = buscarProximosCursos(desde/1000);
		$('#cursosproximos').html("");

		var table = $('<table></table>').addClass('table table-hover');							
		var row= $('<tr></tr>');
		row.append($('<td></td>').html("<b>Curso</b>"));
		row.append($('<td></td>').html("<b>Area</b>"));							
		row.append($('<td></td>').html("<b>Desde</b>"));
		row.append($('<td></td>').html("<b>Hasta</b>"));
		row.append($('<td></td>').html("<b>Duración</b>"));
		table.append(row);	

		for(var i=0; i<resultCursos.length; i++){
			var row2 = $('<tr></tr>');
			var fila1 = $('<td></td>').text(resultCursos[i].Curso);
			var fila2 = $('<td></td>').text(resultCursos[i].Area);
			var fila3 = $('<td></td>').text(resultCursos[i].Desde.reverse().join("/"));
			var fila4 = $('<td></td>').text(resultCursos[i].Hasta.reverse().join("/"));
			var fila5 = $('<td></td>').text(resultCursos[i].Duracion);

			row2.append(fila1);
			row2.append(fila2);
			row2.append(fila3);
			row2.append(fila4);
			row2.append(fila5);									
			table.append(row2);
		}
		$('#cursosproximos').append(table);
	}

	function comprobarCheckbox(Area){
		var patron = new RegExp('[^\\d]' + Area + '$', 'g');
		var cb_area = $('input[id^="checkboxArea"]').filter(
		    function(){
		        return this.id.match(patron);
		    });
		if(cb_area[0] === "undefined")
			return false;
		if(cb_area[0].checked)
			return true;
		return false;
	}

	function obtenerNombreArea(id){
		for(var i=0; i < globalAreas.length; i++){
			if(globalAreas[i].id === id)
				return globalAreas[i].nombre;
		}
		return "";
	}
	function calendario(){
		$('#calendario').datepicker({
			language: "es",
			format: "dd/mm/yyyy",			    

			beforeShowDay: function (date){
				if(contador == 0){
					var auxDesde = date.getTime();
					if(globaldesde != auxDesde){
						globaldesde = auxDesde;
						var hasta = new Date(date);
						hasta = hasta.setMonth(hasta.getMonth()+2);
						buscarCursos(globaldesde/1000,hasta/1000);
					}
				}
				contador = (contador+1)%42;

				var evento;
				var infoEvento = "";
				var classes = "";
				var name = "";
				for(var i = eventos.length-1; i > -1; i--)
				{
					evento = new Date(eventos[i].Desde[0],eventos[i].Desde[1]-1,eventos[i].Desde[2]);
					if(evento.getTime() == date.getTime())
					{
						if(areaTodosCheckbox.checked || comprobarCheckbox(eventos[i].Area))
						{
							eventos[i].AreaNombre = obtenerNombreArea(eventos[i].Area);
							infoEvento +=
							"Curso: " + eventos[i].Curso +  
							"\n\tArea: "+  eventos[i].AreaNombre +
							"\n\tCupos: "+  eventos[i].Cupos +
							"\n\tDuración: "+  eventos[i].Duracion +
							'\n\tFecha finalización: '+ eventos[i].Hasta[2]+"/"+eventos[i].Hasta[1]+"/"+eventos[i].Hasta[0]+'\n\n';
							classes = "otros";
							
							name += eventos[i].Curso +  
							"|||" + eventos[i].AreaNombre +
							"|||" + eventos[i].Cupos +
							"|||" + eventos[i].Duracion +
							"|||" + eventos[i].Desde[2]+"/"+eventos[i].Desde[1]+"/"+eventos[i].Desde[0] +
							"|||" + eventos[i].Hasta[2]+"/"+eventos[i].Hasta[1]+"/"+eventos[i].Hasta[0] + "&&&";
						}
					}
				}
				if(infoEvento != ""){
					return {
						tooltip: infoEvento,
						classes: classes + "\" name=\"" + name.substring(0,name.length-3)
					};
				}
				return {
					tooltip: " ",
					classes: " "
				};
			}
		});  

$('#calendario').on('click',  function(){
	AbrirModal();
});
}
});