// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // For string primitives
  if (typeof obj === 'string') {																		
    return  '"' + obj + '"';

    // For number or boolean primitives
  } else if (typeof obj === 'number' || typeof obj === 'boolean') { 
    return obj.toString();
    
    // For null
  } else if (obj === null) {
    return 'null';

    // For objects that are arrays
  } else if (Array.isArray(obj)) {
  	var result = [];

  	obj.forEach(function(element) {
  		result.push(stringifyJSON(element));  // Recursive case
  	});

    return '[' + result + ']';

    // For objects that are objects
  } else if (typeof obj === 'object') {
  	var newStr = [];

    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
    	for (var key in obj) {
	      if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function' && obj[key] !== undefined) {
	        newStr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))  // Recursive case
	      }
    	}

    return '{' + newStr + '}';
    } 
  }
  
};
