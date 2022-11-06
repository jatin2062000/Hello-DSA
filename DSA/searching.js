/////// ---- find in arry a number---
function searching(arr,x){
    for(let i =0 ; i<arr.length;i++){
        if(arr[i]==x){
            return "YES";
        }
    }
    return "NO"
}
const hello = searching([1,2,3,4,5],[8])
console.log(hello)


//////////--- Given a sorted array of size N and an integer K, find the position at which K is present in the array using binary search.

/////// - geeksforgeeks

   function binarysearch(arr, n, k) {
        let find = false 
        for(let i=0;i<arr.length;i++){
            if(arr[i] == k ){
                find = true 
                return i
            }
            
        }
         if(!find){
        return -1
    }
    }
    const hi = binarysearch([],[4],[8])
console.log(hi)



////// ---- Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

/////// - geeksforgeeks

function MissingNumber(array,n){
    let total=n*(n+1)/2;
    for(let i=0;i<n-1;i++){
        total-=array[i]
    }
      return total
}

const result = MissingNumber([1,2,3,5],[5])
console.log(result)



