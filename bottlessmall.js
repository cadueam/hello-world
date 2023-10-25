function nineBottles(numBottles) {
 
  while (numBottles > 0) {
  var numBottlesTextLineOne = numBottles + " bottles of beer on the wall "
  var numBottlesTextLineTwo = numBottles + " bottles of beer Take one down, pass it around "
  var numBottlesTextLineThree = numBottles - 1 + " bottles of beer on the wall "
  var fullText = numBottlesTextLineOne + numBottlesTextLineTwo + numBottlesTextLineThree
  console.log(fullText);
  numBottles--;
    
  }
  
}

nineBottles(99);
