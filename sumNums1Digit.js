// Runtime
// 226 ms
// Beats
// 5.38%
// Memory
// 48.8 MB
// Beats
// 5.8%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number} num
//  * @return {number}
//  */
var addDigits = function(num) {
    let sNum = num.toString();
    let sum = 0
    for(let i = 0; i < sNum.length; i++){
        sum+=Number(sNum[i])
        console.log(sum)
    }
    if(sum < 10){
        console.log(sum)
        return sum
    }else{
        return addDigits(sum)
    }
    
    
};