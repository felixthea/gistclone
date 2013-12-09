class GistsController < ApplicationController
  before_filter :require_current_user!

  def index
    @gists = current_user.gists
    render :json => @gists.to_json({user: current_user})
  end

end
