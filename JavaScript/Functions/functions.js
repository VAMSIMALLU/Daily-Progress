// functions

// what is a function
//  It is a block of code to do some task and return some value

// how define a function

// a)function declaration
// function function_name(){
// return }

function hello(){
    return'hello world'
}

console.log(hello())

// b)function expression

//  i)Named function
//    var hello = function Hello(){
//      return }

var hello1 = function Hello(){
    return 'hello world from named function'
}
console.log(hello1())

//  ii)Ananymous function
//    var hello = function(){
//       return }

var hello2 = function(){
    return'hello world from ananymous function'
}
console.log(hello2())

//  iii)Arrow function
//     var hello = () => {
//   }

var hello3 = () => 'hello world from arrow function';
console.log(hello3())

  