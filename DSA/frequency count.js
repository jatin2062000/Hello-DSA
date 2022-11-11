// // ////////////////////////////////////-----The tally or frequency count is the calculation of how many people fit into a certain category or the number of times a characteristic occurs

// // ////////////////////////////////////------ find square in arry

// // function countSquare(arry1,arry2){
// //     for(let i=0 ; i<arry1.length; i++){
// //         let nosquare1 = false;
// // for(let j=0 ; j<arry2.length; j++){
// //     if(arry1[i]*arry1[i] === arry2[j]){
// //          nosquare1 =  true;
// //         }
// //         if(j ===  arry2.length -1){
// //         if(!nosquare1)
// //         return false;

// //         }
// // }
// //     }
// //     return true;
// // }
// // const result  = countSquare([1,2,3,4],[1,4,9,16])

// // console.log(result)




// // ///////////////////////////////// ------    count this only  number how any time in one array 
// // function countFreq(arry){
// //     let storehere ={}
// //     for (let i =0 ; i<arry.length; i++){
// //         storehere[arry[i]] = (storehere[arry[i]] || 0) + 1
// //     }
// //     console.log(storehere)
// // }
// // countFreq([1,2,3,4,5,6,7,8,8,8,8])

// // ////////////////////////////////-- now count only letter kon kitne bar aaya hai

// // function countFreq(arry){
// //     let storehere ={}
// //     for (let i =0 ; i<arry.length; i++){
// //         storehere[arry[i]] = (storehere[arry[i]] || 0) + 1
// //     }
// //     console.log(storehere)
// // }
// // countFreq("hello my dost")


// // ///////// ----- find only one number how many times they reapet 
function countsingleNumber(n){
let cnt = 0;
        for(let i = n-1; i >= 0; i++) {
            if (a[i] == 0) {
                cnt++;
            }
            else 
                return cnt;
        }
        return cnt;
    }
    const print1 = countsingleNumber([1,2,3,4,5,6,0,0,0,0,0,0,0,1,2,3,4,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1])
    console.log(print1)



// /////////////-------------------  reverse array
// ////----

// function countFreq(arry){
//     let storehere ={}
//     for (let i =0 ; i<arry.length; i++){
//         storehere[arry[i]] = (storehere[arry[i]] || 0)+1
//     }
//     console.log(storehere)
// }
// countFreq([1,2,3,4,5,6,7,8,8,8,8])