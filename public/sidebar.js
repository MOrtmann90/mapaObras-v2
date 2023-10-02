var sidebar = L.control.sidebar("sidebar", {
  closeButton: true,
  position: "left",
});
map.addControl(sidebar);

geojsonLayer.on("click", function (e) {
  if (e.layer.feature && e.layer.feature.properties.nombre) {
    console.log(e.layer.feature.properties.nombre);
    setTimeout(function () {
      sidebar.show();
    }, 500);
    sidebar.setContent(`<h2 class="text-2xl"><span id="nombre-obra">${e.layer.feature.properties.nombre}</span></h2>
      <hr class="spacebar"/>
      <div class="datos-obras">
      <p class="datos-obras-subs">Tipo de obra</p>
      <p>${e.layer.feature.properties.tipo}</p>
    </div>
    <div class="datos-obras">
      <p class="datos-obras-subs">Estado</p>
      <p>${e.layer.feature.properties.estado}</p>
    </div>
    <div class="datos-obras">
      <p class="datos-obras-subs">Dirección</p>
      <p>${e.layer.feature.properties.direccion}</p>
    </div>
    <div class="datos-obras">
      <p class="datos-obras-subs">Descripción</p>
      <p>${e.layer.feature.properties.descripcion}</p>`);
  }
});

map.on("click", function () {
  sidebar.hide();
});

sidebar.on("show", function () {
  console.log("Sidebar will be visible.");
});

sidebar.on("shown", function () {
  console.log("Sidebar is visible.");
});

sidebar.on("hide", function () {
  console.log("Sidebar will be hidden.");
});

sidebar.on("hidden", function () {
  console.log("Sidebar is hidden.");
});

L.DomEvent.on(sidebar.getCloseButton(), "click", function () {
  console.log("Close button clicked.");
});
