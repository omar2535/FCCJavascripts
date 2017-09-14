//array -> integer
//Display smallest common multiple that is divisble by both numbers and all the numbers in between the 2 numbers
//noprotect

function smallestCommons(arr) {
    var largenum = Math.max(arr[0], arr[1]);
    var smallnum = Math.min(arr[0], arr[1]);
    var difference = largenum - smallnum;
    var leastcommonmultiple = largenum;
    var hasfound = false;

    while(hasfound == false){
        var isnot = false;
        for(var i = smallnum; i<=largenum; i++){
            if(leastcommonmultiple % i != 0 ){
                isnot = true;
            }
        }
        if(isnot == true){
            leastcommonmultiple++;
        }
        if(isnot == false){
            hasfound = true;
        }

    }
    

    return leastcommonmultiple;
  }
  
  
  console.log(smallestCommons([23,18]));
  