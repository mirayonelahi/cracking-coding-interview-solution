
const urlifyData = (strValue, strLen) => {
    let strVal = strValue.split("")
    let flag = true
    for (let i = strVal.length - 1; i >= 0; i--) {
        const element = strVal[i];
        if (element == " ") {
            if (flag) {
                strVal.pop()
            }
            else {
                strVal[i] = "%20"
            }
        }
        else if (element != " ") {
            flag = false
        }
    }
    return (strVal.join(""));

}

const urlifyData2 = (strValue, strLen) => {
    let newStr = ""
    for (let i = 0; i < strLen; i++) {
        if (strValue[i] == " ") {
            newStr += "%20"
        }
        else {
            newStr += strValue[i]
        }
    }
    return (newStr);

}
//first pass: count the number of non space characters in the string
//subtract chars from true length n to see how many spaces we are allowed to replace with %20

//second pass: 
//if we see a space and there are still spaces left, append '%20' to output string
//otherwise copy current character
//when run out of spaces, append the empty string instead

export const URLify1 = (str) => str ? str.split` `.join`%20` : str;

let URLify = (s, n = s.length) => {

    let chars = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c !== ' ') {
            chars++;
        }
    }

    let spaces = n - chars;
    // using a new string to manipulate the given input
    let finalOutput = '';
    for (let i = 0; i < s.length; i++) {
        let currentVal = s[i];
        //when we got space and also we have enough space we add %20 to  new string.
        if (currentVal === ' ' && spaces > 0) {
            finalOutput += '%20';
            //remove one space value
            spaces--;
        }
        //if anything other than whitespace, we add the value to new string
        else if (currentVal !== ' ') {
            finalOutput += currentVal;
        }
    }
    //if n is not yet reached and there are still spaces left
    while (spaces > 0) {
        finalOutput += '%20';
        spaces--;
    }

    return finalOutput;
};


console.log(URLify(' hi', 5));

/**
CTCI - 1.3
URLify
Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the additional characters,
and that you are given the 'true' length of the string.
(Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: 'Mr John Smith ', 13
Output: 'Mr%20John%20Smith'
Input: string, number
Output: string
Complexity: optimize
Exception: empty string, spaces in front, middle and end
time complexity: linear
space complexity: constant
*/
// URLify('Mr John Smith ', 13) === 'Mr%20John%20Smith',
// URLify('Mr John Smith ', 14) === 'Mr%20John%20Smith%20',
// URLify('   hi', 7) === '%20%20%20hi%20%20',
// URLify('   hi ', 3) === '%20hi',
// URLify('', 0) === '',
// URLify('', 2) === '%20%20',
// URLify('hel lo', 5) === 'hello'

/**
 * I: string, number
 * output: string 
 * complexity: optimize
 * exceptions:  empty string, spaces in front, middle  , end
 * 
 * ! firstly we count all the non whitespace chars we have
 * ! now we calculate how many space we will use , spaces = givenLength - calculatedCharacters
 * ! now we will iterate through the whole givenString and firstly check any space there and our our calculatedSpace > 0 if valid add %20 to a newStr
 * ! if no space then add the current value to the newStr
 * ! even after iterating our whole array if still spaces left .. we will add %20 to remaining spaces       
 */


