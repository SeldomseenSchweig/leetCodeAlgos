// Runtime
// 353 ms
// Beats
// 5.17%
// Memory
// 51.4 MB
// Beats
// 5.17%
// Click the distribution chart to view more details
// Notes
// Write your notes here
// Related Tags
// Select tags
// 0/5
// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */
var canPlaceFlowers = function(flowerbed, n) {

let left  = 0
let right = 1
if(n===0) return true
if(!flowerbed.includes(1) && n===1 && flowerbed.length ===1 ) return true

while( left < flowerbed.length){
    console.log(left)
    if(flowerbed[left] === 0 && flowerbed[right]===0 && left === 0){
         n--
         flowerbed[left]=1, 
         left++ 
         right++
         if(n===0) return true
    }else if(flowerbed[left]===0 && flowerbed[left-1] === 0 && flowerbed[right]===0){
        flowerbed[left]=1
        n--
        left++
        right++
        if(n===0) return true

    }else if(
        left=== flowerbed.length-1 && flowerbed[left]===0 && flowerbed[left-1]===0
    ){
        left++
        right++
        n--
        if(n===0) return true
    }else{
    left++
    right++
    }
}
return n <=0
};