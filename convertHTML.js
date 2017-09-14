
function convertHTML(str) {
    var pattern = /["'&<>]/igm;
    var nowhitespacequote = ' \"\ '.replace(/ /g,'');
    var nowhitespaceampos = " \'\ ".replace(/ /, '');

    var newstring = str.replace(pattern, function(word){
        if(word == '"'){
            return "&quot;";
        }
        if(word == ">"){
            return "&gt;";
        }
        if(word == "<"){
            return "&lt;";
        }
        if(word == "&"){
            return "&amp;";
        }
        if(word == "'"){
            return "&apos;";
        }
        
    });

    // &colon;&rpar;
    return newstring;
  }
  
  console.log(convertHTML("Stuff in \"quotation marks\""));