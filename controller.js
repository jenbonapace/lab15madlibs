var app = angular.module("Mod");
//recall the mod which is our container.

app.controller("controller", function($scope, ourFactory, $location) {
    console.log('ctrl is running');
    //set the input onto the scope and use the functin with the prameter of form to
    $scope.input = function(form) {
        console.log(form);
//intake data from the form and sett it onto the output pages
        ourFactory.setData(form);
        $location.path("/output");

    };

});
