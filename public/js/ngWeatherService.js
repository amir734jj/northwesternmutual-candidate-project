app.service('weatherService', function() {
  this.transformRequest = function(obj) {
    var str = [];
    for (var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  };

  this.formatDate = function(dateStr) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateStr);
    var dayName = days[d.getDay()];
    return dayName;
  };

  this.formatTemperature = function(temperatureVal) {
    return Math.round(temperatureVal);
  };
});
