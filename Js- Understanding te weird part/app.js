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

/**
 * *Objects : name value pair..can be nested
 * - the can also contain method
 * - preferred to use dot operators
 *  * Objects Literals- we can do same thing in different ways
 * - like we can init object by new Object()
 * - also we can init by shorthand {}
 */

/**
 * * Namespace : A container for variables and functions
 * Typically to keep variables and functions with the same name separate
 * in other languages this containers used in a different way
 * in js we use object literals as a namespaces for name conflicting
 * its call faking namespaces in js
 *
 */

/**
 * * JSON - inspired by js object literal
 * but are those same thing?
 * json is subset of object literal
 * so anything inside json valid is valid as object literal
 * but anything inside object literal valid is not valid in js
 *
 * we can always convert each other in js
 *
 * JSON.stringify  obj to json
 * JSON.parse --- json to obj
 */
/**
 * * First class functions -  Functions are Objects
 * everything you can do with other types you can do
 * with functions
 * - Assign them to variables
 * - pass them around
 * - create them on the fly
 *
 * its like inside object you are giving commands to do something
 *
 * wow!! we can add properties inside function. whaaat?
 * haha! we can . as in js functions are objects
 *
 * inside function there is a property name CODE
 *
 * functions are more than containers of code
 *
 * * Expression - A unit of code that results in a value
 * - doesnt have to a variable
 * like.. 1+2;  its an expression
 * if(a===3) here (a===3) is a expression
 *
 * function statement vs function expression?
 *
 * here for this function hoisting is valid and can be used
 * greet()
 *
 * this is example of function statement
 * function greet(){
 *  console.log("hey")
 * }
 *
 * this is example of function expression
 *
 * var anonmousGreet = function(){
 *   console.log("hey")
 * }
 * anonmousGreet()
 *
 * for this example if we call the function before its declared. what would happen?
 *
 * as its put it inside variable . the variable at initialied called undefined.
 * then while in execution context environment anonmousGreet() is called . it see
 * that as undefined and want to call undefined as function call.
 * then
 *
 * use anonymous function
 *
 * we can pass everything as a parameter inside a function.
 * like string, number , array , objects
 * even another anonymous function can be pass as parameter
 *
 * these first class functions in js are so great and awesome.
 * it all happens because in js functions are ***Objects***
 */

/**
 * * BY Value  vs By Reference
 * 
 *   All the primitive types in js are by value
 *   as it copy the value and have new own locations
 * 
 *  for Object. here object is all type of objects in js like array, function, obj literal
 *  
 *  a = {}
 *  b = a
 * 
 *  here when a is assigned to b
 *  for b no copy and new memory is created
 *  rather its pointing to the same object of a
 *  so anything change happens in any of them
 *  both got effected
 * 
 *  this is called by reference. and all object 
 *  act by reference.
 * 
 *  * Mutate - To change something
 *  * Immutable - can't be changed
 * 
 *  even we pass obj in parameter . that is also 
 *  passing by reference and changing all the object pointing to that memory space
 * 
 *  but there is a special case.
 *  there is no way we can control mutable and immutability is js
 * 
 * equal operator (=) sets up new memory space ( new address )
 * so if we reuse that operator like a = {greeting : 'howdy' }
 * here a will create a new adress for the object
 * 
           // by value (primitives)
            var a = 3;
            var b;

            b = a;
            a = 2;

            console.log(a);
            console.log(b);

            // by reference (all objects (including functions))
            var c = { greeting: 'hi' };
            var d;

            d = c;
            c.greeting = 'hello'; // mutate

            console.log(c);
            console.log(d);

            // by reference (even as parameters)
            function changeGreeting(obj) {
                obj.greeting = 'Hola'; // mutate   
            }

            changeGreeting(d);
            console.log(c);
            console.log(d);

            // equals operator sets up new memory space (new address)
            c = { greeting: 'howdy' };
            console.log(c);
            console.log(d);
 * 
 */

/**
 * * this keyword
 * this points to global object at first if nothing there
 * console.log(this) // if this reuns it will show window object
 * 
 * function a(){
 * console.log(this)
 * }
 * a()
 * this also shows global object window
 * 
 * whenever we create function (function expression / function statement)
 * all the time this inside them will point to global object
 * 
 * so we can moderate global spaces using this keyword
 * which might cause a lot of problems.
 * So its important to know this concept clearly.
 * 
 * function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();

 * the upper code needs to be revised and study again from the video
 * 
 * 
 * 
 * 
 *  */

/**
 * * Arrays - collection of anything
 *
 * can contain obj, function also
 *
 */
