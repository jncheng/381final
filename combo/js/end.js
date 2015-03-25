/** Application popup page component. */
var PageResultsContent = React.createClass({
  displayName: 'PageResultsContent',

  reloadPage: function(e) {
    document.location.reload(true);
  },

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Results'),
      React.DOM.p({id: 'percentage'}, 'You got 75%, Good job. These are the answers that you got right and wrong'),
      React.DOM.p({id: 'readiness'}, 'Question 1 wrong, right answer...'),
      // React.DOM.p(null, 'Question 2 right, answer...'),
      // React.DOM.p(null, 'Question 3 right, answer...'),
      // React.DOM.p(null, 'Question 4 right, answer...'),


      //JQueryMobileButton({href: #home}, 'Show page "home"')
      JQueryMobileButton({onClick:this.reloadPage}, 'Try Again')
    );
  }
});

// Render application.
React.render(App(null), document.getElementById('content'));