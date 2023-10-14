const inputLabels = document.querySelectorAll("div.control-card");
const buttons = document.querySelectorAll('input[type="checkbox"]');

let mapLayer;

buttons.forEach((button) => {
  button.addEventListener("change", () => {
    switch (button.id) {
      case "infra-btn":
        mapLayer = infraestructuraFiltradaLayer;
        break;
      case "educacion-btn":
        mapLayer = educacionFiltradaLayer;
        break;
      case "ambiente-btn":
        mapLayer = ambienteFiltradaLayer;
        break;
      case "salud-btn":
        mapLayer = saludFiltradaLayer;
        break;
      case "seguridad-btn":
        mapLayer = seguridadFiltradaLayer;
        break;
      case "cultura-btn":
        mapLayer = culturaFiltradaLayer;
        break;
    }

    if (!button.checked) {
      console.log(`${button.name}: La capa ha sido removida`);
      map.removeLayer(mapLayer);
      button.parentElement.style.opacity = 0.5;
    } else {
      console.log(`${button.name}: La capa ha sido agregada`);
      map.addLayer(mapLayer);
      button.parentElement.style.opacity = 1;
     }
  });
});

// Reset map

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.checked = true;
    infraestructuraFiltradaLayer.addTo(map);
    seguridadFiltradaLayer.addTo(map);
    culturaFiltradaLayer.addTo(map);
    ambienteFiltradaLayer.addTo(map);
    educacionFiltradaLayer.addTo(map);
    saludFiltradaLayer.addTo(map);
    map.setView([-37.3156, -59.13597], 13);
    // Reset opacity when map is restablished
    button.parentElement.style.opacity = 1;
  });
});
