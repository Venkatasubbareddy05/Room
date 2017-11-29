var app = angular.module("app",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
console.log("iam in state provider");
    var kitchenState = {
        name: 'kitchen',
        url: '/kitchen',
        template: '<h3>Kitchen view</h3>'
    }

    var hallState = {
        name: 'hall',
        url: '/hall',
        template: '<h3>Hall view</h3>'
    }

    $urlRouterProvider.otherwise('/kitchen');
    $stateProvider
        .state(kitchenState)
        .state(hallState)
        .state('bathroom', {
           url: '/bathroom',
              template: '<h3>bath room view</h3>'
        });
});
