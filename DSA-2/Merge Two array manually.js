//////////////// -> Merge Two array manually  <- //////////////



function Merge(arr,arr2){
    let Data=[]
   for(let i=0;i<arr.length;i++){
      Data[i]=arr[i]

    }
    for(let j=0;j<arr2.length;j++){
        Data[arr.length+j]=arr2[j]
       
    }
    return Data
   }
   

const ress= Merge([1,2,3,445],[66,55,33,66,44])
console.log(ress)



// let arr1=[2,5,12,18,20]
// let arr2=[7,9,11,15,25,28,30,35]
// function merge(arr1,arr2){
//  let arr=[]
//  let i=0,j=0,k=0
//  while(i<arr1.length && j<arr2.length){
//   if(arr1[i]<arr2[j]){
//    arr[k]=arr1[i]
//    i++
//    k++
//   }else{
//    arr[k]=arr2[j]
//    j++
//    k++  
//   }
//  }
//   while (arr1.length>i) {
//    arr[k]=arr1[i]
//    i++
//    k++
//   }
//   while(arr2.length>j){
//    arr[k]=arr2[j]
//    j++
//    k++
//   }

//  return arr
// }
// console.log(merge(arr1,arr2))