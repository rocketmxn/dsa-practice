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
var swapPairs = function(head) {
    let dummy = new ListNode(0, head)
    let prev = dummy, cur = head  // prev -> cur -> second -> npn
    while(cur && cur.next) {
        let npn = cur.next.next
        let second = cur.next

        second.next = cur
        cur.next = npn
        prev.next = second         // prev -> second -> cur -> npn
    
        prev = cur
        cur = npn
    }

    return dummy.next

};