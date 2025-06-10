/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map()
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }
    const sortedEntries = Array.from(freqMap.entries()).sort((a,b) => b[1] - a[1])
    const result = []
    for(let i=0; i<k; i++) {
        result.push(sortedEntries[i][0])
    }
    return result
};