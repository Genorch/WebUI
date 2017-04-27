'use strict';

/**
 * @ngdoc function
 * @name webUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webUiApp
 */
angular.module('genorchUi')
  .controller('MainCtrl', function ($scope) {

    $scope.upload = function () {
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
