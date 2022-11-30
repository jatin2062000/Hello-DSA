

// var lengthOfLongestSubstring = function(s) {
//     let start=0                  
//     let end=0                     
//     let set=new Set()  
//     let maxLength=0
// while(end<s.length){
// if(!set.has(s[end])){    
//  set.add(s[end])
 
//  end++
//  maxLength=Math.max(maxLength,set.size)
//  }
// else{
//    set.delete(s[start])
//    start++
// }
// }


// return maxLength
// }
// const res2 = lengthOfLongestSubstring("abcabcabc")
// console.log(res2)


//////////////////////////////////////////////     simple way

// function countUnique(iterable) {
//     return new Set(iterable).size;
//   }
  
//   console.log(countUnique('banana')); //=> 3
//   console.log(countUnique([5,6,5,6])); //=> 2




  
function countUniqueNumber(array){
    map={};
    let count = 0
    let hello ={}
    for(item of array){
        map[item]=(map[item] || 0)+1
    }
    for(key in map){
    count++
    }
    hello=count

    return hello
    }
    const res = countUniqueNumber("abcabcabc")
    console.log(res)
