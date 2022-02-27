/**
 * 
 * 
 */

let stringCompression = (str) => {
    let output = "";
    let count = 1
    for (let i = 0; i < str.length; i++) {
        let curVal = str[i]
        let nextVal = str[i + 1]
        if (curVal == nextVal) {
            count += 1
        }
        else {
            output += str[i] + count
            count = 1
        }
    }
    return (str.length === output.length) ? str : output

}

console.log(
    stringCompression('aabcccccaaa') === 'a2b1c5a3',
    stringCompression('aa') === 'aa',
    stringCompression('aaAAaa') === 'aaAAaa',
    stringCompression('aaaAAaa') === 'a3A2a2',
    stringCompression('') === ''
);
