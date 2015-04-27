var InfoController = Marionette.Controller.extend({
	initialize: function(options){
		this.module = options.module;
	},
	showLayers: function(){  			
	  	this.module.app.mainRegion.show(new InfoView());
		this.module.router.navigate("");
	}
});  	