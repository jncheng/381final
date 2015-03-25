var x = document.getElementById("altitude");
var a = document.getElementById("speed");
var h = document.getElementById('direction');
getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";}
    }
    
function showPosition(position) {
    x.innerHTML="Altitude: " + position.coords.altitude.toFixed(1) + "meters";
    a.innerHTML="Speed: " + position.coords.speed.toFixed(1) + "m/s";  
    direction.innerHTML = "Direction: " + position.coords.heading;  
}