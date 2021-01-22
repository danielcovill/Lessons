//print all the permutaions of a string (ways it can be arranged) as an array of strings
//base case: 1 letter, 1 way, one array containing one string
//growth case: current letter in front of all the possible ways of the remaining parts

const permuteMe = "123";

let answer = arrayOfPermutations(permuteMe);
for (const arrangement of answer) {
    console.log(arrangement);
}

function arrayOfPermutations(str) {
    if(str.length === 0) {
        return undefined;
    } else if(str.length === 1) {
        return [str];
    } else {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            const base = str[i];
            const rest = str.slice(0, i).concat(str.slice(i+1, str.length));
            //stick base in front of each of them and append to result array
            for (const subResultString of arrayOfPermutations(rest)) {
                result.push(base.concat(subResultString));
            }
        }
        return result;
    }
}