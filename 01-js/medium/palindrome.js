/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const rev = str.toLowerCase().replace(/[.,#?!$%:{}=\-_`~()]/g, "").replace(/\s/g, "").split("").reverse().join("");
  const newStr = str.toLowerCase().replace(/[.,#?!$%:{}=\-_`~()]/g, "").replace(/\s/g, "");
  //console.log(rev, newStr);
  return newStr==rev;
}
//console.log(isPalindrome("Able, was I ere I saw Elba!"));
module.exports = isPalindrome;
