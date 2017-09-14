
function telephoneCheck(str) {
    str = str.replace(/[" "a-z*&!#$%]/igm, "");
    console.log(str);
    console.log(str.length);
    console.log(str.charAt(0));


    var hasareacode = false;
    if(str.charAt(0) == 1){
        hasareacode = true;
    }
    var hasclosingbraces = false;
    var closingbracesexist = false;

    for(var i=0; i<str.length; i++){
        if(str.charAt(i) == "(" || str.charAt(i) == ")"){
            closingbracesexist = true;
            if(str.charAt(i+4) == ")"){
                hasclosingbraces = true;
                }
            }

    }
    console.log(hasareacode);
    console.log(hasclosingbraces);
    console.log(closingbracesexist);

    if(hasclosingbraces == false && closingbracesexist == true){
        return false;
    }
    
    str = str.replace(/[-" "a-z*&!#-$()]/igm, "");
    console.log(str);
    console.log(str.length);
    if(str.length == 10){
        return true;
    }else if(str.length == 11){
        if(hasareacode == true){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
    // Good luck!
  }
  
  
  
  console.log(telephoneCheck("1(555)-555-5555"));
  console.log(telephoneCheck("(6505552368)"));
  console.log(telephoneCheck("123**&!!asdf#"));
  console.log(telephoneCheck("1 555)555-5555"));
  console.log(telephoneCheck("10 (757) 622-7382"));
  console.log(telephoneCheck("555)-555-5555"));