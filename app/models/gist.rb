class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id
  validates :title, :user_id, presence: true

  belongs_to :user

  has_many :favorites

  def as_json(options)
    return_hash = {"id" => self.id, "title" => self.title, "user_id" => self.user_id}

    if options[:user].favorites.any? {|favorite| favorite.gist_id == self.id}
      return_hash["favorites"] = options[:user].favorites.find_by_gist_id(self.id).as_json
    else
      return_hash["favorites"] = nil
    end

    return return_hash
  end

end
