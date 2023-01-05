// Runtime
// 155 ms
// Beats
// 42.91%
// Memory
// 49.6 MB
// Beats
// 31.63%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
var reverseString = function(s) {
    if(s.length === 0 || s.length === 1) return s
     let left = 0
     let right = s.length-1
     let count= 0
     while( count != Math.floor(s.length/2) ){
         let temp = s[left]
         s[left] = s[right]
         s[right] = temp
         count++
         left++
         right--
         
     }
     return s
};