
//String -> Array
//Produces array pairs for each letter




function pairElement(str) {
    var arr = [];

    for(var i=0; i<str.length; i++){
        var currentchar = str.charAt(i);
        console.log(currentchar);
        switch(currentchar){
            case "A": 
                arr.push([currentchar, "T"]);
                break;
            case "T": 
                arr.push([currentchar, "A"]);
                break;
            case "G":
                arr.push([currentchar, "C"]);
                break;
            case "C":
                arr.push([currentchar, "G"]);
                break;
            default: 
                arr.push([]);
        }    
    }

    return arr;
  }
  
  console.log(pairElement("GCG")); 
  