$(function() {
	/*
	the json config obj.
	name: the class given to the element where you want the tooltip to appear
	bgcolor: the background color of the tooltip
	color: the color of the tooltip text
	text: the text inside the tooltip
	time: if automatic tour, then this is the time in ms for this step
	position: the position of the tip. Possible values are
		TL	top left
		TR  top right
		BL  bottom left
		BR  bottom right
		LT  left top
		LB  left bottom
		RT  right top
		RB  right bottom
		T   top
		R   right
		B   bottom
		L   left
	*/
	$('.ayuda, #ayuda2').click(function(){
		var config = [
			{
				"name" 		: "searchbox",
				"bgcolor"	: "black",
				"color"		: "white",
				"position"	: "TL",
				"text"		: "<b>Busqueda:</b><br><br>Aquí podrá buscar su calle deseada dentro de la ciudad de Quilpué.<br><br>Además de sugerencias para facilitar su busqueda.",
				"time" 		: 2000
			},
			{
				"name" 		: "inicio",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Inicio:</b><br><br>Volver o Reiniciar el sitio.",
				"position"	: "TR",
				"time" 		: 2000
			},
			{
				"name" 		: "ubicacion",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Mi Ubicación:</b><br><br>Rastrea su ubicación.",
				"position"	: "TR",
				"time" 		: 2000
			},
			{
				"name" 		: "maximize",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Minimizar/Maximizar:</b><br><br>Oculta y Muestra encabezado.<br>"+
							  "<br><b><u>Un Click:</u></b> &nbsp&nbsp&nbsp&nbsp&nbspOculta Encabezado<br><b><u>Doble Click:</u></b> Muestra Encabezado",
				"position"	: "TR",
				"time" 		: 2000
			},
			/*{
				"name" 		: "imprimir",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Imprimir:</b><br><br>Imprime mapa personalizado con marcadores.",
				"position"	: "TR",
				"time" 		: 2000
			},*/
			{
				"name" 		: "acerca",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Acerca de:</b><br><br>Muestra información del sitio.",
				"position"	: "TR",
				"time" 		: 2000
			},
			{
				"name" 		: "volver",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Volver:</b><br><br>Redirecciona a la Corporación Municipal de Quilpué.",
				"position"	: "TR",
				"time" 		: 2000
			},
			{
				"name" 		: "login",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Ingreso Administrativo:</b><br><br>Solo para Personal Autorizado.",
				"position"	: "TR",
				"time" 		: 2000
			},
			{
				"name" 		: "acc",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Navegador:</b><br><br>Le damos la bienvenida a nuestro Navegador Interactivo Movil.<br><br>"+
							  '<b><u>Capas</u></b><br><br>'+
							  'Para activar las capas, debe seleccionar las casilla de verificación(<input type="checkbox" checked />) que se encuentran en el costado izquierdo de cada categoría.<br><br>'+
							  'Seleccionando el nombre de cada categoría, se despliegan las entidades con su respectiva información haciendo clic en ellas.<br><br>'+
							  '<b><u>Estado del Tiempo y Meteorología</u></b><br><br>'+
							  'Para ver estas categorias, Ud. deberá alejar el zoom de nuestro mapa hasta el nivel continental, para apreciar la atmósfera.',
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH1",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Educación:</b><br><br>En esta categoría, solo se muestran Establecimientos Educacionales Públicos administrados por la Corporación Municipal.<br><br>"+
							  '<i>NOTA: Los Establecimentos que NO aparecen en este mapa, su información no estuvo disponible para su publicación.</i>',
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH2",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Jardines Infantiles:</b><br><br>En esta categoría, solo se muestran Jardines Infantiles Públicos administrados por la Corporación Municipal.<br><br>"+
							  '<i>NOTA: Los Establecimentos que NO aparecen en este mapa, su información no estuvo disponible para su publicación.</i>',
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH3",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Salud:</b><br><br>En esta categoría, solo se muestran Establecimientos de Salud Públicos administrados por la Corporación Municipal.<br><br>"+
							  '<i>NOTA: Los Establecimentos que NO aparecen en este mapa, su información no estuvo disponible para su publicación.</i>',
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH4",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Bomberos:</b><br><br>En esta categoría, se muestran las 5 compañias de bomberos de la ciudad.",
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH5",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Carabineros:</b><br><br>En esta categoría, se muestra la 2da Comisaria y Tenencia de Carabineros de Chile.",
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH6",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Policia de Investigaciones:</b><br><br>En esta categoría, se muestra la Policia de Investigaciones (PDI).",
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH7",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Municipalidad:</b><br><br>En esta categoría, se muestra la Ilustre Municipalidad de Quilpué.",
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH8",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Corporación Municipal:</b><br><br>En esta categoría, se muestra la Corporación Municipal de Quilpué (CMQ)",
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH9",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Rutas Buses:</b><br><br>En estas categorías, se muestran las rutas de los buses pertenecientes a la Coporación Municipal de Quilpué.",
				"position"	: "LT",
				"time" 		: 2000
			},
			{
				"name" 		: "nestedH13",
				"bgcolor"	: "black",
				"color"		: "white",
				"text"		: "<b>Estado del Tiempo y Meteorología:</b><br><br>En estas 2 categorías, podrá ver información del clima en tiempo real.",
				"position"	: "LT",
				"time" 		: 2000
			}
	
		],
		//define if steps should change automatically
		autoplay	= false,
		//timeout for the step
		showtime,
		//current step of the tour
		step		= 0,
		//total number of steps
		total_steps	= config.length;
			
		//show the tour controls
		showControls();
		
		/*
		we can restart or stop the tour,
		and also navigate through the steps
		 */
		$('#activatetour').live('click',startTour);
		$('#canceltour').live('click',endTour);
		$('#endtour').live('click',endTour);
		$('#restarttour').live('click',restartTour);
		$('#nextstep').live('click',nextStep);
		$('#prevstep').live('click',prevStep);
		
		function startTour(){
			$('#activatetour').remove();
			$('#endtour,#restarttour').show();
			if(!autoplay && total_steps > 1)
				$('#nextstep').show();
			showOverlay();
			nextStep();
		}
		
		function nextStep(){
			if(!autoplay){
				if(step > 0)
					$('#prevstep').show();
				else
					$('#prevstep').hide();
				if(step == total_steps-1)
					$('#nextstep').hide();
				else
					$('#nextstep').show();	
			}	
			if(step >= total_steps){
				//if last step then end tour
				endTour();
				return false;
			}
			++step;
			showTooltip();
		}
		
		function prevStep(){
			if(!autoplay){
				if(step > 2)
					$('#prevstep').show();
				else
					$('#prevstep').hide();
				if(step == total_steps)
					$('#nextstep').show();
			}		
			if(step <= 1)
				return false;
			--step;
			showTooltip();
		}
		
		function endTour(){
			step = 0;
			if(autoplay) clearTimeout(showtime);
			removeTooltip();
			hideControls();
			hideOverlay();
		}
		
		function restartTour(){
			step = 0;
			if(autoplay) clearTimeout(showtime);
			nextStep();
		}
		
		function showTooltip(){
			//remove current tooltip
			removeTooltip();
			
			var step_config		= config[step-1];
			var $elem			= $('.' + step_config.name);
			
			if(autoplay)
				showtime	= setTimeout(nextStep,step_config.time);
			
			var bgcolor 		= step_config.bgcolor;
			var color	 		= step_config.color;
			
			var $tooltip		= $('<div>',{
				id			: 'tour_tooltip',
				className 	: 'tooltip',
				html		: '<p>'+step_config.text+'</p><span class="tooltip_arrow"></span>'
			}).css({
				'display'			: 'none',
				'background-color'	: bgcolor,
				'color'				: color
			});
			
			//position the tooltip correctly:
			
			//the css properties the tooltip should have
			var properties		= {};
			
			var tip_position 	= step_config.position;
			
			//append the tooltip but hide it
			$('BODY').prepend($tooltip);
			
			//get some info of the element
			var e_w				= $elem.outerWidth();
			var e_h				= $elem.outerHeight();
			var e_l				= $elem.offset().left;
			var e_t				= $elem.offset().top;
			
			
			switch(tip_position){
				case 'TL'	:
					properties = {
						'left'	: e_l,
						'top'	: e_t + e_h + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_TL');
					break;
				case 'TR'	:
					properties = {
						'left'	: e_l + e_w - $tooltip.width() + 'px',
						'top'	: e_t + e_h + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_TR');
					break;
				case 'BL'	:
					properties = {
						'left'	: e_l + 'px',
						'top'	: e_t - $tooltip.height() + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_BL');
					break;
				case 'BR'	:
					properties = {
						'left'	: e_l + e_w - $tooltip.width() + 'px',
						'top'	: e_t - $tooltip.height() + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_BR');
					break;
				case 'LT'	:
					properties = {
						'left'	: e_l + e_w + 'px',
						'top'	: e_t + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_LT');
					break;
				case 'LB'	:
					properties = {
						'left'	: e_l + e_w + 'px',
						'top'	: e_t + e_h - $tooltip.height() + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_LB');
					break;
				case 'RT'	:
					properties = {
						'left'	: e_l - $tooltip.width() + 'px',
						'top'	: e_t + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_RT');
					break;
				case 'RB'	:
					properties = {
						'left'	: e_l - $tooltip.width() + 'px',
						'top'	: e_t + e_h - $tooltip.height() + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_RB');
					break;
				case 'T'	:
					properties = {
						'left'	: e_l + e_w/2 - $tooltip.width()/2 + 'px',
						'top'	: e_t + e_h + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_T');
					break;
				case 'R'	:
					properties = {
						'left'	: e_l - $tooltip.width() + 'px',
						'top'	: e_t + e_h/2 - $tooltip.height()/2 + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_R');
					break;
				case 'B'	:
					properties = {
						'left'	: e_l + e_w/2 - $tooltip.width()/2 + 'px',
						'top'	: e_t - $tooltip.height() + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_B');
					break;
				case 'L'	:
					properties = {
						'left'	: e_l + e_w  + 'px',
						'top'	: e_t + e_h/2 - $tooltip.height()/2 + 'px'
					};
					$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_L');
					break;
			}
			
			
			/*
			if the element is not in the viewport
			we scroll to it before displaying the tooltip
			 */
			var w_t	= $(window).scrollTop();
			var w_b = $(window).scrollTop() + $(window).height();
			//get the boundaries of the element + tooltip
			var b_t = parseFloat(properties.top,10);
			
			if(e_t < b_t)
				b_t = e_t;
			
			var b_b = parseFloat(properties.top,10) + $tooltip.height();
			if((e_t + e_h) > b_b)
				b_b = e_t + e_h;
				
			
			if((b_t < w_t || b_t > w_b) || (b_b < w_t || b_b > w_b)){
				$('html, body').stop()
				.animate({scrollTop: b_t}, 500, 'easeInOutExpo', function(){
					//need to reset the timeout because of the animation delay
					if(autoplay){
						clearTimeout(showtime);
						showtime = setTimeout(nextStep,step_config.time);
					}
					//show the new tooltip
					$tooltip.css(properties).show();
				});
			}
			else
			//show the new tooltip
				$tooltip.css(properties).show();
		}
		
		function removeTooltip(){
			$('#tour_tooltip').remove();
		}
		
		function showControls(){
			/*
			we can restart or stop the tour,
			and also navigate through the steps
			 */
			var $tourcontrols  = '<div id="tourcontrols" class="tourcontrols">';
			$tourcontrols += '<h3>Ayuda Rapida</h3>'
			$tourcontrols += '<p>Necesita ayuda?</p>';
			$tourcontrols += '<span class="button" id="activatetour">Empezar Tutorial</span>';
				if(!autoplay){
					$tourcontrols += '<div class="nav"><span class="button" id="prevstep" style="display:none;">< Atras</span>';
					$tourcontrols += '<span class="button" id="nextstep" style="display:none;">Siguiente ></span></div>';
				}
				$tourcontrols += '<a id="restarttour" style="display:none;">Reiniciar Tutorial</span>';
				$tourcontrols += '<a id="endtour" style="display:none;">Salir del Tutorial</a>';
				$tourcontrols += '<span class="close" id="canceltour"></span>';
			$tourcontrols += '</div>';
			
			$('BODY').prepend($tourcontrols);
			$('#tourcontrols').animate({'right':'40px'},500);
		}
		
		function hideControls(){
			$('#tourcontrols').remove();
		}
		
		function showOverlay(){
			var $overlay	= '<div id="tour_overlay" class="overlay"></div>';
			$('BODY').prepend($overlay);
		}
		
		function hideOverlay(){
			$('#tour_overlay').remove();
		}
	});
});