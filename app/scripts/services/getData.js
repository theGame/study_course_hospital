'use strict';

app.service('getData', function($http){

  this.getUsersData = function(){
    return $http.get('/patients');
  }

  this.getDoctorsData = function(){
    return $http.get('/doctors');
  }

  this.getCarouselData = function(){
    return $http.get('/carousel');
  }
});
