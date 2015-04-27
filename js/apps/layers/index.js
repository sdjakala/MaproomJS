var LayersModule = function(settings){
	var module = {};
	module.app = settings.app || {};

	var region = settings.region;

	module.controller = new LayersController({ module : module });	

	var view = new LayersView();

	module.show = function(){
		if(region) {
			region.show(view);
		} else {
			throw "Can't show the LayersModule without a region specified";
		}		
	}

	module.show();

	return module;
};