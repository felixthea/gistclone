# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(:username => "Joevice", :password => 'assword')
User.create(:username => "Joe", :password => "password")
Gist.create(:user_id => User.find_by_username("Joevice").id,
        :title => "Joevice's Gist 1")
Gist.create(:user_id => User.find_by_username("Joevice").id,
        :title => "Joevice's Gist 1")
Gist.create(:user_id => User.find_by_username("Joevice").id,
        :title => "Joevice's Gist 2")
Gist.create(:user_id => User.find_by_username("Joe").id,
        :title => "Joe Gist 1")
Favorite.create(user_id: User.first.id, gist_id: Gist.first.id)
Favorite.create(user_id: User.first.id, gist_id: Gist.last.id)