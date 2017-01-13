$(document).ready(function(){
	// tu codigo va acá
});

// JS API

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 12
  });
}



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});



$(document).ready(function(){
		$('#origen').change(function(){
  			$('#destino').removeAttr('disabled');
		});

});


$(document).ready(function(){
		$('.seleccion').change(function(){
  			$('#btn').removeAttr('disabled');
		});

});


// Mostrar id: caja 2 cuando haga click en boton
function mostrar(){
	document.getElementById('caja2').style.display = 'block';}