/** Application page one component. */
var PageThreeContent = React.createClass({
  displayName: 'PageThreeContent',

    handleClick1: function(id) {
        console.log("hello");
        currentPage = 3;

        if (!pageThreeAnswered) {
          document.getElementById('wrong_3_1').style.color = "#ff0000";
          document.getElementById('right_3').style.color = "#00B233";
          document.getElementById('nextQ_3').style.background = "#33CCFF";
        }
        
        pageThreeAnswered = true;
      },

      handleClick2: function(id) {
        console.log("hello");
        currentPage = 3;

        if (!pageThreeAnswered) {
          document.getElementById('wrong_3_2').style.color = "#ff0000";
          document.getElementById('right_3').style.color = "#00B233";
          document.getElementById('nextQ_3').style.background = "#33CCFF";
        }

        pageThreeAnswered = true;
      },

      handleClick3: function(id) {
        console.log("hello");
        currentPage = 3;

        if (!pageThreeAnswered) {
          document.getElementById('wrong_3_3').style.color = "#ff0000";
          document.getElementById('right_3').style.color = "#00B233";
          document.getElementById('nextQ_3').style.background = "#33CCFF";
        }

        pageThreeAnswered = true;
      },

      handleClick4: function(id) {
        console.log(score);
        currentPage = 3;

        if (!pageThreeAnswered) {
          document.getElementById('right_3').style.color = "#00B233";
          document.getElementById('nextQ_3').style.background = "#33CCFF";
          score++;
          console.log(score);
        }

        pageThreeAnswered = true;
      },


  render: function() {
   return React.DOM.div({id:'header-div'},null,

       React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 

          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_active.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src})

        )
      ),
      
      React.DOM.div({id:'body'},null,
        
      
      React.DOM.p(null, 'Where is a good place to get to during an earthquake?'),
    
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_3_1', onClick: this.handleClick1},null, 'Near a window')),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_3_2', onClick: this.handleClick2},null, 'On a roof')),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_3_3', onClick: this.handleClick3},null, 'In your bed')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_3', onClick: this.handleClick4}, null,'Under a table')),
      
      React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ_3',href:'#four'}, '>')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#two'}, '<')

        )
      //)
      // );
      // return  React.DOM.div({id: 'right-col'},
      //   JQueryMobileButton({href:'#one'}, 'Last Question')
     
      // );
      )
    );
  }


});