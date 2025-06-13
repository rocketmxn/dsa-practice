/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let minCoins = new Array(amount+1).fill(amount+1)
    minCoins[0] = 0
    for(let a=1;a<=amount;a++){
        for(let coin of coins) {
            if(a-coin >= 0) {
                minCoins[a] = Math.min(minCoins[a], 1 + minCoins[a-coin])
            }
        }
    }
    return minCoins[amount] > amount ? -1 : minCoins[amount]
};