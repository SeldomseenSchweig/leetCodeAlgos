// Runtime
// 69 ms
// Beats
// 72.99%
// Memory
// 42.2 MB
// Beats
// 28.43%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
var plusOne = function(digits) {

    let carry = 1
    for(let i = digits.length-1; i > -1 ; i--){
        if(digits[i] + carry > 9){
            digits[i] = 0 
        }else{
            digits[i] = digits[i] + 1
            return digits
        }
    }
    if(digits[0] === 0){
        digits.unshift(1)
    }
    return digits
};