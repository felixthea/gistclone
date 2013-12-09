NewAuthDemo.Models.Gist = Backbone.Model.extend({
  parse: function(resp) {
    console.log(resp["favorites"])
    resp["favorites"] = new NewAuthDemo.Models.Favorite(resp["favorites"]);
    return resp
  }
});
