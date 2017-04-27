'use strict';

/**
 * @ngdoc service
 * @name genorchUi.uploadService
 * @description
 * # uploadService
 * Service in the genorchUi.
 */
angular.module('genorchUi')
  .service('UploadService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.handler = function (text) {
      return $http.post('/handler', text).then(function (response) {
        return response.data;
      });
    };

    this.stml = function (text) {
      return $http.post('/stml', text).then(function (response) {
        return response.data;
      });
    };

    this.atl = function (text) {
      return $http.post('/atl', text).then(function (response) {
        return response.data;
      });
    };

  });
