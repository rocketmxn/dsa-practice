/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    function dfs(currentPath, used) {
        if(currentPath.length === used.length) {
            result.push([...currentPath])
            return
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]) continue
            currentPath.push(nums[i])
            used[i] = true
            dfs(currentPath, used)
            currentPath.pop()
            used[i] = false
        }
    }
    dfs([], new Array(nums.length).fill(false))
    return result
};