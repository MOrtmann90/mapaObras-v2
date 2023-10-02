var map = L.map("map").setView([-37.32497, -59.13597], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Geojson

var estiloPuntos = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

// Crea una capa GeoJSON
var geojsonLayer = L.geoJSON(puntosObras, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloPuntos);
  },
}).addTo(map);




