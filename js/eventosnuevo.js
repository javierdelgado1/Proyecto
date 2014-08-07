function eventos(){
	console.log("Entro");
	laempresa.onclick=function(){	
		contenedor.innerHTML="";
		 $.ajax({  
            url: 'formas/laempresa.html',  
            success: function(data) {  
                $('#contenedor').html(data);  
                $('#contenedor').slideDown(1000); 
            }  
        }); 
		//$("#contenedor").load('formas/laempresa.html');	
	
	}
}