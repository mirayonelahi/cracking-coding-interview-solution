/**
 * palindrome permutation
 * 
 * 
 */

let IsPalindromePermutation = (str) => {

    //create obj
    let hashObj = {}
    if (str === "") return true
    //iterate thru give string
    for (let i = 0; i < str.length; i++) {
        const curVal = str[i];
        if (curVal == " ") continue
        if (hashObj[curVal]) {
            delete hashObj[curVal]
        }
        else {
            hashObj[curVal] = true;
        }

    }
    console.log(hashObj);

    return Object.keys(hashObj).length <= 1;

}

console.log(IsPalindromePermutation(''));

// palPerm('taco cat') === true,
// palPerm('atco cat') === true,
// palPerm(' rac  ecar rara ') === true,
// palPerm('chirpingmermaid') === false,
// palPerm('aabbc') === true,
// palPerm('aaaabbbbcc') === true,
// palPerm('aabc') === false,
// palPerm('') === true