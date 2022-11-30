//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isCapital(arr){
    if(arr.length==0)return []
   let res=[]  //[Xyz]
               // [X]                [yz]
   let n= arr[0][0].toUpperCase()+ arr[0].slice(1)  //[Xyz]
   res.push(n)
   //return res.concat(isCapital(arr.slice(1)))  //[Abc,Pqr]
   return [res+" "+(isCapital(arr.slice(1)))]
}
console.log(isCapital(["xyz","abc","pqr"]))


