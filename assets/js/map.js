function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(-36.8791006, 174.8168122), 
		zoom: 13,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
    fullScreenControl: false,
		styles: [
  {
    "stylers": [
      { "hue": "#78AB46" },
      { "invert_lightness": true }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "hue": "#ff6e00" },
      { "gamma": 2 },
      { "lightness": -11 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "hue": "#0099ff" },
      { "saturation": 100 },
      { "lightness": -83 },
      { "gamma": 1.96 }
    ]
  }
]
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}