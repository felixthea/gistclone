NewAuthDemo.Views.GistsDetailView = Backbone.View.extend({
  template: JST['gists/show'],

  render: function () {
    var that = this;
    var renderedContent = that.template({
      model: that.model,
      favorite: that.isFavorite()
    });


    that.$el.html(renderedContent);
    return that;
  },

  isFavorite: function() {
    var gist = this.model

    if (gist.get("favorites") === "undefined") {
      return false;
    } else {
      return true;
    }
  }
})