/**
 * * Arguments : the parameters you pass to a function
 * * javascript gives you a keyword of the same name which contains them all
 *  in js not all the parameter needs to be passed. it can be passed later also creaating hoising
 *
 *  while we console log arguments we can see that those are not exactly as array.
 *  in js those are called "array like".
 *
 *  now we use spread operator (...) to handle with arguments.
 *
 *  we can also destructure the arguments
 *
 */

/**
 * * Function Overloading
 *
 *  in js we dont have anything like function overloading like other languages.
 *
 *  As js function is first class functions. we can use that feature to make this as
 *  functional overloading like others.
 *  Using default value and  also if/else condition or using other patterns we can use function overloading feature
 *
 */

/**
 * * Syntax parsers - it reads code character by character
 * - making assumptions
 * - in js semicolon is optional
 * 
 *  but for that reason we have to be careful and understand how it works under the hood.
 *  as we press a enter to go next line syntax parser in js automatically put a semicolon
 *  so best practise is give our own semicolon to avoid unnecessary bugs
 *  
 * lets see and example for this -
 * 
  function getPerson(){

  return 
      {
        firstname :'Tony'
      }

}

console.log(getPerson())

what will be output for this code? an object?
-- output is undefined.!! why is that?
  we see after return we we go to next line and { started. 
  as we  went to new line the syntax parser thinks line ended and put a ;
  so the fix would be-
      function getPerson(){
        return  {
              firstname :'Tony'
                }
      }
      console.log(getPerson())
      ** so always try to use opening parenthesis in same line. it will help a lot to avoid unnecessary bugs.
      we have to orevent automatic semicolon insertion
      ** always put curly braces in same line of functions - best practice

      /**
       * * Whitespace-  invisible characters that create literal 'space' in your written code
       * - carriage returns, tabs, spaces
       */

/**
  * * Immediately Invoked function expressions (IIFE)S
  * 
  * this will runn immediately
  * 
  * var greet = function(name){
  console.log("hey "+name);
    }("hey")
   // returns "hey "
  * but one things needs to be carefull now  wehn we call greet.. we dont call it like greet()
   we call like like greet and it returns a string
  * when we immediate invoke function it converts this as string in this scenario  

  * we cant put an anonymous function just inside a code without putting it in variable
  * as the syntax parser will read this as function statement and want to have a function name
  * as its anonymous its dont have name so js engine will throw an error
  * how can we fix this??
  * 
  * we can wrap the whole anonymous function inside a ( ) .
  * how can we run this btw?
  * we can use the immediatly invoked function feature here
  *   (function(){
     console.log("dont talk");
   })()
  * it has so much significance 
  */

/**
 * we already learned --
 * all things work under the hood
 * execution stack
 * first class functions
 * execution context
 * immediately invoked function
 * scope chain
 * outer execution context
 * garbage collection
 * 
 * whats all these fro??
 * to understand closures!!!
 * 
 * 
 * * Closures - 
 * 
 * free variable
 * 
 * 
function buildFunctions(){
  var arr=[]
  for(var i=0; i <3 ; i++){
    arr.push(
      function(){
        console.log(i);
      }
    )
  }
  return arr
}

var fs= buildFunctions();

fs[0]() //returns 3
fs[1]() //returns 3
fs[2]() //returns 3

//another example

function buildFunctions(){
  var arr=[]
  for(let i=0; i <3 ; i++){
    arr.push(
      function(){
        console.log(i);
      }
    )
  }
  return arr
}

var fs= buildFunctions();

fs[0]() //returns 0
fs[1]() //returns 1
fs[2]() //returns 2

** Function Factories


function makeGreeting(language){

  if(language==='en' ){
    return function greet(fName, lName){
      return (`Hey ${fName} ${lName}`);
    };
  }

  if(language==='es' ){
    return function greet(fName, lName){
      return (`Hola ${fName} ${lName}`);
    };
  }

}
let greetEngish = makeGreeting('en');
let greetSpanish = makeGreeting('es');

console.log(greetEngish('marry' , 'jane')); // returns Hey marry jane

// using settimer/jquery is using first class function and closures

function sayHi(){
  
  let greet = "Hi";

  setTimeout(function(){ console.log(greet+ ' jack');}, 3000 );

}
console.log("yooo");

sayHi()
 */

/**
 * *Callback function - A function you give to another function,
 *  *                 to be run when the function is finished
 * so the function you call, 'calls back' by calling the function you gave it 
 * when it finishes.
 * 
 * 
function tellMeWhenDone (callback){
  
  var x = 10
  callback()
}

tellMeWhenDone(function(){
  console.log("yo");
})
 * 
 */

/**
 * lets talk about functions again. functions are just objects
 * so far we know that inside a fucntion there is a Name property which is optional and can be anonymous
 * there is a code property which is invocable()
 * and here comes --
 * there is als0--
 * * Call()  -    apply()  -  bind()
 *
 *
 *
 *
 *
 *
 */
