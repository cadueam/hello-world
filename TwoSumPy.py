

def twosum(nums,target):
    length = len(nums)
    for i in range(length):
        for j in range(i+1, length):
            if nums[i] + nums[j] == target:
                return [i,j]
n = [3,1,1,2]
t = 5

print(twosum(n,t))
