var app=angular.module("Mod");

app.controller("controller2", function($scope, ourFactory) {

  $scope.output= ourFactory.anotherFunction();

});
