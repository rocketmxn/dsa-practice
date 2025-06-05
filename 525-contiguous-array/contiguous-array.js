/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    if(!nums || nums.length === 0) return 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            nums[i] = -1
        }
    }
    const map = new Map()
    map.set(0, -1)
    let currentSum = 0
    let max = 0
    for(let i=0; i<nums.length; i++) {
        currentSum += nums[i]
        if(map.has(currentSum)) {          // checks key's existence
            let lastIndex = map.get(currentSum) // gives index (value)
            max = Math.max(max, i - lastIndex)
        } else {
            map.set(currentSum, i)
        }
    }
    return max
};