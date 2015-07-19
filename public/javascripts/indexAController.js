/**
 * Created by 최준호 on 2015-07-19.
 */
var app = angular.module('indexApp', []);

function indexObject($http) {
    this.search = function (ingredients, callback) {
        $http.get('/search', {params: {ingredients: ingredients}})
            .success(function (data, status, headers, config) {
                callback(null, data);
            })
            .error(function (data, status, headers, config) {
                callback(data, {});
            });
    };
}
app.service('indexService', ['$http', indexObject]);
app.controller('indexController', ['$scope', '$http', 'indexService',
    function($scope, $http, indexService){
        //여기에 이놈이 처음 루트('/')실행시에 자동 실행되어
        //페이지를 초기화한다. $http.get('/search');
        //헌데 콜도 가능할듯?
        $http.get('/search')
            .success(function(data, status, header, config){
                $scope.rows = data;
            })
            .error(function (data, status, headers, config) {
                $scope.rows = [];
            });
        //얘가 이제 함수임. html에서 얘를 호출할꺼! 그럼 service에서 직접
        //데이터를 긁어와서 쨔쨘쨘쨘
        $scope.search = function(ingredients){
            //var newPost = {title: title, notes: notes};
            indexService.search(ingredients,
                function(err, recipes){
                    if(err){
                        $scope.rows = [];
                    }
                    else{
                        $scope.rows = recipes;
                    }
                })
        };
    }]);
