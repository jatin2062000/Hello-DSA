//////////////  -> Search element in array  <-////////////////

function searchElement(arr){
    let SearchTheElement=12324
    let storeFinallResult=0
   for(let i=0;i<arr.length;i++){

    if(arr[i]===SearchTheElement){

        storeFinallResult=i
    }
   }
   return storeFinallResult 
}
const ress= searchElement([1,2,3,445,23,545,12324])
console.log(ress)