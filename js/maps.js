
function initMap() {

  var gmap = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 52.517, lng: 13.379}
  });

  var place = 'img/placeholder.png';
  var cutlery = 'img/cutlery.png';
  var coffee = 'img/coffee-cup.png';
  var cocktail = 'img/cocktail.png';
  var position = 'img/position.png';

  var markers = [
    {position: {lat: 52.542903, lng: 13.404160}, title:"Mauerpark. Flohmarkt und Kultur am Sonntag", icon: place},
    {position: {lat: 52.5326643, lng: 13.4143953}, title:"Scotch & Sofa: Cocktails und Whiskeys", icon: cocktail},
    {position: {lat: 52.536315, lng: 13.407261}, title:"Kastanienallee: Viele individuelle kleine Läden", icon: place},
    {position: {lat: 52.481898, lng: 13.431138}, title:"Klunkerkranich: Roof-Top-Bar - Alternativ", icon: cocktail},
    {position: {lat: 52.505422, lng: 13.337905}, title:"Monkey-Bar: Roof-Top-Bar - Stylish", icon: cocktail},
    {position: {lat: 52.511657, lng: 13.426726}, title:"Holzmark: Alternatives Areal mit Snacks, Bars und direkt an der Spree", icon: place},
    {position: {lat: 52.531931, lng: 13.415683}, title:"MontRaw: Mediterrane Küche", icon: cutlery},
    {position: {lat: 52.546944, lng: 13.406081}, title:"Onkel Ho: Vietnamesisches Restaurant", icon: cutlery},
    {position: {lat: 52.542382, lng: 13.413540}, title:"CORE: Kleines koreanisches Restaurant", icon: cutlery},
    {position: {lat: 52.530965, lng: 13.4119318}, title:"I Due Forni: Beste Pizzeria in Town", icon: cutlery},
    {position: {lat: 52.534501, lng: 13.419407}, title:"Umami: Vietnamesisches Restaurant", icon: cutlery},
    {position: {lat: 52.5107428, lng: 13.3424455}, title:"Café am Neuen See: Schönes Café mit Biergarten direkt am See", icon: coffee},
    {position: {lat: 52.531204, lng: 13.402277}, title:"Cafe Fleury: Leckere Kuchen und Kaffee", icon: coffee},
    {position: {lat: 52.492703, lng: 13.421634}, title:"Schlawienchen: Raucherkneipe mit Rockmusik und Tischkicker - Wenn du nicht nach Hause willst ;-)", icon: cocktail},
    {position: {lat: 52.533321, lng: 13.404273}, title:"Glücklich am Park - Kleiner Kleidershop mit Waffeln", icon: coffee},
    {position: {lat: 52.497280, lng: 13.437444}, title:"Einer der vielen Ausgehviertel von Berlin", icon: position},
    {position: {lat: 52.541837, lng: 13.415610}, title:"Massai: Afrikanisches Restaurant", icon: cutlery},
    {position: {lat: 52.525092, lng: 13.407505}, title:"Einer der vielen Shoppingviertel von Berlin", icon: position},
  ];

  markers.map(function(marker_data) {
    marker_data.map = gmap;
    marker_data.clickable = true;
    var marker = new google.maps.Marker(marker_data);
    var infowindow = new google.maps.InfoWindow({
     content: marker.getTitle()
    });
    marker.addListener('click', function() {
     infowindow.open(map, marker);
    });
  });

  var areas = [
  // Neuköln
  [
    {lat: 52.495586, lng: 13.451499},
    {lat: 52.502732, lng: 13.447316},
    {lat: 52.499229, lng: 13.417334},
    {lat: 52.485368, lng: 13.432113}
  ],
  // Mitte
  [
    {lat: 52.527227, lng: 13.415686},
    {lat: 52.529808, lng: 13.402171},
    {lat: 52.523211, lng: 13.401628},
    {lat: 52.519445, lng: 13.413663}
  ]
  ];

  areas.map(function(areaCoords) {
    var area = new google.maps.Polygon({
      paths: areaCoords,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#DDDDDD',
      fillOpacity: 0.35
    });
    area.setMap(gmap);
  });

}
