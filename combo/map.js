// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var myVar=setInterval(function(){updateLocation(location)},1000);
// var myVar=setInterval(function(){initialize()},10000);


var map;
var pos;
var markerMain;
var infowindow;



function initialize() {

  var mapOptions = {

    zoom: 14,
    minZoom: 10,
    maxZoom: 16


  };


  // Try HTML5 geolocation

    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);




  $.get("map_process.php", function (data) {
    $(data).find("marker").each(function () {
      var name    = $(this).attr('name');
      var address   = '<p>'+ $(this).attr('address') +'</p>';
      var type    = $(this).attr('type');
      var point   = new google.maps.LatLng(parseFloat($(this).attr('lat')),parseFloat($(this).attr('lng')));
      create_marker(point, name, address, false, false, false, "icons/pin_blue.png");
    });
  }); 

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      markerMain = new google.maps.Marker({
      position: pos,
      map: map,

      title: 'Hello World!'
      // });
      // var infowindow = new google.maps.InfoWindow({
      //   map: map,
      //   position: pos,
      //   content: 'Location found using HTML5.'
      });

      resizeMap();
      map.setCenter(pos);

    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }



  // google.maps.event.addListener(map, "click", function(event) {
  //     marker = new google.maps.Marker({
  //       position: event.latLng,
  //       map: map,
  //       icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'

  //     });
  //     google.maps.event.addListener(marker, "click", function() {
  //       infowindow.open(map, marker);
  //     });
  // });

  // google.maps.event.addListener(map, 'click', function(event) {
  //  placeMarker(event.latLng);

  //   google.maps.event.addListener(placeMarker, "click", function() {
  //     infowindow.open(map, marker);
  //   });

  // });
  window.addEventListener('deviceorientation', function(event) {
    //Edit form to be displayed with new marker
    var EditForm = '<p><div class="marker-edit">'+
    '<form action="ajax-save.php" method="POST" name="SaveMarker" id="SaveMarker">'+
    '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>'+
    '<label for="pDesc"><span>Description :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>'+
    '<label for="pType"><span>Type :</span> <select name="pType" class="save-type"><option value="restaurant">Rastaurant</option><option value="bar">Bar</option>'+
    '<option value="house">House</option></select></label>'+
    '</form>'+
    '</div></p><button name="save-marker" class="save-marker">Save Marker Details</button>';

    //Drop a new Marker with our Edit Form
    // if(beta >= 30 || beta <= -30){    
    //   create_marker(pos, 'New Marker', EditForm, true, true, true, "icons/pin_green.png");
    // }
    // if(beta >= 30){
    //   alert('place');
    //   create_marker(pos, 'New Marker', EditForm, true, true, true, "icons/pin_green.png");
    // }
  });

  // updateLocation();
}

function create_marker(MapPos, MapTitle, MapDesc,  InfoOpenDefault, DragAble, Removable, iconPath)
  {             

    //new marker
    var marker = new google.maps.Marker({
      position: MapPos,
      map: map,
      // draggable:DragAble,
      animation: google.maps.Animation.DROP,
      title:"Hello World!",
      icon: iconPath
    });
    
    //Content structure of info Window for the Markers
    var contentString = $('<div class="marker-info-win">'+
    '<div class="marker-inner-win"><span class="info-content">'+
    '<h1 class="marker-heading">'+MapTitle+'</h1>'+
    MapDesc+ 
    '</span><button name="remove-marker" class="remove-marker" title="Remove Marker">Remove Marker</button>'+
    '</div></div>');  

    
    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();
    //set the content of infoWindow
    infowindow.setContent(contentString[0]);

    //Find remove button in infoWindow
    var removeBtn   = contentString.find('button.remove-marker')[0];
    var saveBtn   = contentString.find('button.save-marker')[0];

    //add click listner to remove marker button
    google.maps.event.addDomListener(removeBtn, "click", function(event) {
      remove_marker(marker);
    });
    
    if(typeof saveBtn !== 'undefined') //continue only when save button is present
    {
      //add click listner to save marker button
        var mReplace = contentString.find('span.info-content'); //html to be replaced after success
        var mName = contentString.find('input.save-name')[0].value; //name input field value
        var mDesc  = contentString.find('textarea.save-desc')[0].value; //description input field value
        var mType = contentString.find('select.save-type')[0].value; //type of marker
        
      
        save_marker(marker, mName, mDesc, mType, mReplace); //call save marker function
        

    }
    
    //add click listner to save marker button    
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker); // click on marker opens info window 
      });
      
    if(InfoOpenDefault) //whether info window should be open by default
    {
    } else{
            // infowindow.open(map,marker);

    }

  }
  
  //############### Remove Marker Function ##############
  function remove_marker(Marker)
  {
    
    /* determine whether marker is draggable 
    new markers are draggable and saved markers are fixed */
    if(Marker.getDraggable()) 
    {
      Marker.setMap(null); //just remove new marker
    }
    else
    {
      //Remove saved marker from DB and map using jQuery Ajax
      var mLatLang = Marker.getPosition().toUrlValue(); //get marker position
      var myData = {del : 'true', latlang : mLatLang}; //post variables
      $.ajax({
        type: "POST",
        url: "map_process.php",
        data: myData,
        success:function(data){
          Marker.setMap(null); 
          alert(data);
        },
        error:function (xhr, ajaxOptions, thrownError){
          alert(thrownError); //throw any errors
        }
      });
    }

  }
  
  //############### Save Marker Function ##############
  function save_marker(Marker, mName, mAddress, mType, replaceWin)
  {
    //Save new marker using jQuery Ajax
    var mLatLang = Marker.getPosition().toUrlValue(); //get marker position
    var myData = {name : mName, address : mAddress, latlang : mLatLang, type : mType }; //post variables
    console.log(replaceWin);    
    $.ajax({
      type: "POST",
      url: "map_process.php",
      data: myData,
      success:function(data){
        replaceWin.html(data); //replace info window with new html
        Marker.setDraggable(false); //set marker to fixed
        Marker.setIcon('icons/pin_blue.png'); //replace icon
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError); //throw any errors
            }
    });
  }

function updateLocation(location) {
  navigator.geolocation.getCurrentPosition(function(position) {

    var newPos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
    markerMain.setPosition(newPos);
    google.maps.event.trigger(map, 'resize');

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


// function placeMarker(location) {
//     var marker = new google.maps.Marker({
//         position: location, 
//         map: map,
//         icon: 'icons/green-dot.png'

//     });
//     var html = "<table>" +
//                  "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
//                  "<tr><td>Address:</td> <td><input type='text' id='address'/></td> </tr>" +
//                  "<tr><td>Type:</td> <td><select id='type'>" +
//                  "<option value='bar' SELECTED>bar</option>" +
//                  "<option value='restaurant'>restaurant</option>" +
//                  "</select> </td></tr>" +
//                  "<tr><td></td><td><input type='button' value='Save & Close' onclick='saveData()'/></td></tr>";
//     infowindow = new google.maps.InfoWindow({
//      content: html
//     });

//     google.maps.event.addListener(marker, "click", function() {
//       infowindow.open(map, marker);
//     });
// }

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

function resizeMap() {
  google.maps.event.trigger(map, 'resize');
  // map.setCenter(pos);
  console.log('resized');

}


google.maps.event.addDomListener(window, 'load', initialize);
