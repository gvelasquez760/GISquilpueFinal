function bienvenida (){
	$('#wellcome').fadeIn('fast',function(){
		$('#box3').animate({'top':'160px'},500);
	});
	
	$('#boxclose3').click(function(){
        $('#box3').animate({'top':'-500px'},500,function(){
            $('#wellcome').fadeOut('fast');
        });
    });
}


$(function() {
	 $('#ayuda2').click(function(){
	 	
	 	//ocultar ventana de bienvenida
	 	$('#box3').animate({'top':'-500px'},500,function(){
            $('#wellcome').fadeOut('fast');
        });
        
        //mostrar ventana de ayuda
        
        //ver Archivo Ayuda.js
        
	 });
});