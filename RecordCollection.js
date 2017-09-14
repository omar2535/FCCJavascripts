var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  
    if(collection[id][prop] == undefined){
      if(prop == "tracks"){
        collection[id][prop] = [];
      }
    }
    
    if(value == ""){
      delete collection[id][prop];
    }
    
    else if(prop == "tracks"){
      var temparr = [];
      console.log(collection[id][prop]);

      for(var i=0; i<collection[id][prop].length; i++){
        temparr.push(collection[id][prop][i]);
      }
      temparr.push(value);
      collection[id][prop] = temparr;
      console.log(temparr);
      console.log(collection[id][prop]);
    }
    
    else if(collection[id][prop] != value){
      collection[id][prop] = value;
    }

  
  return collection;
}

// Alter values below to test your code
console.log(updateRecords(2468, "tracks", "Free"));

