/**
 * - App
 *   |-- JQueryMobilePage (one)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageOneContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (two)
 *   |   |-- JQueryMobileHeader
 *   |   |-- JQueryMobileContent
 *   |   |   |-- PageTwoContent
 *   |   |       |-- JQueryMobileButton
 *   |   |-- JQueryMobileFooter
 *   |-- JQueryMobilePage (popup)
 *       |-- JQueryMobileHeader
 *       |-- JQueryMobileContent
 *       |   |-- PagePopUpContent
 *       |       |-- JQueryMobileButton
 *       |-- JQueryMobileFooter
 */

 /* global document, React */

'use strict';

/* overall score */
var score = 0;
var numberOfQuestions = 5;

var menuOn = false;

var mapOn = true;
var pitchOn = true;
var camberOn = true;
var speedOn = true;
var altitudeOn = true;
var directionOn = true;



/*function for adding to score*/
var addScore = function()
{
  if (currentPage==1 && !pageOneAnswered)
  {
    score++;
    console.log(score);
  }
  
};

var resetScore = function()
{
  score = 0;
  console.log(score);
};

/* returns percentage of corrent questions */
var scorePercentage = function()
{
  return (score / numberOfQuestions) * 100;

}

var turnColor = function(choiceId, color) {

  console.log("function called");

  try {

      if (color == "red")
      {
        document.getElementById(choiceId).style.background = "#ff0000";
      }

      if (color == "green")
      {
        document.getElementById(choiceId).style.background = "#00ff00"
      }

      console.log("trying");
  }

  catch(err)
  {
      console.log(err);
      console.log("page not generated");
  }
}

/**load progress img*/
var circleImg_active = new Image();
circleImg_active.src = 'progressbar/circle_white_80.png';
circleImg_active.alt = 'circleFilled';

var circleImg_inactive = new Image();
circleImg_inactive.src = 'progressbar/circle_white_40.png';
circleImg_inactive.alt = 'circleFilled';

/** Main application component. */
var App = React.createClass({
  displayName: 'App',

  render: function() {
    return React.DOM.div({className:'app'},
      JQueryMobilePage({id:'home'}, PageHomeContent(null)),
      JQueryMobilePage({id:'menu'}, PageOneContent(null))
      
    );
  }
});

/** jQuery Mobile button component. */
var JQueryMobileButton = React.createClass({
  displayName: 'JQueryMobileButton',

  getDefaultProps: function() {
    return {className:'ui-btn ui-shadow ui-corner-all'};
  },

  render: function() {
    return React.DOM.p(null,
      React.DOM.a(this.props, this.props.children)
    );
  }
});

/** jQuery Mobile page content component. */
var JQueryMobileContent = React.createClass({
  displayName: 'JQueryMobileContent',

  render: function() {
    return React.DOM.div({role:'main', className:'ui-content'},
      this.props.children
    );
  }
});

/** jQuery Mobile footer component. */
// var JQueryMobileFooter = React.createClass({
//   displayName: 'JQueryMobileFooter',

//   render: function() {
//     return React.DOM.div({'data-role':'footer'},
//       React.DOM.h4(null, 'Page footerr')
//     );
//   }
// });

/** jQuery Mobile header component. */
var JQueryMobileHeader = React.createClass({
  displayName: 'JQueryMobileHeader',

  render: function() {
    return React.DOM.div({'data-role':'header', 'data-theme':this.props.headerTheme},
      React.DOM.h1(null, this.props.title)
    );
  }
});

/** jQuery Mobile page component. */
var JQueryMobilePage = React.createClass({
  displayName: 'JQueryMobilePage',

  getDefaultProps: function() {
    return {'data-role':'page', 'data-theme':'a', headerTheme:'a'};
  },

  render: function() {
    return this.transferPropsTo(React.DOM.div(null,
      // JQueryMobileHeader({title:'Question ' }),
      JQueryMobileContent(null, this.props.children)
      // JQueryMobileFooter(null)
    ));
  }
});

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
    altitude.innerHTML="Altitude: " + (position.coords.altitude + 0).toFixed(1) + "meters";
    speed.innerHTML="Speed: " + position.coords.speed.toFixed(1) + "m/s";  
    direction.innerHTML = "Direction: " + position.coords.heading;  
}

