// fill an array with letters a-z
let alphabet = [];
for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97+i));
}
console.log(alphabet);
    
let foundItem = binarySearch(alphabet, 'a', (x, y) => {
    //localeCompare returns a 0 if the strings are the same
    //a negative number if the comparison is lower
    //a positive number if the comparison is higher
    return x.localeCompare(y);
});
console.log(foundItem);

// toSearch is an array, toFind is the thing to find, and compareFunction is how to tell which thing is higher
// returns undefined if the item wasn't found, otherwise returns the item
function binarySearch(toSearch, toFind, compareFunction) {
    let min = 0;
    let max = toSearch.length - 1;
    let mid;
    while(min <= max) {
        mid = Math.floor((min + max) / 2);
        const comparison = compareFunction(toFind, toSearch[mid]);
        if(comparison === 0) { 
            return { "index": mid, "value": toSearch[mid] };
        } else if(comparison > 0) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return undefined;
}