/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // If list is empty or has only one toy, it's always a palindrome
    if (!head || !head.next) {
        return true;
    }
    
    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;
    
    // When fast reaches the end, slow will be at the middle
    while (fast && fast.next) {
        slow = slow.next;      // Move slow one step
        fast = fast.next.next; // Move fast two steps
    }
    
    // Step 2: Reverse the second half of the list
    let prev = null;
    let current = slow;
    
    while (current) {
        let next = current.next;  // Remember the next toy
        current.next = prev;      // Point current toy backward
        prev = current;           // Move prev forward
        current = next;           // Move to the next toy
    }
    
    // Step 3: Compare the first half with the reversed second half
    let left = head;         // Start of first half
    let right = prev;        // Start of reversed second half
    
    while (right) {
        // If toys don't match, it's not a palindrome
        if (left.val !== right.val) {
            return false;
        }
        
        // Move both pointers toward the middle
        left = left.next;
        right = right.next;
    }
    
    // If we get here, all toys matched - it's a palindrome!
    return true;
};