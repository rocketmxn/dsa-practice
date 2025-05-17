/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // If there are no toys, we can't find a middle!
    if (!head) {
        return null;
    }
    
    // Our two friends starting at the first toy
    let slowFriend = head;
    let fastFriend = head;
    
    // Fast friend runs ahead until they reach the end
    while (fastFriend && fastFriend.next) {
        // Slow friend takes one step
        slowFriend = slowFriend.next;
        
        // Fast friend takes two steps
        fastFriend = fastFriend.next.next;
    }
    
    // When fast friend reaches the end, slow friend is at the middle!
    return slowFriend;
};