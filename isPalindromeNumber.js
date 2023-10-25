function isPalindrome(x){
    var xString = x.toString()
    var xSplit = xString.split("")
    var xReversed = xSplit.reverse()
    var xJoin = xReversed.join("")
   console.log(xJoin)
    
    if (x === xJoin) {
        return true
    } else {
        return false
    }

}


console.log(isPalindrome(121))