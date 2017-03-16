var app=angular.module("Mod", ['ngRoute']);
//module creation with routing capabilities

//config goes here.which tells you what and how the pages fit together

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
