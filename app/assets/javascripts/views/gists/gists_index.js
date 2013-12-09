NewAuthDemo.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

  events: {
    "click button.favorite": "makeFavorite",
    "click button.un-favorite": "unfavorite"
  },

  makeFavorite: function (event) {
    event.preventDefault();
    var that = this;
    var modelId = $(event.target).attr('data-id')
    var favorite = new NewAuthDemo.Models.Favorite({
      gist_id: modelId
    });

    favorite.save(
      { success: function() {
        $(event.target).closest('li').find('.un-favorite').removeClass('hidden');
        $(event.target).addClass('hidden');
      },
        error: function () {
          console.log("Save unsuccessful")
        }
      }
    );
  },

  unfavorite: function (event) {
    event.preventDefault();
    var that = this;
    var modelId = $(event.target).attr('data-id');
    var favorite = that.collection.get(modelId).get("favorites")
    console.log($(event.target).closest('li').find('.favorite'))

    favorite.destroy(
      { success: function() {
        console.log("in success callback")
        $(event.target).closest('li').find('.favorite').removeClass('hidden');
        $(event.target).addClass('hidden');
      },
        error: function () {
          console.log("Destroy unsuccessful")
        }
      }
    );
  },

  render: function () {
    var that = this;
    that.$el.html(that.template());

    that.collection.each(function (model) {
      var modelView = new NewAuthDemo.Views.GistsDetailView({model: model});
      var $li = $('<li></li>')
      var viewContents = $li.append(modelView.render().$el.html());
      that.$el.append(viewContents);
    })

    return that;
  }

});
