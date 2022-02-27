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

*/

/**
 * * Scope Chain
 * here we can see that inside function b myVar is nor initialized and how its showing as value 1?
 * every execution context has reference  to its outer environment
 * now we need to figure out whats the outer environment for b() in call stack
 * 
 * so it will always go down checking scope chaining and looking for its outer environment
 * 
 * as function b() is independent and its not inside any other function
 * 
 * so it's outer environment is it's global execution stack created at first
 * 
 * example 1 
 * 
 *  
 function b(){
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
 * 

 * example 2

 -- this example we will see that function b() inside a different function
 and how it works.

 function a (){
    function b(){
        console.log(myVar);
      }
   let myVar =2;
   console.log(myVar);
   b();
 }
  
 let myVar = 1;
 console.log(myVar);
 a();
 
-- here when b is called its outer environment is function a()  as its
remain inside function a() . so for this example myVar will be 2

** Scope - where a variable is available in your code
--  and if it's truly the same variable or a new copy
-- `let` creates a block scope -- only available inside the block 
 */


/**
 * * Asynchronous - More than one at a time
 * 
 * js normally acts synchronously .. but how asyncronous works inside js?
 * 
 * lets start with js engine.... js engine is not the only run on
 * background. 
 * -- there is rendering engine working
 * --there is http request working
 * 
 * so  how this all js engine, rendering engine , https running all together?
 * 
 * js engine has hooks with other components
 * 
 * suppose we have a button inside a page. what will happen if we
 * click the button? how it works under the hood?
 * 
 * firstly as we learned the global execution context will create
 * and stack over ony by and and pop up all the stacks
 * 
 * there is a event queue sitting side where all the event 
 * notifications are sitting. as we created button that event 
 * listener sits here in the queue
 * 
 * when the execution stack is empty then the event queue is looked at
 * 
 * it waits for any change of events after finishing up the stack
 * 
 * if the button is clicked then it creates a execution context and execute it and from the queue that click is removed
 * 
 * so here its checking all the event queue and looking line by line
 * 
 * so we can see its not actually workin as async 
 * 
 * now lets look at the example
 * 
         //long running func
        function waitThreeSecond(){
        var ms = 3000 + new Date().getTime();
        while( new Date() < ms){}
        console.log('finished function');
        }
        //listen for the click event
        function clickHandler(){
        console.log('click event');
        }

        document.addEventListener('click',clickHandler);

        waitThreeSecond();
        console.log('finsihed execution');
 * 
 *
 * here we can see that when the code runs it will create a global execution ontext
 * then there are some good points to observe here
 * now we can see the the click event is before running the function
 * but as we learned all the event listener will be keep aside in a event queue
 * those will not be run at first even we click the button first it will not work instantly
 * 
 * as we know firstly all the other call stacks needs to be cleared
 * after clearing all the call stack then it will look for the event queues and execute those
 * 
 * 
 */

/**
 * 
 * * Dynamic Typing :
 * - you dont tell the engine what type of data a variable holds
 * - it figures out while your code is running / during the execution
 * 
 * other languages like c, java has static typing. you declare the type ahead of time
 * 
 * * primitive types- a type of data that represents a single value and not an object
 * 
 * 6 types
 * 
 * undefined - lack of existence but dont set any variable with this
 * null - lack of existence but this one you can set variable
 * boolean - true or false
 * number - js only has one number type and its floating point number
 * string- sequence of characters
 * symbol - used in es6 and new
 * 
 * 
 */

/**
 * * Operators - a special function syntactically written differently
 * * generally, operators take two parameters and return one result
        let a= 3 + 4 
        console.log(a);
 *  Have we even asked ourself how did the js engine do calculate the values
 *  when syntax parser saw the '+' sign 
 *  js engine has something called **Infix notation** 
 *  in infix notation it means the function name sits between two parameter
 *  operators are functions
 * 
 * * operator precedence - which operator function gets called first
 *   functions are called in order of precedence (Higher precedence wins)
 * 
 * * operator associativity: what order to called in
 * - left-to-right or right-to left
 * - when functions have same precedence
 * what happen when have same associativity like 2 / 3 * 4
 * for this example can you think of the output?
        let a=2, b=3, c=4;
        a=b=c
        console.log(a);
        console.log(b);
        console.log(c);

 * all will be 4 . why? because of associativity . '=' is right to left         
 */
/**
 * * Coercion - Converting a value from one type to another
 * * Comparision Operator 
 * 
 * console.log(3<2<1)-- what output ??
 * tt shows true. because left to right assosiativity
 * 
 * it will first check (3<2) which is false then (false < 1)?
 * false < 1 ? -> false is falsy value it coerced to 0 
 * and 0 < 1 so it returns true
 * be careful for coercion ... 
 * 
 *  if we typecast -- Number(undefined)  returns NaN 
 *  Number (null) -- returns 0 (which we should be aware of as it can create a bug)
 *  Number(false) -> returns 0
 *  How to stop Coercing? //side effects
 *  use === instead == to avoid coercion
 *  false == 0  returns true
 *  null == 0 returns false
 *  null < 1 returns true
 *  "" ==  0 returns true
 *  "" == false true
 *  == equality   === strict equality
 * 
 * whats the use of coercion then?
 * we can take the truthy and falsy value power 
 * for cheking existance -- validations -- 
 * let a;
 * if(a) { console.log("anything") }
 * here we can see with the use of coercion we are cheking the value
 * undefined - empty string - null all will be treated as false
 * be careful as 0 will be treated as false also in that case
 * if(a || a===0) { // code }
 * 
*/ 

/**
 * * Default Value
 * if any function has parameter but it is called without passing any parameter
 * then it  can cause some bugs. we can give default parameter to solve this issue
 * 
 * false || true -> returns true
 * false || 'hello' -> retruns 'hello'
 * 
 */
