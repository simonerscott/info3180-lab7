// Your JavaScript Code here
const app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) 
{
    $scope.urlData = [];
    
    $http.get("/api/thumbnails")
    .then(function(response)
    {
        let urlData = response.data;
        $scope.urlData = urlData.thumbnails.thumbnails;
    });
    
    
}); 

