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
   if(!head || !head.next) {
    return false
   }
   let slowRunner = head
   let fastRunner = head
   while(fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next
    fastRunner = fastRunner.next.next
    if(slowRunner === fastRunner) {
        return true
    }
   }
   return false
};