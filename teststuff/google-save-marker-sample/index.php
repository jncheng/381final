<!DOCTYPE html>
<html>
<head>
<title>Google Map</title>
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>

<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
 
<!-- <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBzHlM5XoEK5Z4KNmpXm-16CdbJx8PGQ4A"></script>
-->
<script type="text/javascript">

</script>

<style type="text/css">
h1.heading{padding:0px;margin: 0px 0px 10px 0px;text-align:center;font: 18px Georgia, "Times New Roman", Times, serif;}

/* width and height of google map */
#google_map {width: 90%; height: 500px;margin-top:0px;margin-left:auto;margin-right:auto;}

/* Marker Edit form */
.marker-edit label{display:block;margin-bottom: 5px;}
.marker-edit label span {width: 100px;float: left;}
.marker-edit label input, .marker-edit label select{height: 24px;}
.marker-edit label textarea{height: 60px;}
.marker-edit label input, .marker-edit label select, .marker-edit label textarea {width: 60%;margin:0px;padding-left: 5px;border: 1px solid #DDD;border-radius: 3px;}

/* Marker Info Window */
h1.marker-heading{color: #585858;margin: 0px;padding: 0px;font: 18px "Trebuchet MS", Arial;border-bottom: 1px dotted #D8D8D8;}
div.marker-info-win {max-width: 300px;margin-right: -20px;}
div.marker-info-win p{padding: 0px;margin: 10px 0px 10px 0;}
div.marker-inner-win{padding: 5px;}
button.save-marker, button.remove-marker{border: none;background: rgba(0, 0, 0, 0);color: #00F;padding: 0px;text-decoration: underline;margin-right: 10px;cursor: pointer;
}
</style>
</head>
<body>             
<h1 class="heading">My Google Map</h1>
<div align="center">Right Click to Drop a New Marker</div>
<div id="google_map"></div>
</body>
</html>