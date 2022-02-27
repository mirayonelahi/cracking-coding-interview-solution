/**
 * given two string. check if they are permutation of each other
 * 
 * ask if its case sensitive
 * ask if blank space is counted or not
 * 
 */

// first method sort first and and compare

const checkPermutation = (value1, value2) => {

    return (value1.trim() === value2.trim()) || (value1.split("").sort().join("") === value2.split("").sort().join(""));
}

//console.log(checkPermutation("Dog", "God"));


const checkPermutationHash = (value1, value2) => {

    //take the first string
    let obj = {};
    if (value1.length !== value2.length) return false
    for (let i = 0; i < value1.length; i++) {
        if (obj[value1.charAt(i)]) {
            obj[value1.charAt(i)]++
        }
        else
            obj[value1.charAt(i)] = 1
    }

    for (let j = 0; j < value2.length; j++) {
        const element = value2[j];
        if (!obj[element]) {
            return false
        }
        obj[element]--
    }

    return true;



}

console.log(checkPermutationHash("aogd", "goad"));