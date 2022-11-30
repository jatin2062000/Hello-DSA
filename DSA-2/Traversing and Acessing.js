/////////  -> (Array traversing and  accessing in Data structure )
//////// traversing -> one by one move to next element and checkout ...... 
//////// Accessing -> single element accsessing ....

/////////   Traversing Example ////////

function Traversing(array){
    for(let i=0;i<array.length;i++){
        console.log("Traversing",array[i])
    }
   
}
const res= Traversing([1,2,3,445,23,545,12324])




///////// Accessing Example //////////



function Accessing(arr){
    let x=5
   console.log("Accessing",[arr[x]])
   
}
const ress= Accessing([1,2,3,445,23,545,12324])