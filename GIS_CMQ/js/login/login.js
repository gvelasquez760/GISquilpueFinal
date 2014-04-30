$(function() {
	$('a.login').click(function() {
		//Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(loginBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  	$('#mask , .login-popup').fadeOut(300 , function() {
			$('#mask').remove();  
		}); 
		return false;
	});
});

function convierteMd5(formulario){
	//alert("El Hash MD5 es: " + md5(formulario.md5txt.value));
	//alert("El Password es: " + md5(formulario.password.value));
	
	if((md5(formulario.username.value) == '0f521b64d1d6d6e05eb0f0e9ab813f06') && 
	   (md5(formulario.password.value) == 'efd4eebd26d5f20e237e9f053ea1bcb6'))
	{		
		$('#mask , .login-popup').fadeOut(300 , function() {
			$('#mask').remove();  
		});
		 
		$('#formulary').fadeIn('fast',function(){
            $('#box2').animate({'top':'100px'},500);
        });
    	$('#boxclose2').click(function(){
        	$('#box2').animate({'top':'-500px'},500,function(){
            	$('#formulary').fadeOut('fast');
        	});
     	});
	}else{
		alert("Datos incorrectos, ingrese nuevamente.");
	}
}