function bottleBeer(beerCount) {
  while (beerCount > 1) {
    var lyric =
      beerCount +
      "bottles of beer on the wall, " +
      beerCount +
      " bottles of beer. Take one down and pass it around, " +
      (beerCount - 1) +
      " bottles of beer on the wall.";
    beerCount--;

    var lyricOne =
      beerCount +
      "bottles of beer on the wall, " +
      beerCount +
      " bottles of beer. Take one down and pass it around, " +
      (beerCount - 1) +
      " bottle of beer on the wall.";
    beerCount--;

    console.log(lyric);

    if (beerCount === 1) {
      console.log(lyricOne);
    }
  }
}

bottleBeer(99);
