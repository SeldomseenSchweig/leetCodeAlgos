Runtime
277 ms
Beats
5.43%
Memory
52.7 MB
Beats
5.54%
Click to check the distribution chart
Notes
Write your notes here
Related Tags
Select tags
0/5
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // let setS = new Set(s)
    // let setT =  new Set(t)
    // if( setT.size === 1){
    //     return t[0]
    // }
    // for(let i = 0; i < t.length; i++){
    //     if(!setS.has(t[i])){
    //         return t[i]
    //     }
    // }
    let freqS = {}
    for(let i = 0; i < s.length; i++){
        freqS[s[i]] ? freqS[s[i]]++ : freqS[s[i]] = 1;
        console.log(s[i], freqS[s[i]]);
    }

    let freqT = {}
    for(let i = 0; i < t.length; i++){
        freqT[t[i]] ? freqT[t[i]]++ : freqT[t[i]] = 1;
        console.log(t[i], freqT[t[i]] );
    }
    for( const val in freqT ){
        if(freqT[val] !== freqS[val]){
            return val
        }
    }
    
};