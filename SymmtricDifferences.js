  
function sym() {

    var newarr = [];
    var pastarr = [];
    var translatedarr = initializer(arguments);
    var length = arguments.length;
    var purearr = concatall(translatedarr);
    bubbleSort(purearr);
    
    console.log(purearr);
    console.log(arguments[0][1]);
    console.log(translatedarr);


    for(var i=0; i<purearr.length; i++){
      var currentelement = purearr[i];
      console.log(currentelement);
      var counter = 0;
      if(contains(purearr, currentelement) == true){
        newarr.push(currentelement);
      }
      
      //STILL NEED TO COMPLETE WHILE LOOP INCREMENTING I WHEN NOT SAME NUMBER
      
    }
    return newarr;
    
  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));
  console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
  
  function initializer(arr){
    var newarr = [];
    for(var i=0; i<arr.length; i++){
      newarr.push(arr[i]);
    }
    return newarr;
  }

function concatall(arrs){
  var newarr = [];
    for(var i=0; i<arrs.length; i++){
      newarr = newarr.concat(arrs[i]);
    }
    return newarr;
}

var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

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

console.log(contains([1,2,3], 1))
