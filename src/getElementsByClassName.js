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
  	if (element.classList.length > 0) {
  		for (var idx = 0; idx < element.classList.length; idx++) {
  			if (element.classList[idx] === className) {
  				result.push(element);
  			}
  		}
  	}
  }

  findClassName(searchArea);
  console.log(result);
  return result;
};
