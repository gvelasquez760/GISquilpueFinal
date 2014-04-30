/*		INFORMACION
Este Sistema esta Desarrollado Exclusivamente para Corporación Municipal de Quilpué
Creado por Ricardo Tapia Báez y Gary Velasquez Lopez, Alumnos de Duoc UC Viña del Mar
Actualizado: 01-Oct-2012
*/

// ====================== Variables Globales ====================== 
var quilpue = new google.maps.LatLng(-33.044644,-71.443233);
var map, iw;
var x = document.getElementById("mi_mapa");
var  markers = [];
var gmarkers = [];

//Sombra para ubicación actual
var sombra_ubi = new google.maps.MarkerImage("imagenes/icon/shadow-you.png",
	new google.maps.Size(71.0, 60.0),
	new google.maps.Point(0, 0),
	new google.maps.Point(10.0, 70.0)
);

//Sombra para los Marcadores
var mk_sombra = new google.maps.MarkerImage('imagenes/marker/sombra.png',
	new google.maps.Size(75.0, 60.0),
	new google.maps.Point(0, 0),
	new google.maps.Point(28.0, 55.0)
);

//Capa de visualización de OpenStreetMaps
var mapTypeIds = [];
for(var type in google.maps.MapTypeId) {
    mapTypeIds.push(google.maps.MapTypeId[type]);
}
mapTypeIds.push("OSM");

//URL de los Marcadores del Mapa
var icons = { 
	bomberos: 				['imagenes/marker/mk_bomberos.png'],
  	carabineros: 			['imagenes/marker/mk_carabineros.png'],
  	educacion: 				['imagenes/marker/mk_educacion.png'],
  	jardines: 				['imagenes/marker/mk_jardines.png'],
  	salud: 					['imagenes/marker/mk_salud.png'],
  	corporacion:			['imagenes/marker/mk_corporacion.png'],
  	municipalidad: 			['imagenes/marker/mk_municipalidad.png'],
  	policiainvestigaciones: ['imagenes/marker/mk_pdi.png']
};
// ====================== FIN Varuables Globales ======================

//Opciones de Configuracion del Mapa Principal
var myOptions = {
	zoom: 13,															//Zoom	
	center: quilpue,													//Centrar Mapa en "Quilpué"		
	scaleControl: true,													//Barra de Escala, "Esquina Inferior Izquierda"		
	panControl: false,													//Circulo con Flechas		
	streetViewControl: true,											//Hombrecito Naranjo
	rotateControl: false,												//Boton de Rotación de Mapa
	keyboardShortcuts:true,												//Uso del Teclado
	draggableCursor: 'url(imagenes/favicon/mario.cur), default',		//Cursor Puntero Personalizado
	draggingCursor: 'url(imagenes/favicon/hand_closed.cur), move',		//Cursor Move Personalizado
	backgroundColor: '#A1EF65',											//Color de Fondo <Negro>
	scrollwheel: true,													//Uso de Scroll en el Mapa
	noClear: false,
	
	overviewMapControl: true,											//Mapa General, "Esquina Inferior Derecha"	 
	overviewMapControlOptions: {										//Opcion de Mapa Chico
		opened: true													//Valores:<true><false>
	}, 	
		
	zoomControl: true,													//Barra Zoom	 		
	zoomControlOptions: {												//Opción de Zoom
  		style: google.maps.ZoomControlStyle.DEFAULT,					//Valores:<SMALL><LARGE><DEFAULT>
    	position: google.maps.ControlPosition.RIGHT_CENTER
	},
	
	mapTypeId: "OSM",													//Tipo Mapa: google.maps.MapTypeId.<ROADMAP><SATELLITE><TERRAIN><"OSM">   	
	mapTypeControl: true,												//Barra Tipo de Mapas	
	mapTypeControlOptions: {											//Opciones de Mapas
  		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,			//Valores:<HORIZONTAL_BAR><DROPDOWN_MENU><DEFAULT>
  		position: google.maps.ControlPosition.TOP_RIGHT,
  		mapTypeIds: mapTypeIds   		
  	}		
};
// FIN Variables Globales

