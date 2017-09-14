
function fearNotLetter(str) {
    var startingpoint = str.charCodeAt(0); 
    var returnvalue;
    var counter = 0;
    var indent = 0;
    
    if(checkifcompleted(str)){
        return returnvalue;

    }else{
    while(counter <str.length || returnvalue == undefined){
        var currentchar = String.fromCharCode(startingpoint+counter+indent);
        if( currentchar != str.charAt(counter)){
            returnvalue = currentchar;
            indent++;
        }
        counter ++;
    }


    return returnvalue;
  }
}
   

function checkifcompleted(string){
    var starting = string.charCodeAt(0); 
    var iscomplete = true;

    for(var i=0; i<string.length; i++){
        if(String.fromCharCode(i+starting) != string.charAt(i)){
            iscomplete = false;
        }

    }
    return iscomplete;
}
  console.log(fearNotLetter("abc"));