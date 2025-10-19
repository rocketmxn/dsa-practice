/**
 * @param {number[]} walls
 * @return {number}
 */
var maxArea = function(walls) {
   let left = 0
  let right = walls.length - 1
  let maxArea = 0

  while(left < right) {
    const height = Math.min(walls[left], walls[right])
    const width = right - left
    const area = height * width
    maxArea = Math.max(maxArea, area)

    if(walls[left] < walls[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
};