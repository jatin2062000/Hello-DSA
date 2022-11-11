function sumofZer(array){
    for(let i = 0 ; i<array.length;i++){
        for(let j = 1 ; j<array.length;i++){
            if(array[i]+array[j]===0){
                return [array[i],array[j]]
            }
        }
    }
}
const result1 = sumofZer([-1,2,3,-8,5,6,7,8,-1,-2,-3,-4])

// time complexity (  O(n^2)  )
// quadratic 

console.log(result1)



/////////// imporve code lets convert of time complixity is O(n)

function sumZeroBytwoPointer(array1){

    let leftSideOfArray = 0
    let rightSideOfArray = array1.length-1
    while(leftSideOfArray<rightSideOfArray){
    sum=array1[leftSideOfArray]+array1[rightSideOfArray]
    if(sum===0){
        return [array1[leftSideOfArray],array1[rightSideOfArray]]
    }else if(sum>0){
        
        leftSideOfArray++;
    }else{
        rightSideOfArray--;
    }
    
}}
const result = sumZeroBytwoPointer([-2,-3,-4,-5,1,2,3,4,5])

// time complexity (  O(n2)  )
// linaer

console.log(result)


