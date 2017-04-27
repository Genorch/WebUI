'use strict';

/**
 * @ngdoc function
 * @name webUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webUiApp
 */
angular.module('genorchUi')
  .controller('MainCtrl', function ($scope, UploadService) {

    $scope.handler = function () {
      UploadService.handler($scope.handlerSource).then(function (data){
        console.log(data);
      });
    };

    $scope.atl = function () {
      UploadService.handler($scope.atlSource).then(function (data){
        console.log(data);
      });
    };

    $scope.stml = function () {
      UploadService.handler($scope.stmlSource).then(function (data){
        console.log(data);
      });
    };

    $scope.fromFile = function (name) {
      var file = document.getElementById(name + '_file').files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        $scope[name + 'Source'] = e.target.result;
      };
      if (file) {
        reader.readAsText(file);
      }
    };
  });
