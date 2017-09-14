
function sumPrimes(num) {
    var currentnumber = 2;
    var sum = 0;
    for(currentnumber; currentnumber<=num; currentnumber++){
        if(isPrime(currentnumber)){
            console.log(currentnumber);
            sum += currentnumber; console.log(sum);
        }
    }
    return sum;
  }


  function isPrime(num) {
    var hasdivisibles = true;

    for(var i=2; i<num; i++){
        if(num%i==0){
            hasdivisibles = false;
        }
    }

    return hasdivisibles;
    
  }
  
  console.log(sumPrimes(10)); //expect `17
  