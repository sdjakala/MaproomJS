var MapModule = function(settings){
	var module = {};
	module.app = settings.app || {};


	module.show = function(){
		
		var map = L.map('map').setView([45.094, -93.445], 14);

		L.tileLayer(
		    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {   
		    maxZoom: 18,
	    }).addTo(map);
			
		map.on('click',function(){
			MR.trigger("map:clicked");
		})
	}

	module.show();

	return module;
};