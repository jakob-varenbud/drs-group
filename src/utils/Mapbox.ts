//Mapbox
export const initializeMapbox = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J2YXIiLCJhIjoiY2xyeXlxa2w5MWtxYzJqbmFmZXJ4MXRhZiJ9.TxpTMaCXvDgq5akCtF1kZQ';

  function isMobileDevice() {
    return window.matchMedia('only screen and (max-width: 760px)').matches;
  }

  const map = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/jakobvar/clsltaizq001l01pk0511f7ne',
    zoom: 1, // Standard-Zoom-Leve
    center: [0, 0], // center default
    minZoom: 1, // Minimal erlaubter Zoom-Level, um aus der Ansicht der ganzen Welt nicht weiter herauszuzoomen
    dragPan: false, // Deaktiviert das Verschieben der Karte
    scrollZoom: true, // Optional: deaktiviert das Zoomen durch Scrollen, für vollständige Kontrolle
    touchZoomRotate: true, // Deaktiviert Zoom und Rotation auf Touch-Geräten
  });

  const locations = [
    {
      coordinates: [133.7751, -25.2744],
      info: 'Informationen über Australien',
      googleMapsLink: 'https://www.google.com/maps?q=-25.2744,133.7751',
      image:
        'https://uploads-ssl.webflow.com/65ca143babb87719f1ed2239/65cccc0f3328ca876509b7a6_Pin.png',
    }, // Australien
    {
      coordinates: [22.9375, -30.5595],
      image:
        'https://uploads-ssl.webflow.com/65ca143babb87719f1ed2239/65cccc0f3328ca876509b7a6_Pin.png',
    }, // Südafrika
    {
      coordinates: [104.1954, 35.8617],
      image:
        'https://uploads-ssl.webflow.com/65ca143babb87719f1ed2239/65cccc0f3328ca876509b7a6_Pin.png',
    }, // China
    {
      coordinates: [-102.5528, 23.6345],
      image:
        'https://uploads-ssl.webflow.com/65ca143babb87719f1ed2239/65cccc0f3328ca876509b7a6_Pin.png',
    }, // Mexiko
    {
      coordinates: [-95.7129, 37.0902],
      image:
        'https://uploads-ssl.webflow.com/65ca143babb87719f1ed2239/65cccc0f3328ca876509b7a6_Pin.png',
    }, // USA
  ];

  locations.forEach(function (loc) {
    // Erstelle ein benutzerdefiniertes HTML-Element für den Marker
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.backgroundImage = `url('${loc.image}')`;
    el.style.width = isMobileDevice() ? '50px' : '50px';
    el.style.height = isMobileDevice() ? '50px' : '50px';
    el.style.backgroundSize = 'cover';
    el.style.position = 'absolute';
    el.style.transform = 'translate(-50%, -100%)';
    el.style.cursor = 'pointer';

    // Erstelle das Popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <p>${loc.info}</p>
            <a href="${loc.googleMapsLink}" target="_blank">In Google Maps anzeigen</a>
        `);

    // Füge den Marker mit Popup zur Karte hinzu
    new mapboxgl.Marker(el, { anchor: 'bottom' })
      .setLngLat(loc.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
};
