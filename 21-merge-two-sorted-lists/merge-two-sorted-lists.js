/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a helper car to start our new train
    let dummy = new ListNode(0);
    // This is where we'll attach cars to our new train
    let current = dummy;
    
    // Keep going until one of the trains runs out of cars
    while (list1 && list2) {
        // Compare the first cars of both trains
        if (list1.val <= list2.val) {
            // If list1's car has a smaller number, add it to our new train
            current.next = list1;
            // Move forward in list1
            list1 = list1.next;
        } else {
            // If list2's car has a smaller number, add it to our new train
            current.next = list2;
            // Move forward in list2
            list2 = list2.next;
        }
        // Move forward in our new train
        current = current.next;
    }
    
    // If there are any leftover cars in either train, attach them all
    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // Return our new train (without the helper car)
    return dummy.next;
};