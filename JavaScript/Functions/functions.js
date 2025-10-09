// functions

// what is a function
//  It is a block of code to do some task and return some value

// how define a function

// a)function declaration
// function function_name(){
// return }

// function hello(){
//     return'hello world'
// }

// console.log(hello())

// // b)function expression

// //  i)Named function
// //    var hello = function Hello(){
// //      return }

// var hello1 = function Hello(){
//     return 'hello world from named function'
// }
// console.log(hello1())

// //  ii)Ananymous function
// //    var hello = function(){
// //       return }

// var hello2 = function(){
//     return'hello world from ananymous function'
// }
// console.log(hello2())

// //  iii)Arrow function
// //     var hello = () => {
// //   }

// var hello3 = () => 'hello world from arrow function';
// console.log(hello3())



// arguments and parameters

// arguments
// arguments are the values which are given at the time of function calling

// parameters (or) place holders
// parameters are used to store the values of the function declaration

// function declaration
function add(a,b){ //parameters
    console.log(a+b)
}
// function calling
add(2,3)  //arguments


function add(a,b){ //parameters
    console.log(a-b)
}
add(50,20) //arguments


// Default parameter

// one type
function add(a=10,b){
    console.log(a,b)
    console.log(a+b)
}

add(5,6)

// second type
function add(a=9,b){
    console.log(a,b)
    console.log(a+b)
}
add(undefined,7)


// third type
function add(a,b){
    console.log(a,b)
    console.log(a+b)
}
add() 


// fourth type
function add(a,b=undefined){
    console.log(a,b)
    console.log(a+b)
}
add(11,19)


// return values from return function
function multiply(a,b){
    console.log(a*b)
    return "multiplication"
}
multiply(100,300)

// one type of return function
console.log(multiply(10,20))

// another type of return function
var a = multiply(40,30) 
console.log(a)