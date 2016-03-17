'use strict';

app.filter('cutBracket', function(){
  return function( cutBracket ){
    //$scope.reg = /([])/;
    cutBracket.replace("\[", "");
    console.log(cutBracket);
    cutBracket.replace("\]", "");
    console.log(cutBracket);

    //need to fix that filter
  }
});
