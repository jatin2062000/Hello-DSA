////////////////////////////////// check the square to another array   like   = arr[1,2,3,4]  arr2[1,4,9,16] 


function testSquarToArray(array,array2){

    for(let i=0;i<array.length;i++){
        let helloSquare=false                         /// asume ki i ki value false hai
        for(let j=0;j<array2.length;j++){
            if(array[i]*array[i]===array2[j]){              ////// checking one thing only array(1x1 =1 and check in array2 )
                helloSquare =  true
            }
            if(j===array2.length-1){                    ////// important ki hum ne check kiya hai ki array2 me array k squar hai ki nhi 
                if(!helloSquare){
                    return false;
                }
            }

        }                          
    }
    return true;

}




const result = testSquarToArray([1,2,3,4,5],[1,4,9,16,25])
console.log(result)




//////////////////   useing MAP with same question 


function squarChecking(arr,arr2){
    map = {}
    map1 = {}
  for( item of arr){
  map[item]=(map[item] || 0)+1
 
  }
  console.log("Map",map)

  for( item2 of arr2){
    map1[item2]=(map1[item2] || 0)+1
   
    }
 console.log("Map1",map1)

////////// we want to out the key 
for(key in map){
   // console.log("key",key)
    if(!map1[key*key]){
        return false
    }
    // if(arr.length !== arr2.length){
    //     return false
    // }
    if(map[key]!==map1[key*key]){         //////  checking the value ki squar ki kitne bar hai 1 ka square 
        return false}
}
    return true
}

const res = squarChecking([1,2,3,4,5],[1,4,9,16,25])
console.log(res)

