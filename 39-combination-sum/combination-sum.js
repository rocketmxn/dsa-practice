/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []

    function make(i, comb, total) {
        if(total === target){
            res.push([...comb])
            return
        }
        if(total > target || i >= candidates.length) {
            return
        }
        comb.push(candidates[i])
        make(i, comb, total+candidates[i])
        comb.pop()
        make(i+1, comb, total)
    }
    make(0, [], 0)
    return res
};