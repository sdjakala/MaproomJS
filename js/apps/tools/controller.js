var ToolsController = Marionette.Controller.extend({
	initialize: function(options){
		this.module = options.module;
	},
	showLayers: function(){  			
	  	this.module.app.mainRegion.show(new ToolsView());
		this.module.router.navigate("");
	}
});  	