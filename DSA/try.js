




// // // // // function checkSquare(array,array2){
// // // // // map={};
// // // // // map2={};
// // // // // for(item of array){
// // // // //     map[item]=(map[item] || 0)+1
    
// // // // // }
// // // // // console.log("map",map)

// // // // // for(item2 of array2){
// // // // //     map2[item2]=(map2[item2] || 0)+1
// // // // // }
// // // // // console.log("map2",map2)

// // // // // for(key in map){   
// // // // //     console.log("key",key) 
// // // // //     if(!map2[key*key]){
// // // // //         return false;
// // // // //     }
// // // // //     if(array.length!==array2.length){
// // // // //         return false
// // // // //     }
// // // // // }
// // // // // return true;
// // // // // }

// // // // // const res = checkSquare([1,2,3,4],[1,4,9,16])
// // // // // console.log(res)
// // // // //   //liner   o(n) 















// // // // function countUniqueNumber(array){
// // // // map={};
// // // // let count = 0
// // // // for(item of array){
// // // //     map[item]=(map[item] || 0)+1
// // // // }
// // // // for(key in map){
// // // // count++
// // // // }
// // // // return count
// // // // }
// // // // const res = countUniqueNumber("abcabcabc")
// // // // console.log(res)



// // // // //////////////  time = O(n)
// // // // /////////////   space = O(1)

// // // // function countUniqueNumbers(array0){
// // // // let i=0
// // // // for(let j=1;j<array0.length;j++){
// // // //     if(array0[i]!==array0[j]){
// // // //         i++
// // // //         array0[i]=array0[j]
// // // //     }
// // // // }
// // // // return i+1
// // // // }                                                                           
// // // // const res1 = countUniqueNumbers([1,2,3,4,5,6,6,6,6,6,7,7,7,7,7,8,8,9,9,9,9,9])
// // // // console.log(res1)




// // // function lucky(array){
// // //     let map={}
// // // for(element of array){
// // //     map[element]=(map[element]||0)+1
// // // }
// // // let print =0
// // // for(key in map){
// // //     console.log(map[key])
// // // if(map[key]>1){
// // //     print=key
// // // }
// // // }
// // // return print
// // // }

// // // const res=lucky("aaaaaaaaaabbbbccccccca")
// // // console.log(res)


// // ////// palindrome 
// // ///// 
// // // function case1(string){
// // // let print = string.split("").reverse().join("")
// // //  return string===print
// // // }      
// // // const print1111= case1("level")
// // // console.log(print1111)


// // // //////////////

// // // function case2(str){
// // //     let left=0
// // //     let rigth= str.length-1;

// // //     while(left<rigth){
// // //         if(str[left]!==str[rigth]) return false
// // // left++
// // // rigth--
// // //     }
// // //     return true
// // // }
// // // const print11111= case2("level")
// // // console.log(print11111)

// // ////////// identifing the question of sliding window 
// // ///////////////   1) array +  string 
// // /////////////// 2) sub array + sub string 
// // /////////////// 3) window size (k)=> fixed size 

// // ////////length = 9 total window =3 +1=7   method 

// // // function subarray(array,num){
// // //     let max=0
// // //     for(let i =0 ; i<array.length-num+1;i++){
        
// // //         temp =0
// // //         for(let j =0 ;j<num;j++){
            
// // //             temp+=array[i+j]  
// // //         }
// // //         if(temp>max)
// // //         max=temp
// // //     }   
// // //     return max          
// // // }

// // // const res1 = subarray([1,2,3,4,5,6,7,8,9],3)
// // // console.log(res1)


// // /////////////////////////   -> // singleNumber

// // // function singleNumber(array,n){
// // // for(let i=0;i<array.length;i++){
// // //     if(array[i]==n){
// // //         return true
// // //     }
// // // }
// // // return false

// // // }

// // // const res1 = singleNumber([1,2,3,4,5,6,7,8,9],9)
// // // console.log(res1)


// // /////////////// linear search algorithm 

// // // const users=[{username:"jatin",email:"jatin123@gmail.com"},
// // //              {username:"yousuf",email:"yousuf123@gmail.com"},
// // //              {username:"lucky",email:"lucky123@gmail.com"} ]

