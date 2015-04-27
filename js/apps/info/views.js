var InfoView = Marionette.ItemView.extend({	
	template: "#info-template",
	events: {
		"click a" : "clickInfo"
	},
	clickInfo : function(ev){
		ev.preventDefault();
		UserAdmin.trigger("info:clicked");
	}
}); 	  	