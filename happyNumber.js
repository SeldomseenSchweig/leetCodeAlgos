// Runtime
// 88 ms
// Beats
// 68.81%
// Memory
// 44.4 MB
// Beats
// 28.81%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {number} n
 * @return {boolean}
 */

 function squareSumDigits(n){
     let sum = 0
     while(n){
         sum += (n % 10)**2
         // This cuts off the number at the decimal
         n = parseInt(n / 10)
     }
     return sum
 }
var isHappy = function(n) {
    let map = {}

    while(n !== 1 && !map[n]){
        map[n] = true
        n = squareSumDigits(n)
        
    }
    return n === 1
    
};