let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);

nycMap.setView([40.7128, -74.0060], 12);

L.geoJSON(nyc, {
    style: function(feature) {
        if (feature.properties.borough === "Manhattan") {
        return {
            color: "blue",
            fillColor: "red",
            fillOpacity: 0.5
            };
        }
        else {
            return {
                color: "blue",
                fillColor: "yellow",
                fillOpacity: 0.5
                };
            } 
    }
}).addTo(nycMap);

// show each borough on the map
L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> <h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);

$("#pan-to-home").click(function() {
    // find flatbush neighborhood property in the dataset
    let home = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Bedford-Stuyvesant";
    });
    console.log(home);
    // find the coordinates of flatbush property
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Bedford-Stuyvesant";
    }).geometry.coordinates;
    console.log(coordinates);
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    nycMap.setZoom(12);
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).addTo(nycMap);
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>I live in Bed-Stuy!</h3>").addTo(nycMap);
});

let neighborhoods = nyc.features.map(function(feature) {
    return feature.properties.neighborhood;
}).filter(function(neighborhood) {
    return neighborhood !== "";
}).sort();
console.log(neighborhoods);

// display all the neighborhoods in the neighborhoods div
neighborhoods.forEach(function(neighborhood) {
    $("#neighborhoods").append("<a href ='#'><li>" + neighborhood + "</li></a>");
    // display in columns
    if (neighborhoods.indexOf(neighborhood) % 4 === 0) {
        $("#neighborhoods").append("<br>");
    }
});

// let manhattan = nyc.features.map(function(feature) {
//     return feature.properties.borough;
//  }).filter(function(borough){
//     return borough === "Manhattan";
// });
// console.log(manhattan);

// if the neighborhood is clicked, find the neighborhood on the map and pan to it
$("#neighborhoods").on("click", "li", function() {
    let neighborhoodText = $(this).text(); // get the text of the neighborhood
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === neighborhoodText; //check if the text matches the neighborhood in the dataset
    }).geometry.coordinates; // get the coordinates of the neighborhood
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
    // zoom in
    nycMap.setZoom(16);
    // add a marker to the neighborhood polygon
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).addTo(nycMap);
    // add a popup to the marker
    L.marker(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0])).bindPopup("<h3>" + feature.properties.neighborhood + "</h3>").addTo(nycMap);
});

let bkCoordinates = [];
bkCoordinates = nyc.features.find(function(feature) {
    return feature.properties.borough === "Brooklyn";
   }).geometry.coordinates;
console.log(bkCoordinates);

const polyline = L.polyline(bkCoordinates, {
    color: 'red'
}).addTo(nycMap);