/** Application page home component. */
var PageHomeContent = React.createClass({
  displayName: 'PageHomeContent',


    handleClickSettings: function(id) {
    console.log("hello");

    if (menuOn) {
      document.getElementById('menulist').style.left = "-40%";

        menuOn = false;
      //intimap();
    } else {
      document.getElementById('menulist').style.left = "-3.5%";
        menuOn = true;
    }
    
  },
  handleClick1: function(id) {
    console.log("hello");

    if (mapOn) {
      on = 2;

      document.getElementById('mapCheck').style.color = "#ff0000";
      mapOn = false;
      // intimap();
    } else {
      document.getElementById('mapCheck').style.color = "#000000";
      on = 1;
      mapOn = true;
      
    }
    
  },

  handleClick2: function(id) {
    console.log("hello");

    if (camberOn) {
      document.getElementById('camberCheck').style.color = "#ff0000";
      camberOn = false;
    } else {
      document.getElementById('camberCheck').style.color = "#000000";
      camberOn = true;
    }
    
  },

  handleClick3: function(id) {
    console.log("hello");

    if (pitchOn) {
      document.getElementById('pitchCheck').style.color = "#ff0000";
      pitchOn = false;
    } else {
      document.getElementById('pitchCheck').style.color = "#000000";
      pitchOn = true;
    }
    
  },
  
  handleClick4: function(id) {
    console.log("hello");

    if (speedOn) {
      document.getElementById('speedCheck').style.color = "#ff0000";
      speedOn = false;
    } else {
      document.getElementById('speedCheck').style.color = "#000000";
      speedOn = true;
    }
    
  },

  handleClick5: function(id) {
    console.log("hello");

    if (altitudeOn) {
      document.getElementById('altitudeCheck').style.color = "#ff0000";
      altitudeOn = false;
    } else {
      document.getElementById('altitudeCheck').style.color = "#000000";
      altitudeOn = true;
    }
    
  },

  handleClick6: function(id) {
    console.log("hello");

    if (directionOn) {
      document.getElementById('directionCheck').style.color = "#ff0000";
      directionOn = false;
    } else {
      document.getElementById('directionCheck').style.color = "#000000";
      directionOn = true;
    }
    
  }, 



  render: function() {
    return React.DOM.div({id:'body-div'},null,
      React.DOM.div({id:'homeHeader'}, null,

        React.DOM.h1(null, 'Hill Trackr')
      ),

      

      
      
      React.DOM.div({id:'body'},null,
        React.DOM.div({id: 'map-canvas'},null),
        React.DOM.div({id: 'dataGamma'},null),
        React.DOM.div({id: 'dataBeta'},null),
        React.DOM.div({id: 'speed'},null, 'speed'),
        React.DOM.div({id: 'altitude'},null, 'altitude'),
        React.DOM.div({id: 'direction'},null, 'direction'),



        React.DOM.div({className:'shake shake-constant shake-horizontal', id:'imageDiv'}, null,
        React.DOM.p(null, '')

        
        )
      ),

      React.DOM.div({id:'menulist'},null,
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'mapCheck', onClick: this.handleClick1},'Map: ', mapVar)),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'camberCheck', onClick: this.handleClick2},'Camber')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'pitchCheck', onClick: this.handleClick3},'pitch')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'speedCheck', onClick: this.handleClick4},'Speed')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'altitudeCheck', onClick: this.handleClick5},'Altitude')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'directionCheck', onClick: this.handleClick6},'Direction')),
        // React.DOM.div({id: 'dataGamma'},null),
        // React.DOM.div({id: 'dataBeta'},null),
        // React.DOM.div({id: 'speed'},null, 'speed'),
        // React.DOM.div({id: 'altitude'},null, 'altitude'),
        // React.DOM.div({id: 'direction'},null, 'direction'),



        React.DOM.div({className:'shake shake-constant shake-horizontal', id:'imageDiv'}, null,
        React.DOM.p(null, '')

        
        )
      ),

      React.DOM.div(null, React.DOM.button({className: 'menu',id: 'settings', onClick: this.handleClickSettings},'home')
        // JQueryMobileButton({id: 'menuButton',href:'#home'}, '')
        
      )
   
    );
  }
});