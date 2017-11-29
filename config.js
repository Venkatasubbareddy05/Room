app.config(config);
function config($routeProvider) {
    $routeProvider.when("/kitchen",{templateUrl:"templates/kitchen.html",controller:"kitchen"})
                  .when("/hall",{templateUrl:"templates/hall.html",controller:"hall"})
                  .otherwise("/kitchen",{templateUrl:"templates/kitchen.html",controller:"kitchen"});
}