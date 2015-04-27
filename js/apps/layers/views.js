var LayersView = Marionette.ItemView.extend({	
	template: "#layers-template",
	events: {
		"click a" : "clickLayer"
	},
	clickLayer : function(ev){
		ev.preventDefault();
		UserAdmin.trigger("layer:clicked");
	}
}); 	  	