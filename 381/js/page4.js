/** Application page four component. */
var PageFourContent = React.createClass({
  displayName: 'PageFourContent',

    handleClick1: function(id) {
        console.log("hello");
        currentPage = 4;

        if (!pageFourAnswered) {
          document.getElementById('wrong_4_1').style.color = "#ff0000";
          document.getElementById('right_4').style.color = "#00B233";
          document.getElementById('nextQ_4').style.background = "#33CCFF";
        }
        
        pageFourAnswered = true;
      },

      handleClick2: function(id) {
        console.log("hello");
        currentPage = 4;

        if (!pageFourAnswered) {
          document.getElementById('wrong_4_2').style.color = "#ff0000";
          document.getElementById('right_4').style.color = "#00B233";
          document.getElementById('nextQ_4').style.background = "#33CCFF";
        }

        pageFourAnswered = true;
      },

      handleClick3: function(id) {
        console.log("hello");
        currentPage = 4;

        if (!pageFourAnswered) {
          document.getElementById('wrong_4_3').style.color = "#ff0000";
          document.getElementById('right_4').style.color = "#00B233";
          document.getElementById('nextQ_4').style.background = "#33CCFF";
        }

        pageFourAnswered = true;
      },

      handleClick4: function(id) {
        console.log(score);
        currentPage = 4;

        if (!pageFourAnswered) {
          document.getElementById('right_4').style.color = "#00B233";
          document.getElementById('nextQ_4').style.background = "#33CCFF";
          score++;
          console.log(score);
        }

        pageFourAnswered = true;
      },

  render: function() {
    return React.DOM.div({id:'header-div'},null,
       React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 

          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_active.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src})


        )
      ),
      
      
      React.DOM.div({id:'body'},null,
        
      
      React.DOM.p(null, 'How should you pack your extra batteries?'),
    
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_4_1', onClick: this.handleClick1},null, 'Together in Tin foil')),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_4_2', onClick: this.handleClick2},null, 'Together in a plastic bag')),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_4_3', onClick: this.handleClick3},null, 'Seperated in Tin Foil')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_4', onClick: this.handleClick4}, null,'Seperated in plastic bags')),
      React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ_4',href:'#five'}, '>')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#three'}, '<')

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