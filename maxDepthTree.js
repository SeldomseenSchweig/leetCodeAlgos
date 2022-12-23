// JavaScript
// Runtime
// 81 ms
// Beats
// 77.36%
// Memory
// 45 MB
// Beats
// 69.95%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(!root) return 0

    if(!root.left && !root.right) return 1

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};