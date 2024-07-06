/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const sortedArr = nums.sort((a,b) => a-b)
    return sortedArr[nums.length-k]
};