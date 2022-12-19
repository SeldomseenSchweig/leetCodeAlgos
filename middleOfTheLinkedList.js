Runtime
56 ms
Beats
96.98%
Memory
41.9 MB
Beats
60.78%
Click to check the distribution chart
Notes
Write your notes here
Related Tags
Select tags
0/5
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
    let res = []
    let current = head
    while(current){
        res.push(current)
        current = current.next
    }
    console.log()

    return res[Math.floor(res.length/2)]
    
};