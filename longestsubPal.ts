// hayduke415
// Jul 10, 2023 12:27
// Details
// Solution
// TypeScript
// Runtime
// 2687 ms
// Beats
// 20.96%
// Memory
// 49.3 MB
// Beats
// 39.42%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
function longestPalindrome(s: string): string {
    let res = ""
     let arr = s.split("");
    if(arr.length === 1) return s;
    if(new Set(arr).size === 1) return s;

    for(let i = 0; i < s.length; i++){
        let right = s.length
        if(res.length >= arr.slice(i, right).length+1) return res
        while(right != 0){
            
            let sub =  arr.slice(i, right)   
            let isPal = pal(sub)
            if(isPal && sub.length > res.length){
                res = sub.join("")
                break
            }
            right--
        }

    }

    return res
}



function pal(x){
    let left = 0;
    let right = x.length-1
    while (left <=right){
        if(x[left] != x[right]){
            return false
        }
        left++
        right--
    }

    return true


}

