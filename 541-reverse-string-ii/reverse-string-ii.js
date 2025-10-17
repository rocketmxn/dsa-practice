/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr = s.split("")

    for(let i=0; i< arr.length; i += 2*k) {
        let left = i
        let right = Math.min(i+k - 1, arr.length - 1)
        while(left < right) {
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
    }
    return arr.join("")
};