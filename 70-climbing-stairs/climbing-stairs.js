/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Create our "notebook" to remember answers
    const memo = {};
    
    // Helper function that uses our notebook
    function climb(steps) {
        // Check if we already know the answer
        if (memo[steps] !== undefined) {
            return memo[steps];
        }
        
        // Base cases
        if (steps === 1) return 1;
        if (steps === 2) return 2;
        
        // Calculate the answer and write it in our notebook
        memo[steps] = climb(steps-1) + climb(steps-2);
        return memo[steps];
    }
    
    return climb(n);
};