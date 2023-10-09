// hayduke415
// hayduke415
// Oct 09, 2023 14:47

// Details
// Solution
// TypeScript
// Runtime
// 87 ms
// Beats
// 5.1%
// Memory
// 43.2 MB
// Beats
// 18.94%
// Click the distribution chart to view more details
// Related Tags
// Select tags
// 0/5
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
while(guess(n)!=0){

    if (guess(n) ===0)return n
    if (guess(n-1000) === -1) n-=1001
    if (guess(n-100) === -1) n-=101
    if (guess(n-10) === -1) n-=11
    if (guess(n) === -1) n--
    if(guess(n+1000) === 1) n+=1001
    if(guess(n+100) === 1) n+=101
    if(guess(n+10) === 1) n+=11
    if(guess(n) === 1) n++
}
return n
};