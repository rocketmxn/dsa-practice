/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    // Start with 0 magic beans
    let number = 0;
    
    // Walk through each train car
    let current = head;
    while (current) {
        // Double your beans
        number = number * 2;
        
        // If the car has "1", add 1 bean
        if (current.val === 1) {
            number = number + 1;
        }
        
        // Move to the next train car
        current = current.next;
    }
    
    // Return how many beans you collected
    return number;
};