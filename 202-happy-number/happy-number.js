/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    function getNext(n) {
        let output = 0
        while(n > 0) {
            let digit = n % 10
            output += digit * digit
            n = Math.floor(n / 10)
        }
        return output
    }

    let slow = n
    let fast = getNext(getNext(n))
    while(fast !== n && slow !== fast) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }
    return fast === 1
};