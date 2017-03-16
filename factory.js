var app = angular.module("Mod");

app.factory('ourFactory', function() {
    var myObj = {};

    return {
        ourFunction: function(parameter) {
            myObj = parameter;
        },
        anotherFunction: function() {
            return myObj;
        }
    }

});
