function twoSum(nums, target){
    var left = 0;
    var right = nums.length -1

    while (left + right !== target) {
        
        var numSum = nums[left] + nums[right]

        if (numSum > target) {
            right --;
        } else if (numSum < target){
            left++;
        } else if (numSum === target ) {
            return "Nice, you found it!" + [left,right]
        }

    }

    
}

console.log(twoSum([1,2,3,4,5,6,7,8,9,10], 11));



// Numbers in array > crescent order if not sort() them
// Two pointers tecnic > 0 and -1 , if target > than 0+(-1) , left ++ , if target < 0+(-1) right --
