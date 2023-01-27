// Runtime
// 410 ms
// Beats
// 14.8%
// Memory
// 52.3 MB
// Beats
// 5.17%
// Click to check the distribution chart
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var repeatedSubstringPattern = function(s) {

    let flag = false
     
    let left = ''
    let multi = []
    if(s.length === 0 || s.length === 1 ) return false

    for(i = 1; i < Math.ceil(s.length/2)+1; i++){
        if(s.length % i === 0)
        multi.push(i)
    }
    console.log(multi)
    for(i = 0; i < multi.length; i++){
        left = s.slice(0, multi[i])
        let right = multi[i]
        for(j = right; j+multi[i] < s.length+1;j+=multi[i]){
            
            if(left === s.slice(j, j+multi[i])){ 
                console.log(left, s.slice(j, j+multi[i]), j, j+multi[i])
                flag = true
                }else if (left !== s.slice(j, j+multi[i])){
                    console.log(left, s.slice(j, j+multi[i]), j, j+multi[i])
                    flag = false
                    break
                }       
        }
        console.log(flag)
        if(flag === true) return true
    }
    
    console.log(flag)
    return flag
};