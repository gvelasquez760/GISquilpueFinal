$(function() {	
	$('.maximize').bind("click", function(){
		$('#encabezado').animate({'top':'-60px'},{duration:300});
        $('#barra_menu').animate({'top':'0px'},{duration:300});
        $('#mi_mapa').animate({'top':'35px', 'height':'94%'},{duration:300});
	});
	
	$('.maximize').bind("dblclick", function(){
		$('#encabezado').animate({'top':'0px'},{duration:300});
        $('#barra_menu').animate({'top':'57px'},{duration:300});
        $('#mi_mapa').animate({'top':'92px', 'height':'86%'},{duration:300});
	});
});




	/*
    $('.maximize').click(function(){
		$('#encabezado').animate({'top':'-10px'},{duration:1300});
        $('#barra_menu').animate({'top':'0px'},{duration:1300});
        $('#mi_mapa').animate({'top':'35px', 'height':'94%'},{duration:1300});
        $('.maximize').unbind('click').bind('click',handler);
    });
    
    
    $('.maximize').click(function(){
		$('#encabezado').animate({'top':'0px'},{duration:1300});
        $('#barra_menu').animate({'top':'57px'},{duration:1300});
        $('#mi_mapa').animate({'top':'92px', 'height':'86%'},{duration:1300});
	});*/
	