//Funcion de inicialización		
function initialize() {
	//Creación del Mapa y de infowindows(ventana que se abre al hacer click en un marcador)
	map = new google.maps.Map(document.getElementById("mi_mapa"),myOptions);
	iw = new google.maps.InfoWindow();
		
	//Funcionalidad para cerrar las infowindows 
	google.maps.event.addListener(map, "click", function() {
		if (iw) iw.close();
	});
	//INPORTANTE: CARGA DE MARCADORES EN EL MAPA 
	readData();
	
	//Configuración de la capa OpenStreetMaps(Capa de Inicializacion del mapa)
	map.mapTypes.set("OSM", new google.maps.ImageMapType({
    	getTileUrl: function(coord, zoom) {
        	return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
    	},
    	tileSize: new google.maps.Size(256, 256),
    	name: "OpenStreetMap",
    	alt: "Muestra más detalles",
    	maxZoom: 21
	}));
	
	// === Funcionalidad: Autocompletado para las busquedas ===	
	var input = document.getElementById('searchbox');
	var options = {
		types: ['geocode'],
		componentRestrictions: {country: 'cl'}
	};
	
	//creacion de la funcion Autocompletado con la API de Google Maps
	autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.bindTo('bounds', map);

	//Creacion de una Infowindows
    var infowindow = new google.maps.InfoWindow();
    //Configuración del Marcador de la Busqueda
    var marker = new google.maps.Marker({
		map: map,
		shadow: mk_sombra,
        cursor: 'url(imagenes/favicon/hand.cur), default',
        icon: 'imagenes/marker/mk_camino.png'
    });
	
	//Funcionalidad del Autocompletado al clickear una sugerencia
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
		infowindow.close();
		var place = autocomplete.getPlace();
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(15);
		}
		
		var image = new google.maps.MarkerImage(
			new google.maps.Size(71, 71),
			new google.maps.Point(0, 0),
			new google.maps.Point(17, 34),
			new google.maps.Size(35, 35));
		
		//marker.setIcon(image);
		marker.setPosition(place.geometry.location);
		
		var address = '';
		if (place.address_components) {
			address = [
				(place.address_components[0] && place.address_components[0].short_name || ''),
				(place.address_components[1] && place.address_components[1].short_name || ''),
				(place.address_components[2] && place.address_components[2].short_name || '')
			].join(', ');
		}
		
		infowindow.setContent('<div><b>' + place.name + '</b><br><br>' + address);
		infowindow.open(map, marker);
	});
	
	//Creación y Configuración de la Capa "Estado del Tiempo"	
	weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS,
        windSpeedUnits: google.maps.weather.WindSpeedUnit.KILOMETERS_PER_HOUR,
        labelColor: google.maps.weather.LabelColor.WHITE
    });    
    
    //Creacion de la Capa "Meteorologia"
    cloudsLayer = new google.maps.weather.CloudLayer();
    //cloudsLayer.setMap(map);
    
	//Funcionalidad de la Capa "Estado del Tiempo" (Checkbox)
    $('#tiempo').click(function(){
    	map.setZoom(12);
        weatherLayer.setMap($(this).is(':checked') ? map : null);
    });
	//Funcionalidad de la Capa "Meteorogolia" (Checkbox)
    $('#meteorologia').click(function(){
    	map.setZoom(5);
        cloudsLayer.setMap($(this).is(':checked') ? map : null);
    });
	//Funcionalidad para desactivar los checkbox de las capas anteriores
    $('#meteorologia,#tiempo').removeAttr('disabled');
	
	//Cordenadas de la ruta del bus 1
	var rutaBusUno = [
		new google.maps.LatLng(-33.03723357644884, -71.48414254188538),
		new google.maps.LatLng(-33.03829488091797, -71.48403525352478),
		new google.maps.LatLng(-33.03824091659246, -71.48311257362366),
		new google.maps.LatLng(-33.03762931859318, -71.48283362388611),
		new google.maps.LatLng(-33.03759334210806, -71.481374502182),
		new google.maps.LatLng(-33.038043047116126, -71.48124575614929),
		new google.maps.LatLng(-33.038132987842275, -71.48019433021545),
		new google.maps.LatLng(-33.03807902341761, -71.47972226142883),
		new google.maps.LatLng(-33.03791712994526, -71.47952914237976),
		new google.maps.LatLng(-33.03827689281314, -71.47905707359314),
		new google.maps.LatLng(-33.03894245024571, -71.47817730903625),
		new google.maps.LatLng(-33.040687266131314, -71.47379994392395),
		new google.maps.LatLng(-33.040939092374344, -71.47083878517151),
		new google.maps.LatLng(-33.04198236485477, -71.46907925605774),
		new google.maps.LatLng(-33.04286374059732, -71.46697640419006),
		new google.maps.LatLng(-33.042737830316895, -71.46397233009338),
		new google.maps.LatLng(-33.04354725040767, -71.46221280097961),
		new google.maps.LatLng(-33.045849560218926, -71.45802855491638),
		new google.maps.LatLng(-33.04705465151532, -71.45395159721375),
		new google.maps.LatLng(-33.04709062413639, -71.44899487495422),
		new google.maps.LatLng(-33.0481158376599, -71.44410252571106),
		new google.maps.LatLng(-33.0481518098475, -71.4431369304657),
		new google.maps.LatLng(-33.046191304201884, -71.44116282463074),
		new google.maps.LatLng(-33.04736041832599, -71.43219351768494),
		new google.maps.LatLng(-33.04782805963009, -71.42895340919495),
		new google.maps.LatLng(-33.05120939208813, -71.42813801765442),
		new google.maps.LatLng(-33.05478842701038, -71.4271080493927),
		new google.maps.LatLng(-33.05879893147317, -71.42633557319641),
		new google.maps.LatLng(-33.06268337147003, -71.42406105995178),
		new google.maps.LatLng(-33.0644277169891, -71.42258048057556),
		new google.maps.LatLng(-33.068114106666165, -71.41719460487366),
		new google.maps.LatLng(-33.069714491184406, -71.41206622123718),
		new google.maps.LatLng(-33.07214198517413, -71.40633702278137)
    ];

	//Cordenadas de la ruta del bus 2	
	var rutaBusDos = [
		new google.maps.LatLng(-33.05776485026969, -71.45432710647583),
		new google.maps.LatLng(-33.05875397167343, -71.45190238952637),
		new google.maps.LatLng(-33.06159988171901, -71.45240664482117),
		new google.maps.LatLng(-33.061833664868416, -71.44127011299133),
		new google.maps.LatLng(-33.04820127158147, -71.44081950187683),
		new google.maps.LatLng(-33.04827321587219, -71.43959641456604),
		new google.maps.LatLng(-33.04633069939311, -71.43953204154968),
		new google.maps.LatLng(-33.04778759076923, -71.42893195152283),
		new google.maps.LatLng(-33.049586188853716, -71.42863154411316),
		new google.maps.LatLng(-33.05624068235001, -71.42680764198303),
		new google.maps.LatLng(-33.0587045158672, -71.42635703086853),
		new google.maps.LatLng(-33.059981365962855, -71.42586350440979),
		new google.maps.LatLng(-33.063416180628515, -71.42356753349304),
		new google.maps.LatLng(-33.06422541064704, -71.4235246181488),
		new google.maps.LatLng(-33.065106563760835, -71.42258048057556),
		new google.maps.LatLng(-33.06886485246624, -71.42264485359192),
		new google.maps.LatLng(-33.07359395419847, -71.4251983165741),
		new google.maps.LatLng(-33.07244316957301, -71.42880320549011),
		new google.maps.LatLng(-33.07055513094261, -71.4276659488678)
    ];
	
	//Cordenadas de la ruta del bus 3	
	var rutaBusTres = [
		new google.maps.LatLng(-33.047571756530566, -71.4395534992218),
		new google.maps.LatLng(-33.04631271292922, -71.43951058387756),
		new google.maps.LatLng(-33.04791349383084, -71.428781747818),
		new google.maps.LatLng(-33.04924445804437, -71.4286744594574),
		new google.maps.LatLng(-33.055970915367915, -71.42682909965515),
		new google.maps.LatLng(-33.05922604842544, -71.42622828483582),
		new google.maps.LatLng(-33.06026910427235, -71.42567038536072),
		new google.maps.LatLng(-33.06325433373197, -71.42365336418152),
		new google.maps.LatLng(-33.065178494237784, -71.42148613929749),
		new google.maps.LatLng(-33.06809162914824, -71.41719460487366),
		new google.maps.LatLng(-33.06931439778356, -71.41350388526917),
		new google.maps.LatLng(-33.07114851887772, -71.4142119884491),
		new google.maps.LatLng(-33.07251509405308, -71.41569256782532),
		new google.maps.LatLng(-33.07467280111447, -71.4162290096283),
		new google.maps.LatLng(-33.075697693430705, -71.41715168952942),
		new google.maps.LatLng(-33.075374044515485, -71.41809582710266),
		new google.maps.LatLng(-33.0716879589825, -71.41625046730042),
		new google.maps.LatLng(-33.06904467086876, -71.42264485359192),
		new google.maps.LatLng(-33.070501186386444, -71.42358899116516),
		new google.maps.LatLng(-33.07355799240676, -71.42517685890198),
		new google.maps.LatLng(-33.07310846877017, -71.42648577690125),
		new google.maps.LatLng(-33.071346313966814, -71.42549872398376),
		new google.maps.LatLng(-33.07021348152832, -71.4249837398529),
		new google.maps.LatLng(-33.06936834306731, -71.42687201499939),
		new google.maps.LatLng(-33.06663507374702, -71.42502665519714),
		new google.maps.LatLng(-33.065789900918254, -71.42614245414734),
		new google.maps.LatLng(-33.0652684072513, -71.42558455467224),
		new google.maps.LatLng(-33.064369272982496, -71.42547726631165),
		new google.maps.LatLng(-33.064621031503684, -71.42215132713318)
    ];
	
	//Cordenadas de la ruta del bus 4	
	var rutaBusCuatro = [
		new google.maps.LatLng(-33.05825941236077, -71.39950275421143),
		new google.maps.LatLng(-33.0581335240921, -71.40242099761963),
		new google.maps.LatLng(-33.057468111681395, -71.40325784683228),
		new google.maps.LatLng(-33.056838662879954, -71.40681982040405),
		new google.maps.LatLng(-33.05761198506124, -71.4086651802063),
		new google.maps.LatLng(-33.05906868978939, -71.41061782836914),
		new google.maps.LatLng(-33.05915860904444, -71.41190528869629),
		new google.maps.LatLng(-33.057594000901624, -71.416175365448),
		new google.maps.LatLng(-33.057719889941815, -71.41741991043091),
		new google.maps.LatLng(-33.05755803257134, -71.41860008239746),
		new google.maps.LatLng(-33.056766725587515, -71.42179727554321),
		new google.maps.LatLng(-33.05674874125522, -71.42417907714844),
		new google.maps.LatLng(-33.05710842720309, -71.42422199249268),
		new google.maps.LatLng(-33.05692858441285, -71.42666816711426),
		new google.maps.LatLng(-33.054752457533866, -71.42714023590088),
		new google.maps.LatLng(-33.05057989854075, -71.42832040786743),
		new google.maps.LatLng(-33.050418028044064, -71.43462896347046),
		new google.maps.LatLng(-33.050238171587644, -71.44338369369507),
		new google.maps.LatLng(-33.04919499689632, -71.44336223602295),
		new google.maps.LatLng(-33.04926694037521, -71.43967151641846),
		new google.maps.LatLng(-33.05111946471402, -71.43975734710693),
		new google.maps.LatLng(-33.054446716390274, -71.43866300582886),
		new google.maps.LatLng(-33.05620920957802, -71.4366888999939),
		new google.maps.LatLng(-33.05692858441285, -71.43576622009277),
		new google.maps.LatLng(-33.0574321432997, -71.43548727035522),
		new google.maps.LatLng(-33.05885288320254, -71.43327713012695),
		new google.maps.LatLng(-33.05939239867769, -71.43070220947266),
		new google.maps.LatLng(-33.058385300449416, -71.42855644226074),
		new google.maps.LatLng(-33.05825941236077, -71.4264965057373),
		new google.maps.LatLng(-33.05937441488178, -71.42621755599976),
		new google.maps.LatLng(-33.06354655707875, -71.4234709739685),
		new google.maps.LatLng(-33.0644277169891, -71.42263412475586),
		new google.maps.LatLng(-33.06816805268575, -71.417076587677),
		new google.maps.LatLng(-33.069660546112864, -71.41218423843384),
		new google.maps.LatLng(-33.07032586635049, -71.41091823577881)
    ];	
	
	//Propiedades de cada una de las rutas	
	var rutaUno = new google.maps.Polyline({
      path: rutaBusUno,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 3
    });
	
	var rutaDos = new google.maps.Polyline({
      path: rutaBusDos,
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 3
    });
	
	var rutaTres = new google.maps.Polyline({
      path: rutaBusTres,
      strokeColor: "#4D4D4D",
      strokeOpacity: 0.8,
      strokeWeight: 3
    });
	
	var rutaCuatro = new google.maps.Polyline({
      path: rutaBusCuatro,
      strokeColor: "#15FF00",
      strokeOpacity: 0.8,
      strokeWeight: 3
    });
	
	//agrego las rutas al mapa
	$('#ruta1').click(function(){
        rutaUno.setMap($(this).is(':checked') ? map : null);
    });
    
    $('#ruta2').click(function(){
        rutaDos.setMap($(this).is(':checked') ? map : null);
    });
    
    $('#ruta3').click(function(){
        rutaTres.setMap($(this).is(':checked') ? map : null);
    });
    
    $('#ruta4').click(function(){
        rutaCuatro.setMap($(this).is(':checked') ? map : null);
    });
    
    $('#ruta1,#ruta2,#ruta3,#ruta4').removeAttr('disabled');
}


