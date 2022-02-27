/**
 * Take Home Assignment: L1/L2 Full Stack Engineer
 * Semantic Versions
    You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.
    Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.
 * Rules
    No number but the first may be greater than 9: if any are, you must set them to 0 and increment the next number in sequence.
    You can assume all tests inputs to be valid.
 * As all the test inputs are valid so we don't need to handle any exception
 * Before starting solution let's have a overview whats given and what to do
 * 
 * Input: string
 * Output: string
 * Complexity: Optimal
 * Exception: number range is 1-9 , first number can be 10 , converting 9 to 0
 * N = |oldVersion|
 * Time Complexity : O(N) - linear
 * Space Complexity: O(1) - constant

 * 
 * @param {string} oldVersion  version string as a character which will be updated in place
 * @returns {string}           updated version character string
 */
let nextVersion = (oldVersion) => {
  // converting the string to array and removing dot(.)  
  let updatedVersion = oldVersion.split('.');
  // iterating from last value to first of the new array
  for (let index = updatedVersion.length - 1; index >= 0; index--) {
    // except the first index we are converting the 9 to 0
    if (parseInt(updatedVersion[index]) === 9 && index > 0) {
      updatedVersion[index] = 0;
    }
    // if we dont find 9 or index == 0 we just increase the value and break from the loop
        else {
      updatedVersion[index]++;
      break;
    }
  }
  // convert the final output to string and also adding dot(.) among elements and return it
  return updatedVersion.join('.');
};

// different test cases to check the solution is working and all the test case passes here
console.log(
    nextVersion('1.2.3') === '1.2.4',
    nextVersion('0.9.9') === '1.0.0',
    nextVersion('1') === '2',
    nextVersion('0.9') === '1.0',
    nextVersion('1.2.3.4.5.6.7.8') === '1.2.3.4.5.6.7.9',
    nextVersion('9.9') === '10.0',
    nextVersion('9.3.4.5.9.9') === '9.3.4.6.0.0',
    nextVersion('9.9.9.9.9') === '10.0.0.0.0',
    nextVersion('0.9.9.9.9.9.9.9') === '1.0.0.0.0.0.0.0',
    nextVersion('0') === '1',
    nextVersion('8.8.8.8.8.8.8.9.9') === '8.8.8.8.8.8.9.0.0'
);
