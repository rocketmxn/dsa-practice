/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minheap = new MinPriorityQueue()
    for(const num of nums) {
        minheap.enqueue(num)
        if(minheap.size() > k) {
            minheap.dequeue()
        }
    }
    return minheap.front()
};