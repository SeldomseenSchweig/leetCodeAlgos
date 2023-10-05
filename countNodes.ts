// Runtime
// Details
// 82ms
// Beats 87.22%of users with TypeScript
// Memory
// Details
// 72.72MB
// Beats 6.39%of users with TypeScript
// More challenges
// 270. Closest Binary Search Tree Value

// Status

// Language
// Runtime
// Memory
// Notes

// Accepted
// a few seconds ago
// TypeScript
// 82 ms
// 72.7 MB
// Output Limit Exceeded
// 2 minutes ago
// TypeScript
// N/A
// N/A
// Output Limit Exceeded
// 3 minutes ago
// TypeScript
// N/A
// N/A

// /**
//  * Definition for a binary tree node.
  class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
}
 }
//  */

function countNodes(root: TreeNode | null, arr:[number]): number {

    while(root){
        // console.log(root, arr)
        if(root.left && root.right){
            arr.push(root.left.val, root.right.val)
            return(countNodes(root.left, arr),countNodes(root.right,arr) )
        }else if(root.left){
            arr.push(root.left.val)
            return countNodes(root.left, arr)
        }else if(root.right) {
            arr.push(root.right.val)
            return countNodes(root.right,arr)
        }
        else{
            return arr.length+1
        }
        
            
    }
    return 0
    
};
