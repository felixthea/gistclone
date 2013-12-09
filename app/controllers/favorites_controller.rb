class FavoritesController < ApplicationController
  before_filter :require_current_user!

  def index
  end

  def create
    favorite = Favorite.new()
    favorite[:gist_id] = params[:gist_id]
    favorite[:user_id] = current_user.id
    if favorite.save
      head :ok
    else
      head 422
    end
  end

  def destroy
    favorite = Favorite.find_by_gist_id_and_user_id(params[:gist_id], current_user.id)
    if favorite.destroy
      render :json => favorite
    else
      head 422
    end
  end

end
