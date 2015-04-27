var InfoModule = function(settings){
	var module = {};
	module.app = settings.app || {};

	var region = settings.region;

	module.controller = new InfoController({ module : module });	

	var view = new InfoView();

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