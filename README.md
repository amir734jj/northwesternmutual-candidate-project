# Candidate project for software engineering position at Northwestern Mutual

Backend is done using Ruby programming language and Sinatra web framework
The frontend is done using: Angular 1.x and Bootstrap

The backend will relay the weather request to destination so the front-end would not deal with CORS
The weather service is: [metaweather](https://www.metaweather.com/)

To run the application make sure to have ruby installed. Then run in the command line:

```ruby
sudo gem install bundle     # to install dependency manager
sudo bundle install         # to download and install dependencies
sudo rackup                 # to run the application
```

Demo:
https://northwesternmutual-weather-app.herokuapp.com/
