// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  console.log(obj);

  if (typeof obj === 'string') {
    return  '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
  	var result = [];
  	obj.forEach(function(element) {
  		result.push(stringifyJSON(element));
  	});
    return '[' + result + ']';
  } else if (typeof obj === 'object') {
  	var newStr = '';

    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        newStr += '{"' + key + '":"' + obj[key] + '"}';
      }
    }
    return newStr;
  }
  
  
};
