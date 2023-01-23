 const removeFromArray = function(array,...args){ 
return array.filter(item => //filter through each item in array
  !args.includes(item)) //item does not equal args array put  in new array
  }

// Do not edit below this line
module.exports = removeFromArray;


/* const removeFromArray = function(...args) {
  const array= args[0];// creates an array out of the elements
  const newArray = []; // create new empty array to put remaining elements

  array.forEach((item) => { // goes through each item in array
     if (!args.includes(item)) { //compares each item in array to the other value
        newArray.push(item); //if items do not match they are pushed to new array
      }
    });
    return newArray;
  };
  
  */