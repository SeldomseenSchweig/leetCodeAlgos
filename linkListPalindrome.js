Runtime
218 ms
Beats
63.35%
Memory
72.2 MB
Beats
59.76%
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
 * @return {boolean}
 */

 let length = (current) => {
     let listLength = 0
     let listArr = []

     while(current){
         if(!current) return 0
         while(current){
             listLength++
             listArr.push(current.val)
             current = current.next
         }
         return {listLength, listArr}
     }
 }
var isPalindrome = function(head) {
    let {listLength, listArr} = length(head)
    console.log(listLength, listArr)
    if(listLength === 1) return true
    let rightMiddle = 0
    let leftMiddle = 0
    if(listLength % 2 != 0){
        rightMiddle += Math.floor(listLength/2 + 1)
        leftMiddle += Math.floor(listLength/2 - 1)
    }else{
        rightMiddle += Math.floor(listLength/2)
        leftMiddle += Math.floor(listLength/2 - 1)
    }

    while(leftMiddle != -1 && rightMiddle != listArr.length){
        if(listArr[leftMiddle] != listArr[rightMiddle]) return false
        leftMiddle--
        rightMiddle++
    }
    return true
};