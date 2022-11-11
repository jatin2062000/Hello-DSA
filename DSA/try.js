




// function checkSquare(array,array2){
// map={};
// map2={};
// for(item of array){
//     map[item]=(map[item] || 0)+1
    
// }
// console.log("map",map)

// for(item2 of array2){
//     map2[item2]=(map2[item2] || 0)+1
// }
// console.log("map2",map2)

// for(key in map){   
//     console.log("key",key) 
//     if(!map2[key*key]){
//         return false;
//     }
//     if(array.length!==array2.length){
//         return false
//     }
// }
// return true;
// }

// const res = checkSquare([1,2,3,4],[1,4,9,16])
// console.log(res)
//   //liner   o(n) 















function countUniqueNumber(array){
map={};
let count = 0
for(item of array){
    map[item]=(map[item] || 0)+1
}
for(key in map){
count++
}
return count
}
const res = countUniqueNumber([1,2,3,4,5,6,6,6,6,6,7,7,7,7,7,8,8,9,9,9,9,9])
console.log(res)



//////////////  time = O(n)
/////////////   space = O(1)

function countUniqueNumbers(array0){
let i=0
for(let j=1;j<array0.length;j++){
    if(array0[i]!==array0[j]){
        i++
        array0[i]=array0[j]
    }
}
return i+1
}                                                                           
const res1 = countUniqueNumbers([1,2,3,4,5,6,6,6,6,6,7,7,7,7,7,8,8,9,9,9,9,9])
console.log(res1)