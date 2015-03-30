
/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  handleClickSettings: function(id) {
    console.log("hello");

    if (menuOn) {
      document.getElementById('menulist').style.left = "-10%";
        menuOn = false;
      //intimap();
    } else {
      document.getElementById('menulist').style.left = "10%";
        menuOn = true;
    }
    
  },
  handleClick1: function(id) {
    console.log("hello");

    if (mapOn) {
      document.getElementById('mapCheck').style.color = "#ff0000";
      mapOn = false;
      intimap();
    } else {
      document.getElementById('mapCheck').style.color = "#000000";
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

      // React.DOM.div({id: 'menuDiv'},null,
      //   JQueryMobileButton({id: 'menuButton',href:'#home'}, '')

      // ),
      React.DOM.div(null, React.DOM.button({className: 'menu',id: 'settings', onClick: this.handleClickSettings},'home')
        // JQueryMobileButton({id: 'menuButton',href:'#home'}, '')
        
      ),
      


      
      React.DOM.div({id:'menulist'},null,
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'mapCheck', onClick: this.handleClick1},'Map:')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'camberCheck', onClick: this.handleClick2},'Camber:')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'pitchCheck', onClick: this.handleClick3},'pitch:')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'speedCheck', onClick: this.handleClick4},'Speed:')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'altitudeCheck', onClick: this.handleClick5},'Altitude:')),
        React.DOM.p(null, React.DOM.button({className: 'checklist',id: 'directionCheck', onClick: this.handleClick6},'Direction:')),
        // React.DOM.div({id: 'dataGamma'},null),
        // React.DOM.div({id: 'dataBeta'},null),
        // React.DOM.div({id: 'speed'},null, 'speed'),
        // React.DOM.div({id: 'altitude'},null, 'altitude'),
        // React.DOM.div({id: 'direction'},null, 'direction'),



        React.DOM.div({className:'shake shake-constant shake-horizontal', id:'imageDiv'}, null,
        React.DOM.p(null, '')

        
        )
      )

    
   
    );
  }


});