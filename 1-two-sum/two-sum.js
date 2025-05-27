/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {}
    for(let i=0; i<nums.length; i++) {
       let currentEl = nums[i]
       let left = target - currentEl
       if(hashmap[left] !== undefined) {
        return [hashmap[left], i]
       }
       hashmap[currentEl] = i
    }
};