function isPalindrome(str){
    
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    var stringReversed = joinArray;

    if (stringReversed === str) {
        return "Is Palindrome"        
    } else {
        return "Not Palindrome"
    }


}


console.log(isPalindrome("abba"))