'use strict';

app.service('getData', function($http){

  this.getUsersData = function(){
    return $http.get('../../json/patients.json');
  }

  this.getDoctorsData = function(){
    return $http.get('../../json/doctors.json');
  }

  this.getCarouselData = function(){
    return $http.get('../../json/carousel.json');
  }
});
