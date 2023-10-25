/* 
Write a function that accepts a String as an argument

The function should capitalize ONLY every other letter in the String

The function should then return the converted String.

*/

function capitalizeLetter(string) {
  let stringAll = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      stringAll += string[i].toUpperCase();
    } else {
      stringAll += string[i].toLowerCase();
    }
  }

  return stringAll;
}

console.log(capitalizeLetter("yo eli"));
console.log(capitalizeLetter("hello"));
console.log(capitalizeLetter("caduzin"));
console.log(capitalizeLetter("bianquinha"));
