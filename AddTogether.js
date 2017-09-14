
function addTogether() {

    var firstnum = arguments[0];
    console.log(firstnum);
    for(var i=0; i<arguments.length; i++){
        if(typeof arguments[i] != "number"){
            return undefined;
        }
    }


    if(arguments.length == 2){
        console.log(arguments[1]);
        if(Number.isInteger(arguments[1]) || Number.isInteger(arguments[0])){
        return arguments[0] + arguments[1];}
        else{
            return undefined;
        }
    }else{
        return function(){
            console.log(arguments[0]);
            if(Number.isInteger(arguments[0])){
            return arguments[0] + firstnum;}
            else{
                return undefined;
            }
        };
    }
    return myfunc;
  }
  
  console.log(addTogether("http://bit.ly/IqT6zt"));


  