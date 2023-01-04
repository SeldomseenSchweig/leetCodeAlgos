// Runtime
// 106 ms
// Beats
// 5.9% // I don't know mine runs slowly, it is O(n)... I think...
// Memory
// 42.2 MB
// Beats
// 15.81%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = {}
    pattern = pattern.split('')
    s = s.split(' ')
    if(s.length !== pattern.length) return false
    for(let i = 0; i < pattern.length;i++){
        if(!map[pattern[i]]){
            map[pattern[i]] = s[i]
        }

        if(map[pattern[i]] !== s[i]){
            return false
        }
    }
    let vArr = Object.values(map)
    let freq = {}
    for(let i = 0; i < vArr.length; i++){
        let count = freq[vArr[i]] || 0
        count = count + 1
        freq[vArr[i]] = count
        console.log(freq[vArr[i]])
        if(freq[vArr[i]] > 1){
            return false
        }
    }
    return true

};