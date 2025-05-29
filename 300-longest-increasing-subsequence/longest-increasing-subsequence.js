/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = []

    function binarySearch(arr, target) {
        let left = 0
        let right = arr.length - 1
        while(left <= right) {
            let mid = Math.floor((left+right) / 2)
            if(arr[mid] === target) {
                return mid
            } else if (arr[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }

    for(let n of nums) {
        if(!res.length || res[res.length - 1] < n) {
            res.push(n)
        } else {
            const idx = binarySearch(res, n)
            res[idx] = n
        }
    }
    return res.length
};