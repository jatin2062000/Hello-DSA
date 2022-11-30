///////////////   --    helper recursive method 
///////////////  --  [1,2,3,4,5,6,7,8,9] ->  array 
///////////////  --  [1,3,5,7,9]  -> output
//////////////      array[0] %2!==0

function helloRecursive(array){
let result = []

    function helperRecursive(InpUtArray){

        if(InpUtArray.length===0){
            return false 
        }
        if(InpUtArray[0] %2 !==0){
            result.push(InpUtArray[0])
        }
        helperRecursive(InpUtArray.slice(1))    ////->//// slice is leye hai taki bar jab function call ho toh aage ki index value ko le 
    }
helperRecursive(array)
return result
}
const res = helloRecursive([1,2,3,4,5,6,7,8,9])
console.log(res)


//////////// recursive method is function k function that shit,, timeC=n(1)



////////////////////////use BF


function helloLoop(loop){
    map=[]
    for(let item of loop){
        if(item %2!==0){
            map.push(item)
          }}
    return map
}
const res1 = helloLoop([1,2,3,4,5,6,7,8,9])
console.log(res1)



////////////////////////////////// timeC= O(n)