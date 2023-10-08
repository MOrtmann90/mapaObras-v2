let lineasObras = {
  type: "FeatureCollection",
  name: "lineas",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        id_obra: 49,
        nombre: "Pavimentación",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: "Villa Italia",
        descripcion:
          "Obras de pavimentación en calle Magallanes, entre la Ruta Nº 226 y calle Beiró.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.138337213989921, -37.294400074632129],
          [-59.138557847135658, -37.294588038352963],
          [-59.139547053053612, -37.295409763605171],
          [-59.1407159927045, -37.296331199242836],
          [-59.141832307309066, -37.29727318081239],
          [-59.14296980634208, -37.298198554022647],
          [-59.144089082188671, -37.299115408890657],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        id_obra: 43,
        nombre: "Pavimentación",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: null,
        descripcion:
          "Incluye trabajos en 13 cuadras y demanda una inversión de 185 millones de pesos y se financia con recursos provinciales gestionados por el gobierno local.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.177360212916412, -37.305918900241835],
          [-59.176237761102222, -37.305006524237513],
          [-59.175047234990693, -37.304089475246592],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        id_obra: 41,
        nombre: "Repavimentación",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: "Villa Italia",
        descripcion:
          "Este proyecto incluye la pavimentación de varias calles cercanas a la Ruta Nacional 226, para mejorar la accesibilidad y el tránsito.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.139547053053612, -37.295409763605171],
          [-59.140673638045271, -37.294524898118603],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 4,
        id_obra: 37,
        nombre: "Pavimentación",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: "Villa del parque",
        descripcion:
          "Retiro del antiguo pavimento, la preparación de la base y la construcción de badenes corridos en los laterales.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.135755887892458, -37.344976073929004],
          [-59.136413956348306, -37.343850180316323],
          [-59.137712240736093, -37.341778325504343],
          [-59.137640299958655, -37.341647979974603],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 5,
        id_obra: 35,
        nombre: "Pavimentación y cordon cuneta",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: null,
        descripcion: "Pavimentación.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.107303939139477, -37.317393479060797],
          [-59.108316612604256, -37.31822192083316],
          [-59.1094568486509, -37.319128788126044],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 6,
        id_obra: 15,
        nombre: "Avenida Alvear",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable:
          "Fondo Provincial de Infraestructura Municipal y del Fondo Municipal de Inversión Vial",
        barrio: null,
        descripcion:
          "Repavimentación. Esta etapa forma parte de los programas de obras de infraestructura vial impulsados por la comuna con el fin de desarrollar arreglos en los lugares deteriorados.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.132427595381941, -37.33371307161287],
          [-59.13111151078374, -37.340422402237344],
          [-59.130995122333815, -37.341056118128442],
          [-59.131006690691791, -37.341404594889092],
          [-59.131034271905854, -37.34171586156527],
          [-59.131034271905854, -37.34171586156527],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 7,
        id_obra: 16,
        nombre: "E.S Nº 8 - J.I Nº 922 - E.P Nº 68",
        tipo: "Infraestructura",
        estado: "Terminada",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: null,
        descripcion:
          "Recambio completo de veredas. La obra busca mejorar las condiciones de circulación peatonal en esa cuadra en la que se encuentran dos escuelas y un jardín de infantes. ",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.132759552632358, -37.320423704031427],
          [-59.131332364227582, -37.319890645379054],
          [-59.131332364227582, -37.319890645379054],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 8,
        id_obra: 26,
        nombre: "Pavimentación y cordon cuneta",
        tipo: "Infraestructura",
        estado: "En ejecución",
        direccion: null,
        org_responsable: "Municipio de Tandil",
        barrio: "Villa Aguirre",
        descripcion: "Pavimentación.",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-59.122972666125442, -37.304008677367321],
          [-59.122393364567721, -37.303558382018146],
          [-59.12121226557543, -37.302565484163331],
        ],
      },
    },
  ],
};
