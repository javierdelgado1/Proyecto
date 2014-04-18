$(document).ready(

	function () {
        var array = ["2014-04-15","2014-04-16","2014-04-17"];
        $('#example1').datepicker({
            language: "es",
            todayHighlight: true,
            beforeShowDay: function (date){
              if (date.getMonth() == (new Date()).getMonth() || true)
                switch (date.getDate()){
                  case 5:
                    return {
                      tooltip: 'Example tooltip',
                      classes: 'active'
                    };
                  case 8:
                    return false;
                  case 12:
                    return "green";
                }
            }
        });
        $('#example1').click(function(){
        	 console.log( $('#example1').datepicker( "getDate" ));
    })
            
});