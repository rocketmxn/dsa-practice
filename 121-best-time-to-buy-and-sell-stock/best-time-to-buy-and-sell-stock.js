/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimum = prices[0]
    let profit = 0
    for(let i=1; i<prices.length; i++) {
        let currentEl = prices[i]
        if(currentEl < minimum) {
            minimum = currentEl
        }
        if(currentEl > minimum) {
            profit = Math.max(profit, currentEl - minimum)
        }
    }
    return profit
};