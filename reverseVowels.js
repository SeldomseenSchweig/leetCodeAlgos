// Runtime
// 402 ms
// Beats
// 8.83%
// Memory
// 54.8 MB
// Beats
// 8.52%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u']
    let left = 0;
    let right = s.length-1
    let lowerS = s.toLowerCase().split('')
    s = s.split('')
    while(left < right){
        console.log(lowerS[left],lowerS[right])
        if(vowels.includes(lowerS[left]) && vowels.includes(lowerS[right])){
            let tempRight = s[right];
            let tempLeft = s[left];
            s[left] = tempRight
            s[right] = tempLeft
            right--
            left++
        }else if(!vowels.includes(lowerS[left]) && !vowels.includes(lowerS[right])){
            right--
            left++
        }else if( vowels.includes(lowerS[left])){
            right--
        }else{
            left++
        }

    }
    return s.join('')
};