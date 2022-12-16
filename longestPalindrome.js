/**
 * @param {string} s
 * @return {number}
 */
 let longestPalindrome = function(s) {
    let map = {}
    let res = 0
    for(let i = 0; i < s.length; i++){
        if( map[s[i]]=== undefined){
            map[s[i]] = 1
        }else if(map[s[i]] === 1){
            map[s[i]] = undefined
            res+=2
        }

    }
    if(s.length > res){
            res++
        }
    return res
    
};