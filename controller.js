var app=angular.module("Mod");

app.controller("controller", function($scope, ourFactory){
  console.log('ctrl is running');
  $scope.input=function(form){
    console.log(form);

    ourFactory.ourFunction(form);
    
  };

});
