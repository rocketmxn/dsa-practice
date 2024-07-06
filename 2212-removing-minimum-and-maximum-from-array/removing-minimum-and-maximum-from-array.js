/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(arr) {
    const n = arr.length
    if(n==1) return 1
    let maxi = arr[0]
    let mini = arr[0]
    let maxii = 0
    let minii = 0

    for(let i=1; i<n; i++) {
        if(arr[i] >= maxi) {
            maxi = arr[i]
            maxii = i
        }
        if(arr[i] <= mini) {
            mini = arr[i]
            minii = i
        }
    }
    const y = Math.max(maxii,minii)
    const x = Math.min(maxii, minii)
    const minAns = Math.min(n-(y-x-1), y+1, n-x)
    return minAns
}