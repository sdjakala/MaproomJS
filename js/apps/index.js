var MR = new Marionette.Application();

MR.addRegions({
  mapRegion : "#content",
  layersRegion : "#cbp-spmenu-s1",
  infoRegion : "#cbp-spmenu-s2",
  toolsRegion : "#cbp-spmenu-s4"
});


//Modules
MR.addInitializer(function(){

  MR.Map = new MapModule({ app : MR });

  MR.Legend = new LayersModule({ app : MR, region : MR.layersRegion });

  MR.Info = new InfoModule({ app : MR, region : MR.infoRegion });

  MR.Tools = new ToolsModule({ app : MR, region : MR.toolsRegion });

});


//Layers Events
MR.addInitializer(function(){    
  
  MR.on("layer:clicked",function(){
    console.log('layer clicked');
  });

});

//Info Events
MR.addInitializer(function(){    
  
  MR.on("info:clicked",function(){
    console.log('info clicked');
  });

});

//Tools Events
MR.addInitializer(function(){    
  
  MR.on("tool:clicked",function(){
    console.log('tool clicked');
  });

});

//Map Events
MR.addInitializer(function(){    
  
  MR.on("map:clicked",function(){
    console.log('map clicked');
  });

});

//Final
MR.addInitializer(function(){    
    
  Backbone.history.start();

});