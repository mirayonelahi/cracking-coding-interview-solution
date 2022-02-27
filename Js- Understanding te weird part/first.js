/*

* syntax parsers
- a program that reads your code
- determine what it does
- check if grammar is valid


* lexical environments
- where something sits physically in the code you write
- where you write something is important

* execution contexts 
- a wrapper to help manage the code that is running
-there are lot of lexical environments. which one is currently
running is managed via execution contexts.
-can contain things beyond what you have written in your code


* Name / value pair:

- name which maps to a unique value

* Object-

-collection of name value pairs

* Global environment / execution context

- creates a global object -- window in vanilla js
- creates 'this' --

-- if we run a empty js file we can also see
these global object and this in console.

and at global level ... this === 

Creation:

Hoisting: called before initialized

-when execution context is created -
 global object -- this -- outer environment then
- setup memory space for variables and functions
-function

* undefined -- every variable at first js get as undefined

* single threaded: once command at a time

* synchronous - one at a time in order

* function invocation -- running a function

* execution stack  -- code executed line by line and put on the top pf stack - run and popped out- use lifo

* variable environment - where the variable live - how they relate each other in memory
-- each variable lives in their own execution context
-- need to check about the scopes




*/
/* examples for checking execution stacks
* how it js will read and execute?
-- it will start by creating a global execution context
-- then first it will set the myVar variable to 1 
-- then it will create a new execution context stack as it runs function a()
-- inside that new stack it will crate the variable myVar and set it to 2
-- then as it calls b() it will create a new execution stack for b 
-- inside that stack that myVar will be undefined
-- then in the last console it will show the myVar=1 from the global execution stack
-- here a very important topic is explained which it function stacks and
how the variables relate to each other and some idea about scopes
*/
function b(){
  let myVar;
  console.log(myVar);
}
function a (){
  let myVar =2;
  console.log(myVar);
  b();
}

let myVar = 1;
console.log(myVar);
a();

console.log(myVar);
