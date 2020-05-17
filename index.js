/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/*
Q1: Given a string, reverse each word in the sentence
Topic: JavaScript
Difficulty: ⭐⭐
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
 */
let str = 'Welcome to this Javascript Guide!';
let reverseStr = str
  .split(' ')
  .map(e => e.split(''))
  .map(item => item.reverse().join(''))
  .join(' ');
console.log(reverseStr); // emocleW ot siht tpircsavaJ !ediuG

/*
Q2: Implement enqueue and dequeue using only two stacks
Topic: JavaScript
Difficulty: ⭐⭐
Answer: Enqueue means to add an element, dequeue to remove an element.
*/
let inputStack = []; // First stack
let outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while (stackInput.length > 0) {
      let elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}

/*
Q3: Write a "mul" function which will properly when invoked as below syntax.
Topic: JavaScript
Difficulty: ⭐⭐
console.log(mul(2)(3)(d)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
*/

const mul = a => b => c => a * b * c;

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
/*
Q4: How to empty an array in JavaScript?
Topic: JavaScript
Difficulty: ⭐⭐
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
How could we empty the array above?
*/
let arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// method - 1
/*
arrayList = [];
console.log(arrayList);
*/

// method - 2
/*
arrayList.length = 0;
console.log(arrayList);
*/

// method - 3
/*
arrayList.splice(0);
arrayList;
*/

// method - 4
while (arrayList.length) {
  arrayList.pop();
}

arrayList;

/*
  Q5: How to check if an object is an array or not? Provide some code.
  Topic: JavaScript
  Difficulty: ⭐⭐
*/
let arrayList1 = [1, 2, 3];
console.log(Array.isArray(arrayList1));

/**
  Q6: How would you use a closure to create a private counter?
  Topic: JavaScript
  Difficulty: ⭐⭐

  The closure has access to variable in three scopes:

  Variable declared in his own scope
  Variable declared in parent function scope
  Variable declared in global namespace
 */
function closureCounter() {
  let counter = 0;
  function increMent(v) {
    return (counter += v);
  }
  function counterValue() {
    return counter;
  }
  return {
    increMent,
    counterValue,
  };
}

const c = closureCounter();
c.increMent(10);
c.increMent(10);
console.log(c.counterValue());

/*
Q7: Write a function that would allow you to do this.
Topic: JavaScript
Difficulty: ⭐⭐
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/

const createBase = base => value => base + value;
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

/*
Q8: How would you check if a number is an integer?
Topic: JavaScript
Difficulty: ⭐⭐
*/
function isInteger(number) {
  if (number % 2 === 0 || number % 2 === 1) {
    return 'integer';
  }
  return 'not interger';
}
console.log(isInteger(2));
console.log(isInteger(2.1));
console.log(isInteger(12.3));
console.log(isInteger(0.1));

/*
Q9: Explain what a callback function is and provide a simple example.
Topic: JavaScript
Difficulty: ⭐⭐
*/

const friends = ['Manik', 'Ruhul', 'Habib', 'Fahamid', 'Roti'];
function modifyPrice(arr, cb) {
  arr.forEach(i => cb(i))
}

modifyPrice(friends, function (data) {
  //  your wish what you want with this data in this callback function 
  console.log(data.toUpperCase());
});
modifyPrice(friends, function (data) {
  //  your wish what you want with this data in this callback function 
  console.log(data.toLowerCase());
});

/*
Q10: FizzBuzz Challenge
Topic: JavaScript
Difficulty: ⭐⭐
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
*/

for (let i = 1; i <= 100; i++) {
  let f = i % 3 === 0;
  let b = i % 5 === 0;
  if (f) {
    if (f && b) {
      console.log(i, 'FizzBuzz');
    } else {
      console.log(i, 'Fizz');
    }
  } else if (b) {
    console.log(i, 'Buzz');
  }
}

