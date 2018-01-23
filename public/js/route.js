app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/fotos'});

    $routeProvider
        .when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'fotosController'
        })
        .when('/fotos/new', {
            templateUrl: 'partials/cadastrar-foto.html'
        });

});