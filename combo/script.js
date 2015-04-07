var backgroundColor = '#B3E5FC'
var plotting = false;
var smaller = true;
var angle1 = 0;
init();

function init() {

console.log(angle1);


  
  //Find our div containers in the DOM
  var dataContainerOrientation = document.getElementById('dataGamma', 'dataBeta');
  var dataContainerMotion = document.getElementById('dataContainerMotion');

  //Check for support for DeviceOrientation event
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {

      var alpha = event.alpha;
      var beta = (event.beta + 0).toFixed(1);
      var gamma = (event.gamma + 90).toFixed(1);

      // beta.toFixed(1); // 2.40


      if(alpha!=null || beta!=null || gamma!=null) {
        

        dataGamma.innerHTML = 'Pitch: ' + gamma;
        dataBeta.innerHTML = 'Camber: ' + beta;
       // direction.innerHTML = 'Direction: ' + alpha;


      }

           //dataContainerOrientation.style.webkitTransform = 'rotate('+beta+'beta)'; 
          // dataContainerOrientation.style.mozTransform    = 'rotate('+beta+'beta)'; 
          // dataContainerOrientation.style.msTransform     = 'rotate('+beta+'beta)'; 
          // dataContainerOrientation.style.oTransform      = 'rotate('+beta+'beta)'; 
          // dataContainerOrientation.style.transform       = 'rotate('+beta+'beta)'; 
          dataGamma.style.webkitTransform = 'rotate('+gamma+'deg)'; 
          dataGamma.style.mozTransform = 'rotate('+gamma+'deg)';          
          dataBeta.style.webkitTransform = 'rotate('+beta+'deg)'; 
          dataBeta.style.mozTransform = 'rotate('+beta+'deg)';

                var EditForm = '<p><div class="marker-edit">'+
    '<form action="ajax-save.php" method="POST" name="SaveMarker" id="SaveMarker">'+
    '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>'+
    '<label for="pDesc"><span>Description :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>'+
    '<label for="pType"><span>Type :</span> <select name="pType" class="save-type"><option value="restaurant">Rastaurant</option><option value="bar">Bar</option>'+
    '<option value="house">House</option></select></label>'+
    '</form>'+
    '</div></p><button name="save-marker" class="save-marker">Save Marker Details</button>';
      
      if(angle1 < beta && beta < 20){
                angle1 = beta;

        
      }
      if(beta > 30){

        if((angle1) > beta){

        angle1 = 0;



          create_marker(pos, 'New Marker', EditForm, true, true, true, "icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);

      // if(beta >= 30 || beta <= -30){




        }
      }

      if(beta >= 30){
        document.getElementById('dataBeta').style.border = "1px solid #ff0000";
        
        // navigator.geolocation.getCurrentPosition(function(position) {
        //   var pos = new google.maps.LatLng(position.coords.latitude,
        //                                position.coords.longitude);  
        //   var newMarkerPos = pos;
        // create_marker(event.latLng, 'New Marker', EditForm, true, true, true, "icons/pin_green.png");

        // var EditForm = '<p><div class="marker-edit">'+
        // '<form action="ajax-save.php" method="POST" name="SaveMarker" id="SaveMarker">'+
        // '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>'+
        // '<label for="pDesc"><span>Description :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>'+
        // '<label for="pType"><span>Type :</span> <select name="pType" class="save-type"><option value="restaurant">Rastaurant</option><option value="bar">Bar</option>'+
        // '<option value="house">House</option></select></label>'+
        // '</form>'+
        // '</div></p><button name="save-marker" class="save-marker">Save Marker Details</button>';

        //Drop a new Marker with our Edit Form
       // create_marker(pos, 'New Marker', EditForm, true, true, true, "icons/pin_green.png");
         

          // navigator.geolocation.getCurrentPosition(function(position) {
          //   var plotpos = new google.maps.LatLng(position.coords.latitude,
          //                                    position.coords.longitude);

          //   var hillmarker = new google.maps.Marker({
          //   position: plotpos,
          //   map: map,
          //   icon: 'icons/green-dot.png',


          //   title: 'Hello World!'
          //   });
          //   // var infowindow = new google.maps.InfoWindow({
          //   //   map: map,
          //   //   position: pos,
          //   //   content: 'Location found using HTML5.'
          //   // });

          //   map.setCenter(plotpos);
          // }, function() {
          //   handleNoGeolocation(true);
          // });
        
        // , function() {
        //   handleNoGeolocation(true);
        // });

      } else {    
        document.getElementById('dataBeta').style.border = "1px solid #000000";
      }

      if(gamma >= 30 || gamma <= -30){
        document.getElementById('dataGamma').style.border = "1px solid #ff0000";
      } else {    
        document.getElementById('dataGamma').style.border = "1px solid #000000";
      }


      }, false);
    }



}

   





initmap();


function initmap() {
 
  //Find our div containers in the DOM
  var dataContainerOrientation = document.getElementById('dataContainerOrientation');
  var dataContainerMotion = document.getElementById('dataContainerMotion');

  //Check for support for DeviceOrientation event
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      var alpha = event.alpha;
      var beta = event.beta;
      var gamma = event.gamma;



      if(alpha!=null || beta!=null || gamma!=null) {
          context.fillStyle = backgroundColor;
          context.fillRect ( 0 , 0 , canvas.width, canvas.height );
        dataContainerOrientation.innerHTML = 'alpha: ' + alpha + '<br/>beta: ' + beta + '<br />gamma: ' + gamma;


      }
          //drawCircle(centerX, centerY, beta);       



    }, false);

  }

  // Check for support for DeviceMotion events
  // if(window.DeviceMotionEvent) {
  //   window.addEventListener('devicemotion', function(event) {
  //     var x = event.accelerationIncludingGravity.x;
  //     var y = event.accelerationIncludingGravity.y;
  //     var z = event.accelerationIncludingGravity.z;
  //     var r = event.rotationRate;
  //     var html = 'Acceleration:<br />';
  //     html += 'x: ' + x +'<br />y: ' + y + '<br/>z: ' + z+ '<br />';
  //     html += 'Rotation rate:<br />';
  //     if(r!=null) html += 'alpha: ' + r.alpha +'<br />beta: ' + r.beta + '<br/>gamma: ' + r.gamma + '<br />';
  //     dataContainerMotion.innerHTML = html;                  
  //   });
  // }
  //drawRect(50,50);
}   




