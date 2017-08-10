app.controller('weatherCtrl', ["$scope", "$http", "weatherService", function($scope, $http, weatherService) {
  $scope.formatDate = weatherService.formatDate;
  $scope.formatTemperature = weatherService.formatTemperature;
  
  $scope.searchCity = () => {
    if ($scope.city.length < 2) {
      return;
    }

    $http({
      method: "POST",
      url: "/get_city",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        city: $scope.city
      },
      transformRequest: weatherService.transformRequest
    }).then(response => {
      $scope.cities = response.data;
    });
  };

  $scope.searchWeather = function(city) {
    $http({
      method: "POST",
      url: "/get_weather",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        city: city.woeid
      },
      transformRequest: weatherService.transformRequest
    }).then(response => {
      $scope.weather = response.data;
    });
  };
}]);
