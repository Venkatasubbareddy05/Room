app.config(config);
function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("kitchen",{url:"/kitchen",
                                    templateUrl:"templates/kitchen.html",
                                    controller:"kitchen"})
        .state("hall",{url:"/hall",templateUrl:"templates/hall.html",controller:"hall"});
    $urlRouterProvider.otherwise("/kitchen");
}



/*

    myApp.config(function($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        }

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    });
*/
