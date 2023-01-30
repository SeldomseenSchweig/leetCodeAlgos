// Runtime
// 1033 ms
// Beats
// 5.1%
// Memory
// 49.9 MB
// Beats
// 28.57%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
var licenseKeyFormatting = function(s, k) {
    let string = s.split('-').join('')
    
    let arr = string.split('')
    if( arr.length === 0) return ''
    if(s.length === 1 ){ return s.toUpperCase()}
    for(let i = arr.length-1, j = 1; i > -1; i--, j++){
        if(arr[i] === arr[i].toLowerCase()) arr[i] = arr[i].toUpperCase() 
        if(j % k === 0 ){
            arr.splice(i, 0, "-")
        }

    }
    let res = arr.join('')
    if(res[0] === '-'){
        return res.slice(1)
    }else if(res[res.length-1] === '-'){
        return res.slice(0,res.length-1)
    }
    return res
};