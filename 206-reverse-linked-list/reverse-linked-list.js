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
var reverseList = function(head) {
    // Start with no previous car
    let prev = null;
    // Start at the first car
    let current = head;
    
    // Keep going until we've seen all cars
    while (current !== null) {
        // Remember which car is next
        let nextTemp = current.next;
        
        // Turn the arrow around to point to the previous car
        current.next = prev;
        
        // Move prev and current forward for the next car
        prev = current;
        current = nextTemp;
    }
    
    // The last car is now the first car
    return prev;
};