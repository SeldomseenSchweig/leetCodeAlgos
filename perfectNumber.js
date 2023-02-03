// Runtime
// 1921 ms
// Beats
// 69.81%
// Memory
// 42.4 MB
// Beats
// 15.51%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
var checkPerfectNumber = function(num) {

    let divisors = [];
    if(num === 1) return false
    for(let i = 1; i < num/2 +1; i++){
        if(num % i === 0) divisors.push(i)
    }
    console.log(divisors)
    let sum = 0
    for(let i = 0; i < divisors.length; i++){
        sum+=divisors[i]
    }
    return sum === num
    
};