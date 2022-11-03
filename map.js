// Create a new Leaflet map
let poemMap;
poemMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);

const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);

timesSquare.bindPopup("<b>Times Square</b>");

const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

circle.bindPopup("I'm a circle!");

const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);

polyline.bindPopup("<b>Times Square to the Graduate Center</b>");

const latLng = timesSquare.getLatLng();
console.log(latLng.lat);
console.log(latLng.lng);

//poemMap.panTo(timesSquare.getLatLng());

poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

// tip top coordinates: 40.68381191847462, -73.95636100860743
const tipTop = L.marker([40.68381191847462, -73.95636100860743]).addTo(poemMap);
tipTop.bindPopup("<b>Tip Top</b>");
poemMap.panTo(tipTop.getLatLng());

let tipTopCords = tipTop.getLatLng()
console.log(tipTopCords)

//Franklin C coordinates: 40.68082032810335, -73.95571255733634
const polyline2 = L.polyline([
    [tipTopCords.lat, tipTopCords.lng],
    [40.68082032810335, -73.95571255733634]
], {
    color: 'blue'
}).addTo(poemMap);

polyline2.bindPopup("<b>Tip Top to the C Line</b>");