/*
Q11: Make this work
Topic: JavaScript
Difficulty: ⭐⭐
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
*/

/*
  function duplicate(arr) {
    return arr.concat(arr);
  }
*/
// or
const arr2 = [1, 2, 3, 4, 5]
function duplicate(arr) {
  return [...arr, ...arr]
}

console.log(duplicate(arr2));

/*
Q12: Provide some examples of non-bulean value coercion to a boolean one
Topic: JavaScript
Difficulty: ⭐⭐⭐
*/

// falsy
/*
0,
null,
undefined,
'',
false

*/
// truthy
/*
' ';
[];
{};
function sayHello() {}
*/

/*
Q13: Given two strings, return true if they are anagrams of one another
Topic: JavaScript
Difficulty: ⭐⭐⭐
For example: Mary is an anagram of Army
*/
/*
var firstWord = "manik";
var secondWord = "shakib";
// aikmn ==b=  abhiks
*/
// amry ==b=  amry
let firstWord = 'Mary';
let secondWord = 'Army';

function anagramsStr(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();
  a = a.split('').sort().join('');
  b = b.split('').sort().join('');
  return a === b;
}

console.log(anagramsStr(firstWord, secondWord)); // true
console.log(anagramsStr('manik', 'shakib')); // false

/*
  Q14: What will be the output of the following code?
  Topic: JavaScript
  Difficulty: ⭐⭐⭐
  var y = 1;
  if (function f() {}) {
    y += typeof f;
  }
  console.log(y);
*/
// 1undefined

/*
  Q15: What will the following code output?
  Topic: JavaScript
  Difficulty: ⭐⭐⭐
  (function() {
    var a = b = 5;
  })();

  console.log(b);

  Answer:
    The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

    var a = b = 5;
    is interpreted the following way:

    var a = b;
    b = 5;
    But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.
*/

/*
  Q16: Write a function that would allow you to do this
  Topic: JavaScript
  Difficulty: ⭐⭐⭐
  multiply(5)(6);
 */

function anotherMultiply(a) {
  return function (b) {
    return a * b
  }
}

console.log(anotherMultiply(10)(5)); // 50 
console.log(anotherMultiply(10)(4)); // 40 

const multiply = a => b => a * b;

console.log(multiply(10)(5)); // 50
console.log(multiply(10)(4)); // 40

/*
  Q17: How does the “this” keyword work? Provide some code examples.
  Topic: JavaScript
  Difficulty: ⭐⭐⭐⭐

*/

const person = {
  name: 'Manik Roy',
  email: 'cm.dpi15@gmail.com',
  printName() {
    return this.name;
  }
}
const person2 = {
  name: 'CM MANIK Roy',
}

console.log(person.printName.bind(person2)()); // CM MANIK Roy
console.log(person.printName()); // Manik Roy

/*
  Q18: Write a recursive function that performs a binary search
  Topic: JavaScript
  Difficulty: ⭐⭐⭐⭐

*/

/*
Q19: What is “closure” in javascript? Provide an example?
Topic: JavaScript
Difficulty: ⭐⭐⭐⭐
*/
/*
A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.
 */
function closureCounter2() {
  let counter = 0;
  function increMent(v) {
    return (counter += v);
  }
  function counterValue() {
    return counter;
  }
  return {
    increMent,
    counterValue,
  };
}

/*
  Q20: What will be the output of the following code?
  Topic: JavaScript
  Difficulty: ⭐⭐⭐⭐
  var output = (function(x) {
    delete x;
    return x;
  })(0);

  console.log(output);
*/

/*
Answer:
Above code will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variable
*/

/*

Q21: What will be the output of the following code?
Topic: JavaScript
Difficulty: ⭐⭐⭐⭐
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
*/
/*
Above code will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.

emp1 object doesn't have company as its own property. You can test it like:

console.log(emp1.hasOwnProperty('company')); //output : false
However, we can delete company property directly from Employee object using delete Employee.company or we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.

*/