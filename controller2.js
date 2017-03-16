var app = angular.module("Mod");

app.controller("controller2", function($scope, ourFactory) {
    console.log('ctrl2 is running');

      // put the output from the service on the $scope.
    $scope.output = ourFactory.getData();
    //this function is () because 
});
