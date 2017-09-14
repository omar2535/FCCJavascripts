
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    

    var pattern = /\s+|_+/g;

    var newstring = str.replace(/([a-z][A-Z])/g, '$1 $2');
    return newstring.replace(pattern, '-').toLowerCase();

    
    // --David St. Hubbins
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  

