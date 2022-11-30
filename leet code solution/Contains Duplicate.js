/////////////////LeetCode Contains Duplicate

function removeDuplicates(array){  
    var collect = []  
    for( value of array){  
        if(collect.indexOf(value)==-1){      //// indexOf always return -1
        //    console.log(value)
            collect.push(value)
        }  
    }  
    // console.log(collect)
    return collect
}  
const res =  removeDuplicates(["green","black","black"])
/////const colors = [1,2,3,4,1,2,3,1,2,3,4]
console.log(res)  






///////////// indexOf samjhne k leye
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("hello","world");
// console.log(result)