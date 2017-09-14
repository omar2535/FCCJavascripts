
function steamrollArray(arr) {
    var finalarr = [];

    console.log(arr[0]);   
    console.log(arr[1]);


    for(var i=0; i<arr.length; i++){
        console.log(finalarr);
        if(Array.isArray(arr[i]) == false){
            finalarr.push(arr[i]);
        }else{
            if(arr[i].length == 1)
            {
            finalarr.push(findlastnum(arr[i]));
            }else{
            finalarr = finalarr.concat(findlastnumoflong(arr[i]));
            }

        }
        console.log(finalarr);
        

    }
    return finalarr;

  }
  
  console.log(steamrollArray([[["a"]], [["b"]]]));


  function findlastnum(arr){
      if(Array.isArray(arr[0])){
          return findlastnum(arr[0]);
      }else{
      return arr[0];
      }
  }

  function findlastnumoflong(arr){
      var finalmarr = [];

    for(var i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            finalmarr.push(findlastnum(arr[i]));
        }else{
            finalmarr.push(arr[i]);
        }
    }
    console.log(finalmarr);
    return finalmarr;

  }
