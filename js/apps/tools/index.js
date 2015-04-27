var ToolsModule = function(settings){
	var module = {};
	module.app = settings.app || {};

	var region = settings.region;

	module.controller = new ToolsController({ module : module });	

	var view = new ToolsView();

	module.show = function(){
		if(region) {
			region.show(view);
		} else {
			throw "Can't show the ToolsModule without a region specified";
		}		
	}

	module.show();

	return module;
};