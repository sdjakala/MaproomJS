var LayersController = Marionette.Controller.extend({
	initialize: function(options){
		this.module = options.module;
	},
	showLayers: function(){  			
	  	this.module.app.mainRegion.show(new LayersView());
		this.module.router.navigate("");
	}
});  	