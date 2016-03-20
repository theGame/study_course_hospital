'use strict';

app.filter('cutBracket', function(noPatient){
  return function( cutBracket ){
    cutBracket = cutBracket.replace("\[", "");
    cutBracket = cutBracket.replace("\]", "");

    if (!cutBracket){
      cutBracket = noPatient;
    }

    return cutBracket;
  }
});
