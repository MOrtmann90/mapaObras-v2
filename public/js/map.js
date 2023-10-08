// =============================================== //
// ===================== MAP ===================== //
// =============================================== //

var map = L.map("map").setView([-37.32497, -59.13597], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// ======================================================== //
// ===================== POINT LAYERS ===================== //
// ======================================================== //

// Crear una capa GeoJSON
var geojsonLayer = L.geoJSON(puntosObras, {
  pointToLayer: function (feature, latlng) {
    var categoria = feature.properties.tipo;
    var iconName;
    var iconColor = "#FFFFFF";
    var iconBackground;

    // Switch para asignar el ícono
    switch (categoria) {
      case "Infraestructura":
        iconName = "fa-solid fa-person-digging";
        iconColor = "#262626";
        iconBackground = "#FDCA3F";
        break;
      case "Seguridad":
        iconName = "fa-solid fa-user-shield";
        iconBackground = "#384C5B";
        break;
      case "Cultura":
        iconName = "fa-solid fa-masks-theater";
        iconBackground = "#A3333D";
        break;
      case "Ambiente":
        iconName = "fa-solid fa-recycle";
        iconBackground = "#80BE39";
        break;
      case "Educación":
        iconName = "fa-solid fa-book-open-reader";
        iconColor = "#262626";
        iconBackground = "#7FB8DB";
        break;
      case "Salud y bienestar":
        iconName = "fa-solid fa-heart";
        iconBackground = "#F64740";
        break;
      default:
        iconName = "fa-solid fa-helmet-safety";
        iconBackground = "#262626";
        break;
    }

    // Crear el icono dinámico
    var obraIcon = L.divIcon({
      className: "my-div-icon",
      html:
        '<div class="icon-circle" style="background-color: ' +
        iconBackground +
        '"><i class="' +
        iconName +
        '" style="color: ' +
        iconColor +
        '"></i></div>',
    });

    // Crear un marcador y agregarlo al mapa
    var marker = L.marker(latlng, { icon: obraIcon });

    // Agregar la información a la característica GeoJSON para su posterior uso
    // feature.properties.icon = obraIcon;

    return marker;
  }
});

// map.fitBounds(geojsonLayer.getBounds());

// ======================================================= //
// ===================== LINE LAYERS ===================== //
// ======================================================= //

var lineLayer = L.geoJSON(lineasObras, {color: '#FDCA3F', weight: 5})


// =================================================== //
// ===================== FILTERS ===================== //
// =================================================== //

// Crear capas para filtrar
var infraestructuraFiltradaLayer = L.layerGroup();
var seguridadFiltradaLayer = L.layerGroup();
var culturaFiltradaLayer = L.layerGroup();
var ambienteFiltradaLayer = L.layerGroup();
var educacionFiltradaLayer = L.layerGroup();
var saludFiltradaLayer = L.layerGroup();

// Iterar sobre la capa geojsonLayer y agregar marcadores a las capas filtradas
geojsonLayer.eachLayer(function (marker) {
  var categoria = marker.feature.properties.tipo;

  // Filtrar por categoría y agregar a la capa correspondiente
  if (categoria === "Infraestructura") {
    infraestructuraFiltradaLayer.addLayer(marker);
    infraestructuraFiltradaLayer.addLayer(lineLayer);
      } else if (categoria === "Seguridad") {
    seguridadFiltradaLayer.addLayer(marker);
  } else if (categoria === "Cultura") {
    culturaFiltradaLayer.addLayer(marker);
  } else if (categoria === "Ambiente") {
    ambienteFiltradaLayer.addLayer(marker);
  } else if (categoria === "Educación") {
    educacionFiltradaLayer.addLayer(marker);
  } else if (categoria === "Salud y bienestar") {
    saludFiltradaLayer.addLayer(marker);
  }
});

// Agregar las capas filtradas al mapa
infraestructuraFiltradaLayer.addTo(map);
seguridadFiltradaLayer.addTo(map);
culturaFiltradaLayer.addTo(map);
ambienteFiltradaLayer.addTo(map);
educacionFiltradaLayer.addTo(map);
saludFiltradaLayer.addTo(map);


