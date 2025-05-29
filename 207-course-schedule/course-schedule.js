/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqMap = new Map()
    for(let i=0; i<numCourses; i++) {
        prereqMap.set(i, [])
    }
    for(let [course, prereq] of prerequisites) {
        prereqMap.get(course).push(prereq)
    }
    const path = new Set()
    function dfs(course) {
        if(prereqMap.get(course).length === 0) return true
        if(path.has(course)) return false
        path.add(course)
        for(let pre of prereqMap.get(course)) {
            if(!dfs(pre)) return false
        }
        path.delete(course)
        prereqMap.set(course, [])
        return true
    }
    for(let course=0; course<numCourses; course++) {
        if(!dfs(course)) return false
    }
    return true
};