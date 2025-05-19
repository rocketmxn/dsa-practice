/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Handle small cases directly
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    // Initialize with the first two known values
    let oneStepBefore = 2;  // Ways to climb 2 steps
    let twoStepsBefore = 1; // Ways to climb 1 step
    let current = 0;
    
    // Calculate each step starting from the 3rd step
    for (let i = 3; i <= n; i++) {
        // Current ways = ways from one step before + ways from two steps before
        current = oneStepBefore + twoStepsBefore;
        
        // Move our pointers forward
        twoStepsBefore = oneStepBefore;
        oneStepBefore = current;
    }
    
    return current;
};