/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [], map = {};
    for (let n of nums2) {
        while (stack.length && n > stack[stack.length - 1]) {
            map[stack.pop()] = n;
        }
        stack.push(n);
    }
    for (let n of stack) {
        map[n] = -1;
    }
    return nums1.map(n => map[n]);
};