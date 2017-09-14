
function binaryAgent(str) {
    var newarr = [];
    str = str.replace(/\s/g, '');
    for(var i=0; i<str.length; i+=7){
        console.log(i);
        var substring = str.substring(i, i+8);
        console.log(substring);
        newarr.push(convertToChar(convertBinary(substring)));
        i++;
        console.log(newarr)
    }

    newarr = newarr.toString();
    newarr = newarr.replace(/,/igm, '');
    console.log(newarr);

    return newarr;
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111 "));



  function convertBinary(str){

      var table = [128,64,32,16,8,4,2,1];
      var sum = 0;
      for(var i=0; i<str.length; i++){
        sum = sum + (parseInt(str.charAt(i)) * table[i]);
      }
      return sum;
  }

  console.log(convertBinary("01000001"));

  function convertToChar(charcode){
      return String.fromCharCode(charcode);

  }

  console.log(convertToChar(32)); 

