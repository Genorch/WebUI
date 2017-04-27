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

    this.upload = function (text) {
      return $http.post('/upload', text).then(function (response) {
        return response.data;
      });
    };

  });
