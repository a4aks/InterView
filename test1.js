
// // constructor function : - A constructor is a special type of function that creates and initialises an object instance of 
// // a class. 
// // Why the constructor is needed: sometimes.
// // An object is a collection of related data or functionality in the form of Key.
// //Constructor is a function that initilalises an object.

// function Person(first,last, age){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age
// }

// Person.prototype.isMarried = 'True'

// var person = new Person('Ashish','Sinha','28')
// var person1 = new Person('Sumit','SInha','23')
// console.log(person)
// console.log(person.age)
// console.log(person1.isMarried)

// // WHat is Function constructor?
// // The function constructor creates a new Function   object. Calling the constrctor directly can create a functions dy
// // namically, but there is some issues with global objects.

// const sum = new Function ('a','b', 'return a+b')

// console.log(sum(2,6));

// // Array is also a constrctor when an array basiically what we create we just create an instance of that array

// // new Date ()
// let nums = []
// for (let i = 1; i < 6; i++) {
//   nums.push(function() {console.log(i)});
// }
// nums.forEach(fn => fn());

// function foo(x = 11, y = 31) {
//     console.log( x + y );
//   }
  
//   foo(null, 6);
//   foo(undefined, 6);
let o = [1,4], a, b, c, p;
p = [a,b,c] = o;
console.log(p === o);

