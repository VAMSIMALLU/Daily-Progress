//Reference Datatypes

// Array
// object
// fuctions
// es->6 map, weak map, set, weak set

// Array
// collection of data(homogeneous(same kind of data) or heterogeneous)

// apple banana orange \ homogeneous data
// 1 2 3 \ homogeneous data

// 1,2,3....apple,banana,true\ heterogeneous data


// var Apple = "apple"
// var Banana = "Banana"

// var A = [1,2,3,Apple,Banana,"vasi",true,false,null,undefined,[10,20,30,40,50]]

// console.log(A.length)
// console.log(A)


var A = {
    empname : "vasi", 
    empid : 123,
    phno : 9837282872,
    address : "Hyderabad",
    empmail : 'vasi@gmail.com'
}

console.log(A["empmail"])
console.log(A)
console.log(A.address)

// functions
// function declaration
function hello(){
}

// function expression
function hello(){
    console.log("function")
    var a = 10
    var b = 10
    console.log(a)
    console.log(b)
} 
hello()


// Named function expression
var B = function hello(){
    console.log("named function expression")
    var a = 10
    var b = 10
    console.log(a)
    console.log(b)
}
B()

// ananymous function
var C = function(){
    console.log("Anaymous function expression")
    var a = 10
    var b = 10
    console.log(a)
    console.log(b)
}
C()


// Arrow function
var D = () => {
    console.log("Arrow function expression")
    var a = 10
    var b = 10
    console.log(a)
    console.log(b)
}
D()


//return 
function hi(){
    console.log("return_function_example")
    var a = 10
    var b = 10
    console.log(a)
    console.log(b)
    return "this a return function"
}
console.log(hi())


// return in another type
function js(){
    console.log("another_type_of_return_function")
    var a = 10
    var b = 10
    console.log(a)
    console.log(b)
    return "this a return function"
}

var g = js()
console.log(g)


let d1 = new Date();

console.log(d1) 

