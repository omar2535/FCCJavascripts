
function findElement(arr, func) {
    var num = 0;
    for(var i=0; i<arr.length; i++){
        console.log(i);
        console.log(arr[i]);

        if(func(arr[i]) == true){
            console.log(i);
            
            num = arr[i];
            break;
        }
    }
    if(num == 0){
        return undefined;
    }else{
        return num;

    }
  }
  
  console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
  
  