// // //              function searching(){
// // //                 for(item of users){
// // //                 if(item.username=="jati"){
// // //                     return true
// // //                 }}
// // //                 return false
// // //              }
// // //              const res = searching()
// // //              console.log(res)

// // //              function searching1(array,se){
// // //                 for(item of array){
// // //                     if(item['username']===se){
// // //                         return true
// // //                     }
// // //                 }
// // //                 return false
// // //              }
// // //              const res1 = searching1(users,"jatin")
// // //              console.log(res1)

// // // var fourSum = function(nums,num) {
// // //     max =0
// // //     for(let i=0;i<nums.length-target+1;i++){
// // //         temp=0
// // //         for(let j=0;j<num;j++){
// // //             temp+=nums[i+j]
// // //         }
// // //        if(temp===target){
        
// // //         return temp
// // //        }
// // //     }
// // //  }
// // //  const res1 = fourSum([1,1,1,1,1,1],5)
// // //          console.log(res1)


// // //    ///////      [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


// // //    function sumofZer(array){
// // //     for(let i = 0 ; i<array.length;i++){
// // //         for(let j = 1 ; j<array.length;i++){
// // //             if(array[i]+array[j]===8){
// // //                 return [array[i],array[j]]
// // //             }
// // //         }
// // //     }
// // // }
// // // const result1 = sumofZer([-1,2,3,-8,5,6,7,8,-1,-2,-3,-4])
// // // console.log(result1)


// // function maximumSumSubarray(K, Arr, N){
     
// //     let sum =0
// //     let max=0
// //   for(let i=0;i<K;i++){
// //       sum+=Arr[i]
// //   }
// //   if(K==N) return sum
// //   for(let j=K;j<N;j++){
// //       sum=sum+Arr[j]-Arr[j-K]
    
// //       if(sum>max){
// //           max=sum
// //       }
      
      
      
// //   }  return max
// // }

// // const result1 = maximumSumSubarray(4,[100, 200, 300, 400],4)  
// // console.log(result1)


// // function count(array){
// //     let map={}
// //     for(item of array){
// //         map[item]=(map[item]||0)+1

// //     }
// //     let temp=0
// //     let max =2
// //     for(key in map){
// //         if(array[key]<max){
// //             temp=array[key]
// //         }
// //     }
// //     return temp
// // }
// // const res= count([1,2,3,4,5,1,2,3,4,1,1,1,1,2,2,2,2,2,2,2,2,2])
// // console.log(res)

// //////////////////// Given an array of size N. The task is to find 
// /////////////////// the maximum and the minimum element of
// //////////////////  the array using the minimum number of comparisons.
// // Input: arr[] = {3, 5, 4, 1, 9}
// // Output: Minimum element is: 1
// //               Maximum element is: 9

// // Input: arr[] = {22, 14, 8, 17, 35, 3}
// // Output:  Minimum element is: 3
// //               Maximum element is: 35

// let arr = [22, 14, 8, 17, 35, 3]
// let hello =arr.sort()
// hello.sort()
// console.log(hello)


// function partition(arr,start=0,end=arr.length-1){
//     var pivot=arr[start]
//     let swapIdx=start
//     for(let i=start+1;i<=end;i++){
//       if(arr[i]<pivot){
//         swap(arr,swapIdx,i)
//       }
//     }
//     swap(arr,start,swapIdx)
//     return swapIdx
//     }
    
//     function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//       let pivotIndex=partition(arr,left,right)
//       quickSort(arr,left,pivotIndex-1)
//       quickSort(arr,pivotIndex+1,right)
//     }
//     return arr
//     }
//     console.log(quickSort([2,8,9,6,3,0,1,4,7]))

function isCapital(arr){
    if(arr.length==0)return []
   let res=[]  //[Xyz]
               // [X]                [yz]
   let n= arr[0][0].toUpperCase()+ arr[0].slice(1)  //[Xyz]
   res.push(n)
   return res.concat(isCapital(arr.slice(1)))  //[Abc,Pqr]
}
console.log(isCapital(["xyz","abc","pqr"]))