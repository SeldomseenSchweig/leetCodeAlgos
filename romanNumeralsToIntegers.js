Runtime
187 ms
Beats
73.80%
Memory
48 MB
Beats
36.48%
Click to check the distribution chart
Notes
Write your notes here
Related Tags
Select tags
0/5
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0
    let convert = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    let i = s.length-1
    while(i != -1){
        if(s[i] === 'I') {
            res+=1
            i--
            }
        if(s[i] === 'V' && s[i-1] != 'I') {
            res+=5
            i--
            }
        if (s[i] === 'V' && s[i-1] === 'I') {
            res+=4
            i-=2
            }
        if(s[i]=== 'X' && s[i-1] != 'I') { 
            res+=10; 
            i--}
        if (s[i] === 'X' && s[i-1] === 'I') {
            res+=9
            i-=2
            }
        if(s[i]=== 'L' && s[i-1] != 'X') { 
            res+=50; 
            i--}
        if (s[i] === 'L' && s[i-1] === 'X') {
            res+=40
            i-=2
            }
        if(s[i]=== 'C' && s[i-1] != 'X') { 
            res+=100; 
            i--}
        if (s[i] === 'C' && s[i-1] === 'X') {
            res+=90
            i-=2
            }
        if(s[i]=== 'D' && s[i-1] != 'C') { 
            res+=500; 
            i--}
        if (s[i] === 'D' && s[i-1] === 'C') {
            res+=400
            i-=2
            }
        if(s[i]=== 'M' && s[i-1] != 'C') { 
            res+=1000; 
            i--}
        if (s[i] === 'M' && s[i-1] === 'C') {
            res+=900
            i-=2
            }
    }
    return res
};