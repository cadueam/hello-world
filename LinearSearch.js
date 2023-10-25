let arrayNumbers = [1, 3, 5, 33];

function arrayFind(arrayNumbers, target) {
  for (let i = 0; i < arrayNumbers.length; i++) {
    const num10 = arrayNumbers[i];
    if (num10 === target) {
      return "Hello World";
    }
  }
  return "Fail Mother Fucker";
}

console.log(arrayFind(arrayNumbers, 334));
