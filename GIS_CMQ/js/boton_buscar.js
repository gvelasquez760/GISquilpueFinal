$('.searchbutton').live('click', function() {
    // Obtenemos la direcci�n y la asignamos a una variable
    var address = $('#searchbox').val();
    // Creamos el Objeto Geocoder
    var geocoder = new google.maps.Geocoder();
    // Hacemos la petici�n indicando la direcci�n e invocamos la funci�n
    // geocodeResult enviando todo el resultado obtenido
	geocoder.geocode({ 'address': address+ ', quilpue, chile'}, geocodeResult);
});

var MyFunction;

function KeyEvent(obj,myfunction){
	// pass the keycode to f28_KeyPress
	obj.onkeypress=function(evt){ f28_KeyPress(evt?evt.keyCode:event.keyCode); }
	obj.onkeydown=function(evt){ f28_KeyPress(evt?evt.keyCode:event.keyCode); }
	// the arameter string specifying the function to call assigned to global variable
	
	MyFunction=myfunction;
	// Cancel events on blur
	obj.onblur=function(){ MyFunction=null; this.onkeypress=null; this.onkeydown=null; }
}

function f28_KeyPress(e){
	// return is keycode 13
	if (e==13&&MyFunction){
		eval(MyFunction);
	}
}

function AnyFunction(){
	// Obtenemos la direcci�n y la asignamos a una variable
    var address = $('#searchbox').val();
    // Creamos el Objeto Geocoder
    var geocoder = new google.maps.Geocoder();
    // Hacemos la petici�n indicando la direcci�n e invocamos la funci�n
    // geocodeResult enviando todo el resultado obtenido
	geocoder.geocode({ 'address': address+ ', quilpue, chile'}, geocodeResult);
}
 
function geocodeResult(results, status) {
    // Verificamos el estatus
    if (status == 'OK') {
        // Si hay resultados encontrados, centramos y repintamos el mapa
        // esto para eliminar cualquier pin antes puesto
        
        map.setOptions(myOptions);
		map.setCenter(results[0].geometry.location);
        // fitBounds acercar� el mapa con el zoom adecuado de acuerdo a lo buscado
        map.fitBounds(results[0].geometry.viewport);
        // Dibujamos un marcador con la ubicaci�n del primer resultado obtenido
        var markerOptions = { 
        	position: results[0].geometry.location,
        	shadow: mk_sombra,
        	cursor: 'url(imagenes/favicon/hand.cur), default',
        	icon: 'imagenes/marker/mk_camino.png',
        }
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);
        map.setZoom(15);
    } else {
        // En caso de no haber resultados o que haya ocurrido un error
        // lanzamos un mensaje con el error
        alert("Geocoding no tuvo éxito debido a: " + status);
    }
}