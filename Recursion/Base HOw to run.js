//////  Recursion -> recursion call its self 

////////  base question what is recursion

// function Recursion(){
//     Recursion();
// }
// // stack overflow error was there becoz they call constinus
// Recursion()

///////////////////////////////////////////////////////////

///difference B\W Recursion approach and Iterative approach 

// Recursion approach -> use recursion solve the problem and without loop, and only calling functions(clean and fast)
// Iterative approach -> use loop for solve the problem 



///////////////////////////////////////////////////////////

///   fibonacci series  2 number add like 0+1 = 1 , 1+1=2

function fibonacci(number){
    let sum =0
    let arr = [1,1]
    for(let i=0;i<number;i++){
        sum = arr[i]+arr[i+1]
       arr.push(sum)
    }
    console.log(arr)

}
fibonacci(8)

