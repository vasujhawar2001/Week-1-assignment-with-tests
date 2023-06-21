/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let sortedStr = (str) => {
    return str.toLowerCase().split("").sort().join("")
  }

  // console.log(sortedStr(str1));
  // console.log(sortedStr(str2));
  return sortedStr(str1)==sortedStr(str2);
}

// console.log(isAnagram("vvasu", "asuvv"))

module.exports = isAnagram;
