// Unconditional loops

// for in 
// for of

// for in Loop
// It is used for "objects"

var person = {
    name:"ranga",
    age:30,
    city:"Hyd"
}


var details = ["manga",20,"bng"]


// It is used for static keys
// console.log(person)
// console.log(person.city)
// console.log(person["city"])


// It is used for Dynamic Keys
// for in using object
for(var x in person){
   console.log(x)
    console.log(person[x])
}


// for in using Array 
for(var x in details){
   console.log(x)
    console.log(details[x])
}


// for of loop using array only to retrive the data
for(var y of details){
    console.log(y)
    
}