// Geolocalizacion
// Funcion para georeferenciar tu ubicacion actual dentro de nuestro mapa
function mi_ubicacion(){
  	if (navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  	else{
  		x.innerHTML="Geolocalización no es soportado por este Navegador.";
  	}
}

//mostrar Posicion Actual(Geolocalización)
function showPosition(position){
	
	//Latitud y Longitud para centrar el mapa para la Geolocalización
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon);  	
  	
  	//Setear configuracion del mapa una vez activada la geolocalización
	map.setOptions(myOptions);
	map.setZoom(16);
	map.setCenter(latlon);
	
	//Creación y configuración del marcador de georeferencial
 	var marker_ubi = new google.maps.Marker({
 		position:latlon,
 		map:map,
 		shadow: sombra_ubi,
 		title:'Clickeame!',
 		animation: google.maps.Animation.DROP,								//Valores:<BOUNCE><DROP>
 		cursor: 'url(imagenes/favicon/hand.cur), default',
 		//draggable: true,
 		icon: 'imagenes/icon/you.png',
 	});
 	
 	//Creación de una infowindow
 	var globo_ubicacion = new google.maps.InfoWindow({
		content: '<div id=globo><h4>Usted esta conectado cerca de aquí</h4></div>',
		maxWidth: 300		
	});
 	//google.maps.event.addListener(marker_ubi, 'click', function() {
 		globo_ubicacion.open(map, marker_ubi);
	//});
}


