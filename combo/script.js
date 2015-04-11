var backgroundColor = '#B3E5FC'
var plotting = false;
var smaller = true;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var px = 0;
var py = 0;


var setCamber = 0;
        // setTilt();

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
  var dataContainerOrientation = document.getElementById('dataGamma', 'dataBeta', 'dataGammaMenu', 'dataBetaMenu');
  var dataContainerMotion = document.getElementById('dataContainerMotion');

  //Check for support for DeviceOrientation event
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {

      var alpha = event.alpha;
      var beta = (event.beta + 0).toFixed(1);
      var gamma = (event.gamma + 90).toFixed(1);
      
        // setPitch1 =  (gamma);
        // var setPitch = (gamma);

      var setPitch = (gamma);

      var setCamber = (beta);

      if(variablesSet){

        //Set Pitch variables
        if(setPitch > 0 && setPitch < 5){
          px = 0;
        } else if(setPitch >= 5 && setPitch < 10){
          px = 5;
        } else if(setPitch >= 10 && setPitch < 15){
          px = 10;
        } else if(setPitch >= 15 && setPitch < 20){
          px = 15;
        } else if(setPitch >= 20 && setPitch < 25){
          px = 20;
        } else if(setPitch >= 25 && setPitch < 30){
          px = 25;
        } else if(setPitch >= 30 && setPitch < 35){
          px = 30;
        } else if(setPitch >= 35 && setPitch < 40){
          px = 35;
        } else if(setPitch >= 40 && setPitch < 45){
          px = 40;
        } else if(setPitch >= 45 && setPitch < 50){
          px = 45;
        } else if(setPitch >= 50 && setPitch < 55){
          px = 50;
        } else if(setPitch >= 55 && setPitch < 60){
          px = 55;
        } else if(setPitch >= 60 && setPitch < 65){
          px = 60;
        } else if(setPitch >= 65 && setPitch < 70){
          px = 65;
        } else if(setPitch >= 70 && setPitch < 75){
          px = 70;
        } else if(setPitch >= 75 && setPitch < 80){
          px = 75;
        } else if(setPitch >= 80 && setPitch < 85){
          px = 80;
        } else if(setPitch >= 85 && setPitch < 90){
          px = 85;
        } else if(setPitch >= 90){
          px = 90;
        }

         else if(setPitch < 0 && setPitch > -5){
          px = 0;
        } else if(setPitch <= -5 && setPitch > -10){
          px = -5;
        } else if(setPitch <= -10 && setPitch > -15){
          px = -10;
        } else if(setPitch <= -15 && setPitch > -20){
          px = -15;
        } else if(setPitch <= -20 && setPitch > -25){
          px = -20;
        } else if(setPitch <= -25 && setPitch > -30){
          px = -25;
        } else if(setPitch <= -30 && setPitch > -35){
          px = -30;
        } else if(setPitch <= -35 && setPitch > -40){
          px = -35;
        } else if(setPitch <= -40 && setPitch > -45){
          px = -40;
        } else if(setPitch <= -45 && setPitch > -50){
          px = -45;
        } else if(setPitch <= -50 && setPitch > -55){
          px = -50;
        } else if(setPitch <= -55 && setPitch > -60){
          px = -55;
        } else if(setPitch <= -60 && setPitch > -65){
          px = -60;
        } else if(setPitch <= -65 && setPitch > -70){
          px = -65;
        } else if(setPitch <= -70 && setPitch > -75){
          px = -70;
        } else if(setPitch <= -75 && setPitch > -80){
          px = -75;
        } else if(setPitch <= -80 && setPitch > -85){
          px = -80;
        } else if(setPitch <= -85 && setPitch > -90){
          px = -85;
        } else if(setPitch <= -90){
          px = -90;
        }
        //Set Camber Variables
        if(setCamber > 0 && setCamber < 5){
          py = 0;
        } else if(setCamber >= 5 && setCamber < 10){
          py = 5;
        } else if(setCamber >= 10 && setCamber < 15){
          py = 10;
        } else if(setCamber >= 15 && setCamber < 20){
          py = 15;
        } else if(setCamber >= 20 && setCamber < 25){
          py = 20;
        } else if(setCamber >= 25 && setCamber < 30){
          py = 25;
        } else if(setCamber >= 30 && setCamber < 35){
          py = 30;
        } else if(setCamber >= 35 && setCamber < 40){
          py = 35;
        } else if(setCamber >= 40 && setCamber < 45){
          py = 40;
        } else if(setCamber >= 45 && setCamber < 50){
          py = 45;
        } else if(setCamber >= 50 && setCamber < 55){
          py = 50;
        } else if(setCamber >= 55 && setCamber < 60){
          py = 55;
        } else if(setCamber >= 60 && setCamber < 65){
          py = 60;
        } else if(setCamber >= 65 && setCamber < 70){
          py = 65;
        } else if(setCamber >= 70 && setCamber < 75){
          py = 70;
        } else if(setCamber >= 75 && setCamber < 80){
          py = 85;
        } else if(setCamber >= 80 && setCamber < 85){
          py = 80;
        } else if(setCamber >= 85 && setCamber < 90){
          py = 85;
        } else if(setCamber >= 90){
          py = 90;
        }

        else if(setCamber < 0 && setCamber > -5){
          py = 0;
        } else if(setCamber <= -5 && setCamber > -10){
          py = -5;
        } else if(setCamber <= -10 && setCamber > -15){
          py = -10;
        } else if(setCamber <= -15 && setCamber > -20){
          py = -15;
        } else if(setCamber <= -20 && setCamber > -25){
          py = -20;
        } else if(setCamber <= -25 && setCamber > -30){
          py = -25;
        } else if(setCamber <= -30 && setCamber > -35){
          py = -30;
        } else if(setCamber <= -35 && setCamber > -40){
          py = -35;
        } else if(setCamber <= -40 && setCamber > -45){
          py = -40;
        } else if(setCamber <= -45 && setCamber > -50){
          py = -45;
        } else if(setCamber <= -50 && setCamber > -55){
          py = -50;
        } else if(setCamber <= -55 && setCamber > -60){
          py = -55;
        } else if(setCamber <= -60 && setCamber > -65){
          py = -60;
        } else if(setCamber <= -65 && setCamber > -70){
          py = -65;
        } else if(setCamber <= -70 && setCamber > -75){
          py = -70;
        } else if(setCamber <= -75 && setCamber > -80){
          py = -75;
        } else if(setCamber <= -80 && setCamber > -85){
          py = -80;
        } else if(setCamber <= -85 && setCamber > -90){
          py = -85;
        } else if(setCamber <= -90){
          py = -90;
        }
      variablesSet = false;
      resizeMap();
      }
      resizeMap();

      var newGamma = (event.gamma + 90 - (px)).toFixed(1); 
      var newBeta = (event.beta - (py)).toFixed(1); 


      if(beta!=null || gamma!=null) {
        

        dataGamma.innerHTML = 'Pitch: ' + newGamma;
        dataBeta.innerHTML = 'Camber: ' + newBeta;

        dataGammaMenu.innerHTML = 'Pitch: ' + setPitch;
        dataBetaMenu.innerHTML = 'Camber: ' + setCamber;
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

          dataGammaMenu.style.webkitTransform = 'rotate('+gamma+'deg)'; 
          dataGammaMenu.style.mozTransform = 'rotate('+gamma+'deg)';          
          dataBetaMenu.style.webkitTransform = 'rotate('+beta+'deg)'; 
          dataBetaMenu.style.mozTransform = 'rotate('+beta+'deg)';

                var EditForm = '<p><div class="marker-edit">'+
    '<form action="ajax-save.php" method="POST" name="SaveMarker" id="SaveMarker">'+
    '<label for="pName"><span>Place Name :</span><input type="text" name="pName" class="save-name" placeholder="Enter Title" maxlength="40" /></label>'+
    '<label for="pDesc"><span>Description :</span><textarea name="pDesc" class="save-desc" placeholder="Enter Address" maxlength="150"></textarea></label>'+
    '<label for="pType"><span>Type :</span> <select name="pType" class="save-type"><option value="restaurant">Rastaurant</option><option value="bar">Bar</option>'+
    '<option value="house">House</option></select></label>'+
    '</form>'+
    '</div></p><button name="save-marker" class="save-marker">Save Marker Details</button>';
      

        // setCamber = beta;
        // setPitch = gamma;

        // if(variableSet){
        //   setCamber = setCamber;
        //   setPitch = setPitch;
        // } else {
        //   setCamber = beta;
        //   setPitch = gamma;
        // }

          // newBetta;
      

      if(angle1 < newBeta && newBeta < 20){
        angle1 = newBeta;  
      }

      if(newBeta > 30){
        if((angle1) > newBeta){
        angle1 = 0;

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {
        
        }, 3000);

        }
      }
     
      if(angle2 < newGamma && newGamma < 20){
                angle2 = newGamma;

        
      }
      if(newGamma > 30){

        if((angle2) > newGamma){

        angle2 = 0;

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }
      if(angle3 > newBeta && newBeta > -20){
                angle3 = newBeta;

        
      }
      if(newBeta < -30){

        if((angle3) < newBeta){

        angle3 = 0;

          create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }
      if(angle4 > newGamma && newGamma > -20){
                angle4 = newGamma;

        
      }
      if(newGamma < -30){

        if((angle4) < newGamma){

        angle4 = 0;

        create_marker(pos, 'New Marker', EditForm, true, true, true, "../icons/pin_green.png");

        // alert(beta);
        var myVar=setInterval(function () {


        }, 3000);
      // if(beta >= 30 || beta <= -30){

        }
      }


      if(newBeta >= 30 || newBeta <= -30){
        document.getElementById('dataBeta').style.border = "1px solid #ff0000";
        
      } else {    
        document.getElementById('dataBeta').style.border = "1px solid #000000";
      }

      if(newGamma >= 30 || newGamma <= -30){
        document.getElementById('dataGamma').style.border = "1px solid #ff0000";
      } else {    
        document.getElementById('dataGamma').style.border = "1px solid #000000";
      }


      }, false);
    }
}
function setTilt(){
  console.log(variablesSet);

  if(setPitch > 80){
    px = 5;
  }
  variablesSet = false;
  init();
  resizeMap();
  
}



   





