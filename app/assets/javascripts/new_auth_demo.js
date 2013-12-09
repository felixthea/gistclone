window.NewAuthDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content");
    var gists = new NewAuthDemo.Collections.Gists();

    gists.fetch({
      success: function() {
        new NewAuthDemo.Routers.Gists($rootEl, gists)
        Backbone.history.start();
      },
      error: function() {
        console.log("Fetch failed");
      }
    });
  }
};

$(document).ready(function(){
  NewAuthDemo.initialize();
});

