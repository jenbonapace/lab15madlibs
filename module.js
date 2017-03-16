var app=angular.module("Mod", ['ngRoute']);

//config goes here.

app.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when( "/form", {
controller:"controller",
templateUrl:"form.html"
  })
  .when("/output", {
    controller: "controller2",
  
    templateUrl:"output.html"
})
.otherwise({redirectTo: "/"});
$locationProvider.hashPrefix("");
});
