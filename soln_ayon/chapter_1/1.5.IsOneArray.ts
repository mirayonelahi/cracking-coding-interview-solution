/**
 * ? One Away
 */

let oneAway = (str1, str2) => {
    //check between 2 string
    if (str1.length == str2.length || str1.length + 1 == str2.length || str1.length == str2.length + 1) {
        if (str1.length == str2.length) {
            return updateCheck(str1, str2);
        }
        else if (str1.length + 1 == str2.length) {
            return addCheck(str1, str2);
        }
        else if (str1.length == str2.length + 1) {
            return deleteCheck(str1, str2);
        }

    }
    else {
        return false;
    }

}


let updateCheck = (str1, str2) => {
    console.log("update");
    let getCount = 0;
    for (let i = 0; i < str1.length; i++) {
        const curVal1 = str1[i];
        const curVal2 = str2[i];
        if (curVal1 != curVal2) getCount += 1

    }
    if (getCount === 0 || getCount === 1)
        return true
    else return false

}

let addCheck = (str1, str2) => {
    console.log("add");

    for (let i = 0; i < str2.length; i++) {
        const curVal1 = str1[i];
        const curVal2 = str2[i];
        if (curVal1 != curVal2) {
            if (str2[i + 1] !== curVal1) {
                return false
            }
        }
    }
    return true

}

let deleteCheck = (str1, str2) => {
    console.log("delete");

    for (let i = 0; i < str2.length; i++) {
        const curVal1 = str1[i];
        const curVal2 = str2[i];
        if (curVal1 != curVal2) {
            if (str1[i + 1] !== curVal2) {
                return false
            }
        }
    }
    return true

}

console.log(oneAway('pr', 'r'));



//  console.log(
//     oneAway('pale', '(ple') === true, //removed
//     oneAway('pales', 'pale') === true, //inserted
//     oneAway('pale', 'bale') === true, //replaced
//     oneAway('pale', 'bake') === false,
//     oneAway('p', '') === true,
//     oneAway('pr', 'r') === true,
//     oneAway('pr', 'rp') === false,
//     oneAway('brrr', 'brrss') === false,
//     oneAway('abc', 'acs') === false,
//     oneAway('aple', 'aple') === true 
//   );