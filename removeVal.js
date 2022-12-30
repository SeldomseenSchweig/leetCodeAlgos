Runtime
84 ms
Beats
85.44%
Memory
46.8 MB
Beats
37.22%
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var current = head;
    var previous = null;
    
    while(current){
        if(current.val === val){
            if(previous){
                previous.next = current.next;
            }else{
                head = current.next;
            }
        }else{
            previous = current;
        }
        
        current = current.next;
    }
    
    return head;
    

};