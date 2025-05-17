/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // If there are no paths, there can't be a circle!
    if (!head || !head.next) {
        return false;
    }
    
    // You and your friend start at the beginning
    let slowWalker = head;
    let fastRunner = head;
    
    // Keep walking until someone reaches the end or the fast runner catches up
    while (fastRunner && fastRunner.next) {
        // You take one step
        slowWalker = slowWalker.next;
        
        // Your friend takes two steps
        fastRunner = fastRunner.next.next;
        
        // If your fast friend catches up to you, there's a circle!
        if (slowWalker === fastRunner) {
            return true;
        }
    }
    
    // If your fast friend reaches the end, there's no circle
    return false;
};