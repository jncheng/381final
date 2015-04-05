// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.
var myVar=setInterval(function(){updateLocation(location)},1000);

var map;
var pos
var markerMain;

function initialize() {
  var mapOptions = {
    zoom: 14
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      markerMain = new google.maps.Marker({
      position: pos,
      map: map,

      title: 'Hello World!'
      });
      // var infowindow = new google.maps.InfoWindow({
      //   map: map,
      //   position: pos,
      //   content: 'Location found using HTML5.'
      // });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
  google.maps.event.addListener(map, 'click', function(event) {
   placeMarker(event.latLng);
  });
  updateLocation();
}

function updateLocation(location) {
  navigator.geolocation.getCurrentPosition(function(position) {

    var newPos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
    markerMain.setPosition(newPos)

      // position: pos,
      // map: map,

      // title: 'Hello World!'
      // });
      // var infowindow = new google.maps.InfoWindow({
      //   map: map,
      //   position: pos,
      //   content: 'Location found using HTML5.'
      // });

      map.setCenter(newPos);

      console.log('Hello');
  });
}


function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location, 
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'

    });
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