//Control de Excepciones para Funcion mi_ubicacion()
function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			x.innerHTML="Usuario negó la solicitud de geolocalización."
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML="La información de ubicación no está disponible."
			break;
		case error.TIMEOUT:
			x.innerHTML="La solicitud para obtener la ubicación del usuario el tiempo de espera."
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML="Que vergonzoso, ocurrió un error"
			break;
	}
}


// Create Ajax request for XML
function readData() {
	var request = false;

	try {
   			request = new ActiveXObject("Microsoft.XMLHTTP");   // Trying IE
   		}
   	catch(e)    // Failed, use standard object
		{
  			request = new XMLHttpRequest();
  		}
  	
  	//Lectura del Archivo XML para la generacion del contenido de los marcadores
	request.open("GET", "js/marcadores/marcadores_quilpue.php", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 ){	// && request.status == 200) {
			var xml = request.responseXML;
			var markers = xml.documentElement.getElementsByTagName("marker");
			for(var i = 0, m; m = markers[i]; i++) {
				// Obtain the attribues of each marker
				var lat 		= parseFloat(m.getAttribute("lat"));
				var lng 		= parseFloat(m.getAttribute("lng"));
				var point 		= new google.maps.LatLng(lat,lng);
				var fono 		= m.getAttribute("fono");
				var direccion 	= m.getAttribute("direccion");
				var mail 		= m.getAttribute("mail");
				var info 		= m.getAttribute("info");
				var sitioWeb 	= m.getAttribute("web");
				var logo 		= m.getAttribute("logo");
				var name 		= m.getAttribute("name");
				var category 	= m.getAttribute("category");
				
				// Create the markers
				createMarker(point, name, fono, direccion, mail, info, category, sitioWeb, logo);
			}			
			if(gmarkers) {
				// Sort categories and names to display
				// both in alphabetic order
				gmarkers.sort(compareCats);
			}
			// Show or hide a category initially
			visible.show("educacion");
			visible.show("jardines");
			visible.show("salud");
			visible.hide("bomberos");
			visible.hide("carabineros");
			visible.hide("policiainvestigaciones");
			visible.hide("municipalidad");
			visible.hide("corporacion");
						
			makeSidebar();
		}
	};
	request.send();
}

