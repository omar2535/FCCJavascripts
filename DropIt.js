
function dropElements(arr, func) {
    
    index = 0;
    max = arr.length;
    var hasfound = false;

    while(hasfound == false && index < max){

        var current = arr[0];
        if(func(current) == false){
            arr.shift();
        }
        else{
            hasfound = true;
        }
        index++;
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  
  