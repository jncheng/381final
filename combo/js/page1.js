
/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  

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



        React.DOM.p(null, '')

        
        )
     
        
      )
   
    );
  }


});