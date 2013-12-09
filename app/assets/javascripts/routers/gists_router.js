NewAuthDemo.Routers.Gists = Backbone.Router.extend({
  initialize: function($rootEl, gists) {
    this.$rootEl = $rootEl;
    this.gists = gists;
  },

  routes: {
    "": "index",
    "gists": "index",
    "gists/:id": "show"
  },

  index: function() {
    this.$rootEl.html("")

    var indexView = new NewAuthDemo.Views.GistsIndex({
      collection: this.gists
    });

    this.$rootEl.html(indexView.render().$el);
  },

  show: function (id) {
    console.log("in show")
    this.$rootEl.html("")
    var model = this.gists.get(id);

    var showView = new NewAuthDemo.Views.GistsDetailView({
      model: model
    });

    this.$rootEl.html(showView.render().$el);
  }

});
