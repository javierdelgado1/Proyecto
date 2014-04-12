function efectos(){
	inicio.onmouseover=function  () {
		$(".BorderderechoPanelinicio").css('background', '#356990');
		$(".ReflejoBorderderechoPanelinicio").css('background', '#315D82');

	}
	inicio.onmouseout=function  () {
		$(".BorderderechoPanelinicio").css('background', '#5C636B');
		$(".ReflejoBorderderechoPanelinicio").css('background', '#4F565E');
		
	}

	programaciondecursos.onmouseover=function  () {
		$(".BorderderechoPanel3").css('background', '#356990');
		$(".ReflejoBorderderechoPanel3").css('background', '#315D82');

	}
	programaciondecursos.onmouseout=function  () {
		$(".BorderderechoPanel3").css('background', '#5C636B');
		$(".ReflejoBorderderechoPanel3").css('background', '#4F565E');
		
	}

	solicitud.onmouseover=function  () {
		$(".BorderderechoPanel2").css('background', '#356990');
		$(".ReflejoBorderderechoPanel2").css('background', '#315D82');

	}
	solicitud.onmouseout=function  () {
		$(".BorderderechoPanel2").css('background', '#5C636B');
		$(".ReflejoBorderderechoPanel2").css('background', '#4F565E');
		
	}

	preinscripcion.onmouseover=function  () {
		$(".BorderderechoPanelpreinscripcion").css('background', '#356990');
		$(".ReflejoBorderderechoPanelpreinscripcion").css('background', '#315D82');

	}
	preinscripcion.onmouseout=function  () {
		$(".BorderderechoPanelpreinscripcion").css('background', '#5C636B');
		$(".ReflejoBorderderechoPanelpreinscripcion").css('background', '#4F565E');
		
	}


	Formadepago.onmouseover=function  () {
		$(".BorderderechoPanel").css('background', '#356990');
		$(".ReflejoBorderderechoPanel").css('background', '#315D82');

	}
	Formadepago.onmouseout=function  () {
		$(".BorderderechoPanel").css('background', '#5C636B');
		$(".ReflejoBorderderechoPanel").css('background', '#4F565E');
		
	}

	girar.onclick=function(){
		if($(".slider").position().left=="0"){
				$(".slider").animate({
								     left: '-719px'
								   },
								   {
								     easing: 'swing',
								     duration: 2000,
								     complete: function(){
								        $(".slider").css("left"," 719px");
								    }
								});
										/*$(".slider2").fadeIn();*/
				$(".slider2").animate({left: "0px"},
								   {
								     easing: 'swing',
								     duration: 2000,
								     complete: function(){
								        $(".slider").css("left"," 719px");
								    }
								});
				
		}
		else{

				$(".slider2").animate({
								     left: '-719px'
								   },
								   {
								     easing: 'swing',
								     duration: 2000,
								     complete: function(){
								        $(".slider").css("left"," 719px");
								    }
								});
										/*$(".slider2").fadeIn();*/
				$(".slider").animate({left: "0px"},
								   {
								     easing: 'swing',
								     duration: 2000,
								     complete: function(){
								        $(".slider2").css("left"," 719px");
								    }
								});

		}
	}
	
}