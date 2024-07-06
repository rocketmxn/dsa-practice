/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let i = 0
    let j = 0
const newArr = []
const newNums1 = nums1.sort((a,b)=> a-b )
const newNums2 = nums2.sort((a,b)=> a-b )
    while(i<newNums1.length  && j<newNums2.length) {
        if(newNums1[i] < newNums2[j]) {
            i++
        } else if (newNums1[i] > newNums2[j]) {
            j++
        } else {
            if(newArr[newArr.length - 1] !== newNums1[i]) {
                newArr.push(newNums1[i])
            }
            i++
            j++
        }
    }
    return newArr
};