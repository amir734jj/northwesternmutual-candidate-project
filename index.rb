require 'rubygems'
require 'sinatra'
require 'rest-client'
require 'json'

# set :port, 80
# set :bind, '0.0.0.0'
set :public_folder, Proc.new { File.join(root, "public") }

get "/" do
  erb :weather
end

post "/get_city" do
  if params[:city]
    content_type :json
    RestClient.get('https://www.metaweather.com/api/location/search/?query=' + params[:city])
  end
end

post "/get_weather" do
  if params[:city]
    content_type :json
    RestClient.get('https://www.metaweather.com/api/location/' + params[:city])
  end
end
