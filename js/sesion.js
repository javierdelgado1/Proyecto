function sesion(){
	iniciarsesion.onclick=function(){
		if(temail.value!=""&&tpass.value!=""){
			$.ajax
			({
			type: "POST",
		   	url: "Modelo/consultasPanel.php",
		   	data: {id:1, temail:temail.value, tpass:tpass.value},
			async: false,			
			success:
		    function (msg) 
			{	
				
				if(msg=="false"){		
					alertas.innerHTML="<div class='alert alert-danger'>Datos Invalidos</div>";
				}
				else{window.open('panel.html' , '_self');}
				

				
		     },
		        error:
		        function (msg) {alert( msg +"No se pudo realizar la conexion");}
			});
			
		}
		else alertas.innerHTML="<div class='alert alert-danger'>Llene con sus datos</div>";
	}
}