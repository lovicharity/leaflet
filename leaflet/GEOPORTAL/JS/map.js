
//initialize map

var map = L.map('map').setView([0, 36], 7);
//add osm tile layer to map
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

L.control.scale().addTo(map)


var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map)

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
});



var marker =L.marker([0,36]).addTo(map)



var controlStyle = {
        opacity:2
}

var controls =L.geoJson(controls,
        {style:controlStyle,
        
        onEachFeature: function (feature ,layer){
                layer.bindPopup(feature.properties.name)
        }



        }).addTo(map)

var baseLayers = {
    "OpenStreetMap": osm,
     "googlestreets": googleStreets,
      "googlehybrid":  googleHybrid,
       "googlesat": googleSat,
        "googleterrain": googleTerrain,
};

var overlays = {
    "Marker": marker,
  //  "Roads": roadsLayer
};
// add layer control to map
L.control.layers(baseLayers,overlays,{collapsed :true }).addTo(map)
//add leaflet control to print
L.control.browserPrint({position: 'topleft', title: 'Print ...'}).addTo(map);

//mouse move
//map.on("mousemove",function(e)){
	//$("#coordinate").html(`Lat:${e.latlng.lat},(Lng:${e.latlng.lng}`)



L.control.scale().addTo(map)