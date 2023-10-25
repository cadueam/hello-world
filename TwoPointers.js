let howMuch = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function twoPointers(howMuch, target) {
  var low = 0;
  var high = howMuch.lenght - 1;

  while (low <= high) {
    var mid = low + (high - low) / 2;
    if (howMuch[mid] === target) {
      return mid;
    }
    if (howMuch[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    return -1;
  }
}

console.log(twoPointers(howMuch, 10));
