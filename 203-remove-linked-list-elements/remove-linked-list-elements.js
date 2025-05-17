/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // Create a special helper car at the beginning
    // This makes it easier to handle removing the first car
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Start at our helper car
    let current = dummy;
    
    // Keep checking until we reach the end of the train
    while (current.next) {
        // If the next car has the number we want to remove
        if (current.next.val === val) {
            // Skip that car (connect to the car after it)
            current.next = current.next.next;
        } else {
            // If the next car is okay, move to it
            current = current.next;
        }
    }
    
    // Return our train without the unwanted cars
    // (starting after our helper car)
    return dummy.next;
};