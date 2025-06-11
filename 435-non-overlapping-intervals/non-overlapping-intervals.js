/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length <= 1) return 0
    intervals.sort((a,b)=> a[1]-b[1])
    let intervalsToKeep = 1
    let lastIntervalEndTime = intervals[0][1]
    for(let i=1; i<intervals.length; i++) {
        const currentIntervalStartTime = intervals[i][0]
        if(currentIntervalStartTime >= lastIntervalEndTime) {
            intervalsToKeep++
            lastIntervalEndTime = intervals[i][1]
        }
    }
    return intervals.length - intervalsToKeep
};