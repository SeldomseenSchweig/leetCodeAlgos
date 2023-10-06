// Accepted
// Editorial
// Solution
// Runtime
// Details
// 68ms
// Beats 16.67%of users with TypeScript
// Memory
// Details
// 44.99MB
// Beats 57.14%of users with TypeScript
// More challenges
// 563. Binary Tree Tilt
// 103. Binary Tree Zigzag Level Order Traversal
// 2471. Minimum Number of Operations to Sort a Binary Tree by Level

// Status

// Language
// Runtime
// Memory
// Notes

// Accepted
// a few seconds ago
// TypeScript
// 68 ms
// 45 MB
// Wrong Answer
// 2 hours ago
// TypeScript
// N/A
// N/A

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) {
        return 0; 
    }

    let sum = 0;

    if (root.left !== null && root.left.left === null && root.left.right === null) {
        
        sum += root.left.val;
    }

   
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
}