/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length
    k = k % n
    if (k === 0) return

    reverseArr(nums, 0, n - 1)
    reverseArr(nums, 0, k - 1)
    reverseArr(nums, k, n - 1);
};

function reverseArr (arr, start, end) {
    while (start < end) {
        const temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}