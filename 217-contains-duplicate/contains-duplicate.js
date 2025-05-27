/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = {}
    for(let i=0; i<nums.length; i++) {
        if(hashmap[nums[i]]) {
            return true
        }
        hashmap[nums[i]] = true
    }
    return false
};