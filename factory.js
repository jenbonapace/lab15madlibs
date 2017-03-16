var app = angular.module("Mod");

app.factory('ourFactory', function() {
    var myObj = {};

    return {
        // Gives data to the service. from the form elements but these do not depend on the names matching but rather the position of the parameter in comparison to the funtioncs
        setData: function(form) {
            myObj = form;
        },
        // Gets the data out of the service returning the object
        getData: function() {
            return myObj;
        }
    }

});
