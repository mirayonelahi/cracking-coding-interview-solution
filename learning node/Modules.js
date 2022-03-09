/**
 * 
 * we making a site
 * we have multiple js files
 * how to connect those together
 * we use script 
 * in nodejs we dont have gui like that
 * 
 * we can use modules in node js for that
 * its a reusable chunk of code
 * has its own context
 * for having own context
 * modules cant polute the global scope
 * 
 * clousure and immediately invoked function concepts used
 * 
 * encapsulates and dont leak it to others
 * 
 */

/**
 * lets make a modules
 * we are in Global.js file now
 */
export const action=() =>{
    console.log('hello');
}


/**
 * now lets think we are in different page
 * and we want to access the module we created
 * 
 *  .js vs .mjs 
 *  
 *  .mjs is newly supported advantages of es6
 * 
 import {action} from './Modules.js'    
 action()

 internal modules 

 -fs
 -path
 -child_process
 -http
 
 */

