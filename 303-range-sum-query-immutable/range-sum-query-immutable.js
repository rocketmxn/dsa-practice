/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSums = []
    let currentSum = 0
    for(let n of nums) {
        currentSum += n
        this.prefixSums.push(currentSum)
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const sumRight = this.prefixSums[right]
    const sumLeft = left > 0 ? this.prefixSums[left - 1] : 0
    return sumRight - sumLeft
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */