
function sumFibs(num) {
    var sum = 0;
    var currentpoint = 1;
    var previouspoint = 0;

    while(currentpoint<=num ){
        if(currentpoint % 2 != 0){
            sum += currentpoint;
        }
        
        currentpoint += previouspoint;
        previouspoint = currentpoint - previouspoint;
    }
    return sum;
  }
  
  console.log(sumFibs(75025));
  