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
var deleteDuplicates = function(head) {
    // If we have no train, we're done!
    if (!head) {
        return null;
    }
    
    // Start looking at the first car
    let current = head;
    
    // Keep checking until we reach the end of the train
    while (current && current.next) {
        // If the next car has the same number as the current car
        if (current.val === current.next.val) {
            // Skip the next car (connect to the car after it)
            current.next = current.next.next;
        } else {
            // If the next car is different, move to it
            current = current.next;
        }
    }
    
    // Return our train with no duplicates
    return head;
};