$(function() {
    $('#acerca_de').click(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#box').animate({'top':'160px'},500);
        });
    });
    $('#boxclose').click(function(){
        $('#box').animate({'top':'-500px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });
});