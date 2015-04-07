var backgroundColor = '#B3E5FC'
var plotting = false;
var smaller = true;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
init();

function init() {

console.log(angle1);




  var x = 0, y = 0,
      vx = 0, vy = 0,
      ax = 0, ay = 0,
      speedtotal = 0;
    
  if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = function(e) {

      ax = event.accelerationIncludingGravity.x + 9.8;
      ay = event.accelerationIncludingGravity.y * 5;

      speedtotal = ax + ay;


      document.getElementById("speed").innerHTML = 'Speed: ' + speedtotal.toFixed(0);


    
    }

    setInterval( function() {
      var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
      if ( landscapeOrientation) {
        vx = vx + ay;
        vy = vy + ax;
      } else {
        vy = vy - ay;
        vx = vx + ax;
      }
      vx = vx * 0.98;
      vy = vy * 0.98;
      y = parseInt(y + vy / 50);
      x = parseInt(x + vx / 50);
      

    }, 25);
  } 







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

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }
      if(angle2 < gamma && gamma < 20){
                angle2 = gamma;

        
      }
      if(gamma > 30){

        if((angle2) > gamma){

        angle2 = 0;

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }
      if(angle3 > beta && beta > -20){
                angle3 = beta;

        
      }
      if(beta < -30){

        if((angle3) < beta){

        angle3 = 0;

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }
      if(angle4 < gamma && gamma > -20){
                angle4 = gamma;

        
      }
      if(gamma < -30){

        if((angle4) < gamma){

        angle4 = 0;

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }


      if(beta >= 30 || beta <= -30){
        document.getElementById('dataBeta').style.border = "1px solid #ff0000";
        
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



   





