function efectos(){	
	$('#laempresa').click(function() {
		$(this).addClass("active");
		$('#servicios').removeClass("active");
		$('#contacto').removeClass("active");
		$('#blog').removeClass("active");
		$('#inicio').removeClass("active");
	});
	$('#servicios').click(function() {
		$(this).addClass("active");
		$('#contacto').removeClass("active");
		$('#blog').removeClass("active");
		$('#laempresa').removeClass("active");
		$('#inicio').removeClass("active");
	});
	$('#blog').click(function() {
		$(this).addClass("active");
		$('#servicios').removeClass("active");
		$('#contacto').removeClass("active");		
		$('#laempresa').removeClass("active");
		$('#inicio').removeClass("active");
	});
	$('#contacto').click(function() {
		$(this).addClass("active");
		$('#servicios').removeClass("active");	
		$('#blog').removeClass("active");
		$('#laempresa').removeClass("active");
		$('#inicio').removeClass("active");
	});

	$('#inicio').click(function() {
		$(this).addClass("active");
		$('#servicios').removeClass("active");	
		$('#blog').removeClass("active");
		$('#laempresa').removeClass("active");
		$('#contacto').removeClass("active");	
	});
}