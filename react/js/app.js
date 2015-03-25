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

var currentPage = 0;
var pageOneAnswered = false;
var pageTwoAnswered = false;
var pageThreeAnswered = false;
var pageFourAnswered = false;
var pageFiveAnswered = false;


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
      JQueryMobilePage({id:'one'}, PageOneContent(null)),
      JQueryMobilePage({id:'two'}, PageTwoContent(null)),
      JQueryMobilePage({id:'three'}, PageThreeContent(null)),
      JQueryMobilePage({id:'four'}, PageFourContent(null)),
      JQueryMobilePage({id:'five'}, PageFiveContent(null)),
      JQueryMobilePage({id:'results', headerTheme:'b'}, PageResultsContent(null))
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

/** Application page home component. */
var PageHomeContent = React.createClass({
  displayName: 'PageHomeContent',

  render: function() {
    return React.DOM.div({id:'body-div'},null,
      React.DOM.div({id:'homeHeader'}, null,

        React.DOM.h1(null, 'QuakeR')
      ),

      
      
      
      React.DOM.div({id:'body'},null,

      
        React.DOM.p({id: 'bigone1'},null, 'Are you ready for'),
        React.DOM.p({id: 'bigone2'},null, 'THE BIG ONE?'),
        React.DOM.p({id: 'bigone3'},null, 'Take the quiz and find out!'),
       
        JQueryMobileButton({href:'#one'}, 'Begin quiz'),

              React.DOM.div({className:'shake shake-constant shake-horizontal', id:'imageDiv'}, null,
        React.DOM.p(null, '')

        
      )
      )
    );
  }
});