var compareCats = function(a, b) {
	var n1 = a.name;
	// Treat German umlauts like non-umlauts
	n1 = n1.toLowerCase();
	n1 = n1.replace(/ä/g,"a");
	n1 = n1.replace(/ö/g,"o");
	n1 = n1.replace(/ü/g,"u");
	n1 = n1.replace(/ß/g,"s");
	
	var n2 = b.name;
	
	n2 = n2.toLowerCase();
	n2 = n2.replace(/ä/g,"a");
	n2 = n2.replace(/ö/g,"o");
	n2 = n2.replace(/ü/g,"u");
	n2 = n2.replace(/ß/g,"s");
	
	var c1 = a.category;
	var c2 = b.category;
	
	// Sort categories and names
	if(a.category == b.category){
		if(a.name == b.name){
			return 0;
		}
		return (a.name < b.name) ? -1 : 1;
	}
	return (a.category < b.category) ? -1 : 1;
}


// Funcion: Obtener la Imagen del Marcador 
function shifter(arr) {
	var image = new google.maps.MarkerImage(arr[0]);
	
	return image;
}

//Funcion: Crear Marcador
function createMarker(point, name, fono, direccion, mail, info, category, sitioWeb, logo) {
	var g = google.maps;
	var image = shifter(icons[category]);
	var marker = new google.maps.Marker({
		position: point,
		map: map,
		title: name,
		cursor: 'url(imagenes/favicon/hand.cur), default',
		icon: image,
		shadow: mk_sombra
	});
	
	// Almacena los paramentros como propiedad de marcador
	marker.category = category;
	marker.name = name;
	gmarkers.push(marker);
	
	//Formato de los Infowindows al hacer clic en los marcadores
    var html = 
	    '<div id="container">' +
			'<ul class="menu_iw">' +
				'<li id="categoria" class="active">'+ category.toUpperCase() +'</li>' +
				'<li id="mas">+</li>' +
			'</ul>' +
			'<span class="clear"></span>' +
			'<div class="content categoria">' +
			'<table border="0" align="center">' +
				'<h2>'+ name +'</h2>' +				
				'<tr>' +
					'<td>' +
						'<img src="'+logo+'" alt="-" />' +
					'</td>' +
					'<td>' +
						'<p> '+ info + '</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			'</div>' +
			'<div class="content mas">' +
				'<h2> Contacto </h2>' +
				'<table class="tabla_contacto" border="0" align="center" >' +
				'<tr>' +
					'<td>' +
						'<p><b> Dirección:   </b></p>' +
					'</td>' +
					'<td>' +
						'<p>'+ direccion +'</p>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td>' +
						'<p><b> Telefono:   </b></p>' +
					'</td>' +
					'<td>' +
						'<p>'+ fono +'</p>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td>' +
						'<p><b> Correo:   </b></p>' +
					'</td>' +
					'<td>' +
						'<p><a href="mailto:'+ mail +'">'+ mail +'</a></p>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td>' +
						'<p><b> Sitio Web:   </b></p>' +
					'</td>' +
					'<td>' +
						'<p><a href="'+sitioWeb+'" target="_blank" >Click para ir al Sitio Web</a></p>' +
					'</td>' +
				'</tr>' +
			'</div>' +
		'</div>';
	
	
	g.event.addListener(marker, "click", function() {
		iw.setContent(html);
		iw.open(map, this);
		
		$(function(){
			$(".menu_iw > li").click(function(e){
				switch(e.target.id){
					case "categoria":
						//change status & style menu
						$("#categoria").addClass("active");
						$("#mas").removeClass("active");
						//display selected division, hide others
						$("div.categoria").fadeIn();
						$("div.mas").css("display", "none");
					break;
					case "mas":
						//change status & style menu
						$("#categoria").removeClass("active");
						$("#mas").addClass("active");
						//display selected division, hide others
						$("div.mas").fadeIn();
						$("div.categoria").css("display", "none");
					break;
				}
				//alert(e.target.id);
				return false;
			});
		});
	});
}

