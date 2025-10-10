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



function abcd(a,b){
    console.log(a,b)
}

abcd(10,20,30,40)  //in this function we have 4 arguments but 2 parameters only so,to get remaining  we have a two ways
// i)arguments object E.S-5
// ii)rest parameters  E.S-6


// i)arguments object
function fghi(f,g){
    console.log(f,g)
    console.log(arguments) 
}
fghi(60,70,80,90)



// ii)Rest Parameter
// rest parameter is also a parameter
// how to define a rest parameter "...restparameter"
// reset parameter must be the last parameter in the parameter list

function restparameter(a,b,d,e,f,...c){
    console.log(a,b,d,e,f)
    console.log(c)
}
restparameter(1,2,3,4,5,6,7,8,9,10,11,12)



// Arrow function E.S-6

var z = (val1,val2,val3,val4,...val5) => {
    console.log(val1,val2)
    console.log(val3,val4)
    console.log(val5)
}
z(100,200,300,400,500,600,700,800,900,1000)