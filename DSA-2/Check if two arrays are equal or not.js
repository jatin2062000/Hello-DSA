///////////////////Check if two arrays are equal or not

function check(A,B){
      
    A.sort()
    B.sort()
    for(let i=0;i<A,B.length;i++){
        if(A[i]!=B[i]){
            return false
        }
        return true
    }
    
  }
  const res= check([1,2,3,4,6],[1,2,3,4,5])
  console.log(res)