function eventos(){	
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

}