//Funcion: Mostrar/Ocultar Marcador con Checkboxs
var visible= { 
	//Mostrar
	show: function(category) {
		// Show all markers of one category
		for(var i= 0, m; m = gmarkers[i]; i++) {
			if (m.category == category) {
				m.setVisible(true);
			}
		}
		// Set the checkbox to true
		document.getElementById(category).checked = true;
	},
	
	//Ocultar
	hide: function(category) {
		// Hide all markers of one category
		for(var i= 0, m; m = gmarkers[i]; i++) {
			if (m.category == category) {
				m.setVisible(false);
			}
		}
		// Clear the checkbox of a hidden category
		document.getElementById(category).checked = false;
		iw.close();
	}
};


function boxclick(box, category) {
	// Mostrar o Ocultar la categoria ol Clickear Checkbox
	if (box.checked) {
		visible.show(category);
	}
	else {
		visible.hide(category);
	}

  	// Rebuild the sidebar
  	makeSidebar();
}

// activar los clics de la barra lateral para abrir la ventana de información adecuada
function triggerClick(i) {
	google.maps.event.trigger(gmarkers[i],"click");
}

//INPORTANTE: Funcionalidad para que las entidades se vean en el panel
function makeSidebar() {
		
	// Educacion
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'educacion'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_educacion").innerHTML = html;
	}
	}
	
	// Jardines
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'jardines'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_jardines").innerHTML = html;
	}
	}
	
	// Bomberos
	var html = "";	

	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'bomberos'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_bomberos").innerHTML = html;	
		}
	}

	
	// Carabineros
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'carabineros'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_carabineros").innerHTML = html;
	}
	}
	
	// Municipalidad
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'municipalidad'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_municipalidad").innerHTML = html;
	}
	}
	
	// Corporacion
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'corporacion'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_corporacion").innerHTML = html;
	}
	}
	
		
	// Salud
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'salud'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_salud").innerHTML = html;
	}
	}
	
	// Policia de Invertigaciones
	var html = "";
	
	for (var i = 0, m; m = gmarkers[i], i < gmarkers.length;i++) {
	if (m.category == 'policiainvestigaciones'){
		if (m.getVisible()) {
			html += '<li class="legendListIcon_'+ gmarkers[i].category +'"><a href="javascript:triggerClick('+i+')" >' + gmarkers[i].name + '<\/a><br \/></li>';
		}
		document.getElementById("sidebar_policia").innerHTML = html;
	}
	}
}