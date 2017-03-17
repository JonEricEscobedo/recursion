// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // Hack Reactor tips... use:
  //   document.body
  //   <element>.childNodes
  //   <element>.classList
  //
  // Initialize a new array that will store elements that have className
  // Create a sub-function that will search DOM for className
  // Send <body> contents through sub-function (document.body)
  //   If className is found
  //     Send <element> to new array
  //   Else
  //     Recursively send children of <body> to sub-function until
  //     className is found

  var result = [];
  var searchArea = document.body

	  function findClassName(element) {
	  	console.log('inside func: ', element);

	  	// Check to see if <element> even has a classList
	    if (element.classList !== undefined && element.classList.length > 0) {
	      console.log('inside func w/ class list: ', element.classList);

	      // Iterate through <element>.classList and look for a match
	      for (var idx = 0; idx < element.classList.length; idx++) {

	      	// If <element>.classList === className, push to result arr
	        if (element.classList[idx] === className) {
	          console.log('FOUND... pushing...: ', element)
	          result.push(element);
	        }
	      }
	    } else {
	    	// If no classList exists for <element>, log to console
	      console.log('Nothing here...')
	    }
	    
	    // Now recurse through the rest of <element> by calling childNodes
	    for (var idx = 0; idx < element.childNodes.length; idx++) {
	    	console.log('on node ', idx, ' out of ', element.childNodes.length-1, ' nodes');
	      console.log('RECURSE... next: ', element.childNodes[idx])
	      findClassName(element.childNodes[idx]);
	    }
	  }
  console.log('outside func: ', searchArea);

  // Send the whole <body> through findClassName
  findClassName(searchArea);
  
  return result;
};
