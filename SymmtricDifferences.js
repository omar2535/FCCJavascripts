  
function sym() {


    var newarr = [];
    var pastarr = [];
    var translatedarr = initializer(arguments);
    var length = arguments.length;
    var timestobelooped = 2;
    var purearr = concatall(translatedarr);
    bubbleSort(purearr);
    
    for(var i=0; i<purearr.length; i++){
      var currentelement = purearr[i];
      console.log(currentelement);
      var counter = 0;
      if(contains(purearr, currentelement) == true){
        newarr.push(currentelement);
      }
      
      
    }


    return newarr;
    
  }
  

  console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
  
  //helper to initialize my array
  function initializer(arr){
    var newarr = [];
    for(var i=0; i<arr.length; i++){
      newarr.push(arr[i]);
    }
    return newarr;
  }


//helper to concatonate all my arrays
function concatall(arrs){
  var newarr = [];
    for(var i=0; i<arrs.length; i++){
      newarr = newarr.concat(arrs[i]);
    }
    return newarr;
}

var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];


//sort from least to greatest
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


//Checks if it contains the element i am looking for
function contains(arr, element){
  var hasmorethanone = false;
  var counter = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] == element){
      counter++
    }
  }
  if(counter >1){
    return false;
  }else{
    return true;
  }
}

console.log(contains([1,2,3], 1));
