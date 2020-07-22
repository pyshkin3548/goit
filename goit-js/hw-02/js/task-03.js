const findLongestWord = function (string) {
    const stringSplit = string.split(" ");
    let longestWord = "";
    let word = "";
  
    for (let i = 0; i < stringSplit.length; i += 1) {
      if (longestWord < stringSplit[i].length) {
        longestWord = stringSplit[i].length;
        word = stringSplit[i];
      }
    }
  
    return word;
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

