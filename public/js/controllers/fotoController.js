app.controller('fotosController', function ($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('/v1/fotos').success(function (r) {
        $scope.fotos = r;
    }).error(function (rr) {
        console.log(rr);
    });

    // var promisse = $http.get('/v1/fotos');
    // promisse.then(function (r) {
    //     $scope.fotos = r.data;
    // }).catch(function (rr) {
    //     console.log(rr);
    // })

});