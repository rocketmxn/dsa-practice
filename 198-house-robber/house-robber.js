/**
 * @param {number[]} nums
 * @return {number}
 */
 // [bfrPrev, prev, house2, house3]
var rob = function(houseList) {
    if(houseList.length === 0) return 0
    let previous = 0
    let beforePrevious = 0
    for(let house of houseList) {
        let temp = previous
        previous = Math.max(beforePrevious + house, previous)
        beforePrevious = temp
    } 
    return previous
};