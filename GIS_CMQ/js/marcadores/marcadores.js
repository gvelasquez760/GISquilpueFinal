//Marcadores

// ----------------------------- Declaracion Variables -----------------------------
var  markers = [];
var gmarkers = [];
var map;

 
var icons = { 
	bomberos: 		['imagenes/marker/mk_bomberos.png'],
  	carabineros: 	['imagenes/marker/mk_carabineros.png'],
  	educacion: 		['imagenes/marker/mk_educacion.png'],
  	jardines: 		['imagenes/marker/mk_jardines.png'],
  	salud: 			['imagenes/marker/mk_salud.png'],
  	corporacion:	['imagenes/marker/mk_corporacion.png'],
  	municipalidad: 	['imagenes/marker/mk_municipalidad.png'],
};

var mk_sombra = new google.maps.MarkerImage('imagenes/marker/sombra.png',
	new google.maps.Size(71.0, 60.0),
	new google.maps.Point(0, 0),
	new google.maps.Point(10.0, 70.0)
);
// Fin Declaracion Variables

// ----------------------------- Funcionalidad -----------------------------

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

    var html = '<div>'+
	 '<table border="0">' +
	 '<tr>' +
		'<td> <!-- FOTO -->'+
			'<img src="'+logo+'" alt="logo" />' +
		'</td>' +
		'<td> <!-- CONTENIDO -->'+
			'<p><b>'+name+'</b></p>'+
			'<p>'+info+'</p>'+
			'<p>'+direccion+'</p>'+
			'<p>'+mail+'</p>'+
			'<p><a href="'+sitioWeb+'" target="_blank" >Click para ir al Sitio Web</a>'+
		'</td>'+
	 '</tr></table>'+
	'</div>';
	
	g.event.addListener(marker, "click", function() {
		iw.setContent(html);
		iw.open(map, this);
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

function makeSidebar() {
	var oldheader;
	var html = "";
		
	for (var i= 0, m; m = gmarkers[i]; i++) {
		if (m.getVisible()) {
			var header = gmarkers[i].category;
			header = header.replace(/^./, header.charAt(0).toUpperCase());
			if (oldheader != header) html += "<b>"+ header+"s<\/b><br \/>";
			html += '<a style="border-bottom: 1px dotted #000;" id="'+ gmarkers[i].id+'" href="javascript:triggerClick('+i+')" onmouseover="hover.over('+i+')" onmouseout="hover.out('+i+')">' + gmarkers[i].name + '<\/a><br \/>';
			oldheader = header;
		}
	}
	document.getElementById("sidebar").innerHTML = html;
}