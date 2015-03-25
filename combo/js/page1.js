
/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  handleClick1: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_1').style.color = "#ff0000";
      document.getElementById('right_1').style.color = "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";
    }
    
    pageOneAnswered = true;
  },

  handleClick2: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_2').style.color = "#ff0000";
      document.getElementById('right_1').style.color = "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";
    }

    pageOneAnswered = true;
  },

  handleClick3: function(id) {
    console.log("hello");
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('wrong_1_3').style.color = "#ff0000";
      document.getElementById('right_1').style.color= "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";
    }

    pageOneAnswered = true;
  },

  handleClick4: function(id) {
    console.log(score);
    currentPage = 1;

    if (!pageOneAnswered) {
      document.getElementById('right_1').style.color = "#00B233";
      document.getElementById('nextQ_1').style.background = "#33CCFF";
      score++;
      console.log(score);
    }

    pageOneAnswered = true;
  },


  render: function() {
    return React.DOM.div({id:'header-div'},null,
      React.DOM.div({id:'progress'}, null,

        //React.DOM.h1(null, 'O o o o o ')

        React.DOM.h1(null, 
          

            React.DOM.img({className: 'progressImg', src: circleImg_active.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}),
            React.DOM.img({className: 'progressImg', src: circleImg_inactive.src}) 
        )
      ),
      
      
      React.DOM.div({id:'body'},null,

        React.DOM.p(null, 'Which belongs in an earthquake emergency supplies package?'),

       
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_1_1', onClick: this.handleClick1},'Meat loaf')),
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_1_2', onClick: this.handleClick2},null, 'Watermelon')),
        
         /* right answer*/
        React.DOM.p({onClick: addScore}, React.DOM.button({className: 'answers',id: 'right_1', onClick: this.handleClick4},null, 'Trail mix')),
       
        React.DOM.p(null, React.DOM.button({className: 'answers',id: 'wrong_1_3', onClick: this.handleClick3},null, 'Pineapple')),

        React.DOM.h3(null, ''),
        //return React.DOM.div(null,
        // return React.DOM.div({id: 'left-col'}, 
        React.DOM.div({id: 'right-col'},null,
          JQueryMobileButton({id: 'nextQ_1',href:'#two'}, '>')
        ),
        React.DOM.div({id: 'left-col'},null,
          JQueryMobileButton({id: 'homeQ',href:'#home'}, 'Home')

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