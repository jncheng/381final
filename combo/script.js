var backgroundColor = '#B3E5FC'

init();

function init() {


  
  //Find our div containers in the DOM
  var dataContainerOrientation = document.getElementById('dataGamma', 'dataBeta');
  var dataContainerMotion = document.getElementById('dataContainerMotion');

  //Check for support for DeviceOrientation event
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      var alpha = event.alpha;
      var beta = event.beta.toFixed(1);
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

    }, false);
  }
}   



var canvas = document.getElementById("myCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var backgroundColor = '#B3E5FC'

var context = canvas.getContext('2d');
var radius = canvas.width/4;
var circleSize = canvas.width/6;

var ballColour = '#9575CD';

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var lowerTextArea = canvas.height/20 * 18;

//touch target size
var targetSize = canvas.width/15;

var fontSizeText = Math.floor(canvas.width / 15);
var fontStyleText = fontSizeText.toString() + "px Arial";

var currentTime;

initmap();


function initmap() {
  if(mapOn){
  context.fillStyle = backgroundColor;
  context.fillRect ( 0 , 0 , canvas.width, canvas.height );
  //Find our div containers in the DOM
  var dataContainerOrientation = document.getElementById('dataContainerOrientation');
  var dataContainerMotion = document.getElementById('dataContainerMotion');

  //Check for support for DeviceOrientation event
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      var alpha = event.alpha;
      var beta = event.beta;
      var gamma = event.gamma;
      var textFontSize = Math.floor(canvas.width / 20);
      var text = textFontSize.toString() + "px Arial";
      context.strokeStyle="black";
      context.fillStyle = "black";


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
} else {
  
}
drawCircle(centerX, centerY, 1);

function drawCircle(x, y, num)
{
      context.shadowColor = '#444444';
      context.shadowBlur = 20;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 10;

      // context.beginPath();
      // context.arc(x, y, circleSize/2, 0, 2 * Math.PI, false);
      // context.fillStyle = ballColour;
      // context.fill();
      // context.lineWidth = 5;
      // context.closePath();
      //context.strokeStyle = '#ffffff';
      //context.stroke();
      
      //cancel shadow
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      //text inside ball
      var textFontSize = Math.floor(canvas.width / 20);
      var text = textFontSize.toString() + "px Arial";

      context.font = text;

      context.strokeStyle="black";
      context.fillStyle = "black";

      context.fillText(num, x, y + circleSize/5);
}

function drawRect(x, y)
{
      

      context.beginPath();
      context.arc(x, y, 50, 0, 2 * Math.PI, false);
      context.lineWidth = 5;
      context.closePath();
      //context.strokeStyle = '#ffffff';
      //context.stroke();
      
      //cancel shadow
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      // context.fillText(timeArray[0] + ":" + timeArray[1], x - canvas.width/20, y + canvas.width/40);



      
}




