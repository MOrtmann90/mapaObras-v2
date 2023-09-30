var map = L.map("map").setView([-37.32497, -59.13597], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Geojson

var estiloPuntos = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

// L.geoJSON(puntosObras, {
//   pointToLayer: function (feature, latlng) {
//     return L.circleMarker(latlng, estiloPuntos);
//   }
// }).addTo(map);

// on Each Feature

function onEachFeature(feature, layer) {
  console.warn(`Nombre: ${feature.properties.nombre}`);
}

L.geoJSON(puntosObras, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloPuntos);
  },
  onEachFeature: onEachFeature
}).addTo(map);
