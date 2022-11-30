///////////// 1
// let a=[]
// let b=[]                      /// memory location Two are don;t have same location 
// console.log(a==b)
// console.log(a===b)   

///////// 2

// let a=[]                                      ///// A ki memory location ko b me dal deya fir print kara ki true
// let b= a;
// console.log(a==b)
// console.log(a===b)

////// 3

// let a=[20] 
// let b=[20]  
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])


////// 4
// let a=[1,2,3,4,5,6] 
// let b= {name:"jatin"}        ///// only distrub krne k leye
// console.log(...a)            //////// ... se distrering 

/////// 5
//                                ////// special type number like ( a%2)= NaN ( not a number )
// console.log(typeof NaN)        /////// NaN is number type 


/////// 6

// let data = 10 - -10                                     ////////  (-4-2)= 6 like this 
// console.log(data)


///////////////   7

// const set = new Set([1,1,2,4,5])     /////// remove the all duplicate element 
// console.log(set)

///////////////  8

// let data = {name:"jatin"}                    ////// delete kare gya toh return true and nhi hua toh false
// console.log(delete data.name)

////////////// 9

// const data = { name : "jatin"}   ///// we can't delete the veriable 
// console.log(delete data)


///////////// 10
 
// const data = ["jatin","hello","hi"]          //// like we accses the array value useing array[0] same thing is here 
// const [y] = data
// console.log(y)

////////////// 11

// const data = ["jatin","hello","hi"]  ///// useing , here then move to 2nd place
// const [,y] = data
// console.log(y)
 
/////////////// 12

// const data = {name:"jatin",sts:"hello",age:2}
// const {name}=data     /////// out ther name out into data
// console.log(name)

/////////////////////   13  marge 2 object  

// let data ={name:"jatin",sts:"hello",age:2}         //////  marge 2 object 
// let info = {nameaaaaa:"jatin11",staaaaaa:"hello111",ageaaaaa:2111}
// print1 = {...data,...info}
// console.log(print1)
/////////////////////////////// output
// {
//     name: 'jatin',
//     sts: 'hello',
//     age: 2,
//     nameaaaaa: 'jatin11',
//     staaaaaa: 'hello111',
//     ageaaaaa: 2111
//   }

/////////////    14 

// let data ={name:"jatin",sts:"hello",age:2}         
// let info = {nameaaaaa:"jatin11",staaaaaa:"hello111",ageaaaaa:2111}
// print1 = {data,...info}     ///// here we con't do distrustur data that why data print as a as
// console.log(print1)
////////////////////////// output
// {
//     data: { name: 'jatin', sts: 'hello', age: 2 },
//     nameaaaaa: 'jatin11',
//     staaaaaa: 'hello111',
//     ageaaaaa: 2111
//   }


/////////////  remove the elelemt in array
// let data = [1,2,3,4,5,6]
// data.length=2
// console.log(data)


/////////   sum all array

//  let data = [1,2,3,4,5,6]
//  let sum = data.reduce((x,y)=>x+y)  ///// want to + - % * all work gud
//  console.log(sum)
 
//////////  plus 1 
// let x= 10
// x++                   ///// simple plus one 
// x=(x+=20)            //// plus 20 in x = 30 

// console.log(x)

// let A=20 
// let b= 200

//  let x = [A,b]=[b,A]
// console.log(x)