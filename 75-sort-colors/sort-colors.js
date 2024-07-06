/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1

    while(mid <= high) {
        if(nums[mid] === 0) {
            swap(mid, low, nums)
            mid++
            low++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            swap(mid, high, nums)
            high--
        }
    }
};

function swap(idx1, idx2, arr) {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}