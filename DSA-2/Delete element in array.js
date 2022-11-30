///////////////// ->   Delete element in array  <-  ////////////////
function DeleteElement(array){
    let DeletePosition= 2;
for(let i=DeletePosition; i<array.length-1;i++){
 
    array[i]=array[i+1]      /// 1st we select the element and then replace with to element  
   
}
array.length=array.length-1


return array
}

const res=DeleteElement([1,2,3,4,5,6])
console.log(res)