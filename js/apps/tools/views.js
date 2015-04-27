var ToolsView = Marionette.ItemView.extend({	
	template: "#tools-template",
	events: {
		"click a" : "clickTool"
	},
	clickTool : function(ev){
		ev.preventDefault();
		UserAdmin.trigger("tool:clicked");
	}
}); 	  	