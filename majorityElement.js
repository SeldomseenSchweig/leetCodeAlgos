// Runtime
// 77 ms
// Beats
// 83.19%
// Memory
// 43.9 MB
// Beats
// 54.48%


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let freqNums = {};
    let largestFreq = 0;
    let answer = 0;
    for(let num of nums){
        let count = freqNums[num] || 0
        freqNums[num] = count + 1
        if(freqNums[num] > nums.length/2) return num
    }
    for(let num of nums){
        if (freqNums[num] > largestFreq){ 
            largestFreq = freqNums[num]
            answer = num
            }
    }
    return answer

};