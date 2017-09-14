
function truthCheck(collection, pre) {

    var alltruthy = true;

    for(var i=0; i<collection.length; i++){
        var current = collection[i][pre];
        console.log(current);

        if(istruthy(collection[i][pre]) == false){
            alltruthy = false;
        }
    }
    // Is everyone being true?
    return alltruthy;
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  

  function istruthy(obj){
      if(obj){
          return true;
      }else{
          return false;
      }
  }