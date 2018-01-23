app.directive('meuPainel', function () {

    var ddo;

    ddo = {
        restrict: "AE",
        scope: {
            titulo: '@'
        },
        transclude: true,
        templateUrl: 'partials/meu-painel.html'
    };

    return ddo;
});
