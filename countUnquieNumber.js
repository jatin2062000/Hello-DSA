function countUniqueNumber(array1){
    if(array1.length>0){
        let i =0 
        for(let j=1;j<array1.length;j++){
            if(array1[i]!==array1[j]){
                i++;
                array1[i]=array1[j]
            }
        }  
         return i+1;
    }}
const res = countUniqueNumber([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9])
console.log(res)

/////////////////////////////// simple way to do 

function countUnique(iterable) {
    return new Set(iterable).size;
  }
  
//   console.log(countUnique('banana')); //=> 3
  console.log(countUnique([1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,6,6,6,6,6])); //=> 2