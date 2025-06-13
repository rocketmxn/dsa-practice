/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let totalSum = nums.reduce((a, i)=> a+i, 0)
    if(totalSum % 2 !== 0) return false
    const targetSum = totalSum / 2
    const dp = Array(nums.length + 1).fill().map(() => Array(targetSum + 1).fill(false))
dp[0][0] = true // No toys, sum 0 = possible

for(let i = 1; i <= nums.length; i++) {
    for(let sum = 0; sum <= targetSum; sum++) {
        // Option 1: Don't take current toy
        dp[i][sum] = dp[i-1][sum]
        
        // Option 2: Take current toy (if possible)
        if(sum >= nums[i-1]) {
            dp[i][sum] = dp[i][sum] || dp[i-1][sum - nums[i-1]]
        }
    }
}
    return dp[nums.length][targetSum];
};