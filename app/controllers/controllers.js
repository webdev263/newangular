/**
 * Created by maus on 11.02.17.
 */
app.controller('menuFavList', function ($scope) {
  //  $scope.isFav = false;

    $scope.listCategories = [
        {name: 'Art', popular: true},
        {name: 'Nature', popular: true},
        {name: 'Paints', popular: false},
        {name: 'Other', popular: false}];

    $scope.isFav = function (param) {
            $scope.filter = param;
    };

});


app.controller ('siteLangList', ['$scope', function($scope) {

    $scope.preferredLang = 'RB';
    $scope.availLang = [
        {name:'UA', pic:'app/pics/ua.png'},
        {name:'RU', pic:'app/pics/rus.png'},
        {name:'RB', pic:'app/pics/bel.png'}
        ];

    $scope.prefLangSelect = function(prop) {
        $scope.preferredLang = 'UA';

        //alert($scope.preferredLang);
    };

}]);


app.controller('scrollController', function($scope) {
    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

    $scope.loadMore = function() {
        var last = $scope.images[$scope.images.length - 1];
        for(var i = 1; i <= 2; i++) {
            $scope.images.push(last + i);
        }
    };
});