var packages = {
  modulesToLoad: {
    ngWeatherCtrl: ["ngWeatherApp", "ngWeatherService"]
  },
  pathPrefix: "js/"
};

function flattenPackageDependencyList() {
  $.ajaxSetup({
    cache: true
  });

  var retVal = [];

  Object.keys(packages.modulesToLoad).map(moduleName => {
    retVal = retVal.concat(packages.modulesToLoad[moduleName]);
    retVal.push(moduleName);
  });

  return [...new Set(retVal)]; // make sure we are not loading duplicate scripts
};

flattenPackageDependencyList().map(moduleName => {
  $.getScript(packages.pathPrefix + moduleName + ".js");
});
