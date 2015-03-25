/** Application page five component. */
var PageFiveContent = React.createClass({
  displayName: 'PageFiveContent',

    handleClick1: function(id) {
        console.log("hello");
        currentPage = 5;

        if (!pageFiveAnswered) {
          document.getElementById('wrong_5_1').style.color = "#ff0000";
          document.getElementById('right_5').style.color = "#00B233";
          document.getElementById('nextQ_5').style.background = "#33CCFF";
        }
        
        pageFiveAnswered = true;
      },

      handleClick2: function(id) {
        console.log("hello");
        currentPage = 5;

        if (!pageFiveAnswered) {
          document.getElementById('wrong_5_2').style.color = "#ff0000";
          document.getElementById('right_5').style.color = "#00B233";
          document.getElementById('nextQ_5').style.background = "#33CCFF";
        }

        pageFiveAnswered = true;
      },

      handleClick3: function(id) {
        console.log("hello");
        currentPage = 5;

        if (!pageFiveAnswered) {
          document.getElementById('wrong_5_5').style.color = "#ff0000";
          document.getElementById('right_5').style.color = "#00B233";
          document.getElementById('nextQ_5').style.background = "#33CCFF";
        }

        pageFiveAnswered = true;
      },

      handleClick4: function(id) {
        console.log(score);
        currentPage = 5;

        if (!pageFiveAnswered) {
          document.getElementById('right_5').style.color = "#00B233";
          document.getElementById('nextQ_5').style.background = "#33CCFF";
          score++;
          console.log(score);
        }

        pageFiveAnswered = true;
      },

  updatePercentage: function(e) {
    document.getElementById("percentage").innerHTML = "You got " + scorePercentage() + "% of the questions right.";
    
    //win
    if (scorePercentage() >= 50)
    {
      document.getElementById("readiness").innerHTML = "You are prepared for an earthquake!";
    }

    //lose
    else
    {
      document.getElementById("readiness").className = "shake shake-constant shake-hard";
      document.getElementById("readiness").innerHTML = "You are NOT prepared!";
    }

  },

  render: function() {
    return React.DOM.div({id:'header-div'},null,
      React.DOM.div({id:'progress'}, null,
      React.DOM.h1(null, 

          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
          React.DOM.img({className: 'progressImg', src: circleImg_active.src})

        )
      ),
      
      React.DOM.div({id:'body'},null,
        
      React.DOM.p(null, 'which phone number should you call if there is an earthquake?'),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_5_1', onClick: this.handleClick1},null, 'Emergency Fire 9-1-1')),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_5_2', onClick: this.handleClick2},null, 'Emergency Police 9-1-1')),
      React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_5_3', onClick: this.handleClick3},null, 'Local News 604-608-2868')),

      /* right answer*/
      React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_5', onClick: this.handleClick4}, null,'Stormline 1-800-463-9463')),



      React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ_5', href:'#results', 'data-rel':'dialog', 'data-transition':'pop', onClick: this.updatePercentage}, 'Finish')

        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'lastQ',href:'#four'}, '<')

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
   