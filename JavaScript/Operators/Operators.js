// Operators

// Arithmetic operators
var a = 20
var b = 10
var c = a + b
console.log(c)


var d = a - b
console.log(d)

var e = a * b
console.log(e)

var f = a / b
console.log(f)

var g = a % b
console.log(g)


var m = 2 ** 5
console.log(m)

var i = a++
console.log(i)

var j = ++b
console.log(j)

var k = --a
console.log(k)

var l = b--
console.log(l)


// Assignment Operators

var A = 10
var B = 20

A += B
console.log(A)


B -= A
console.log(B)

A *= B
console.log(A)


B /= A
console.log(B)


B %= A
console.log(B)


B **= A
console.log(B)


//Comparison Operators

// Relational Operators
// <, >, <=, >=

var M = 10
var N = 20

var P = M > N
console.log(P)

var Q = M < N
console.log(Q)

 
console.log(M <= N)


console.log(M >= N)


//Equality operator

// strictly equality
var a1 = 10
var a2 = '10'

console.log(typeof(a1))
console.log(typeof(a2))
console.log("this "+a1+" and "+a2+" is strictly equality: ",a1 === a2)


// Loose equality
var a3 = 10
var a4 = 10

console.log(typeof(a3))
console.log(typeof(a4))
console.log("this "+a3+" and "+a4+" is loose equality: ",a3 === a4)


// Inequality
var a5 = 20
var a6 = 10

console.log("this "+a5+" and "+a6+" is Inequality: ",a4 != a5)
