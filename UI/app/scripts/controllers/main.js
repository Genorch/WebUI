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
      UploadService.handler($scope.handler_source).then(function (data){
        console.log(data);
      });
    };

    $scope.atl = function () {
      UploadService.handler($scope.atl_source).then(function (data){
        console.log(data);
      });
    };

    $scope.stml = function () {
      UploadService.handler($scope.stml_source).then(function (data){
        console.log(data);
      });
    };

    $scope.fromFile = function () {
      var file = document.getElementById('file').files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        $scope.source = e.target.result;
      };
      if (file) {
        reader.readAsText(file);
      }
    };
  });
