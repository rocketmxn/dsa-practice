/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let latestSum = 0
    let count = 0
    const map = new Map()
    map.set(0, 1)
    for(let n of nums) {
        latestSum += n
        if(map.has(latestSum - k)) {
            count += map.get(latestSum - k)
        }
            map.set(latestSum, (map.get(latestSum) || 0) + 1)
    }
    return count
};