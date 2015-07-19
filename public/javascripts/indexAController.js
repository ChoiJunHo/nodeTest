/**
 * Created by ����ȣ on 2015-07-19.
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
        //���⿡ �̳��� ó�� ��Ʈ('/')����ÿ� �ڵ� ����Ǿ�
        //�������� �ʱ�ȭ�Ѵ�. $http.get('/search');
        //�嵥 �ݵ� �����ҵ�?
        $http.get('/search')
            .success(function(data, status, header, config){
                $scope.rows = data;
            })
            .error(function (data, status, headers, config) {
                $scope.rows = [];
            });
        //�갡 ���� �Լ���. html���� �긦 ȣ���Ҳ�! �׷� service���� ����
        //�����͸� �ܾ�ͼ� ¹ººº
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
