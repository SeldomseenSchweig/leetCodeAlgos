// Jul 03, 2023 15:15
// Details
// Solution
// TypeScript
// Runtime
// 1240 ms
// Beats
// 5.3%
// Memory
// 53.6 MB
// Beats
// 6.57%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
function lengthOfLongestSubstring(s: string): number {

    let count = 0;
    let answer = 0;
    let set = new Array()
    if(s.length == 0) return 0
    for(let i = 0; i < s.length; i++){
        if(!set.includes(s[i])){ 
            set.push(s[i])
            count++
            }else if (set.includes(s[i]) && count >= answer){
                answer = count; 
                set = set.splice(set.indexOf(s[i])+1, i)
                console.log("set: ",set)
                set.push(s[i]);
                count = set.length
            }else if (set.includes(s[i]) && count < answer){
                 set = set.splice(set.indexOf(s[i])+1, i)
                 set.push(s[i]);
                 count = set.length
            }

    }
    console.log(set)
    if(count >= answer){
        return count
    }
    return answer

};