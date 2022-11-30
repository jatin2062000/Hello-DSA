function binarySearch(arr,start,end,num){
  

    if(end>=start){

      let mid=Math.round((start+end)/2)
      if(num==arr[mid])return mid
      else if(num>arr[mid])return binarySearch(arr,mid+1,end,num)
      else if(num<arr[mid])return binarySearch(arr,start,mid-1,num)
  
    
    }
  
return false

  }
let arr=[1,2,3,4,5,6]
let n=arr.length
let result=binarySearch(arr,0,n-1,5)
console.log(result)