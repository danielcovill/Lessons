let alphabet = [];
for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97+i));
}
console.log(alphabet);

const seeking = 'a';

const result = binarySearch(alphabet, seeking, (x, y) => {
    return x.localeCompare(y);
});
console.log(result);

function binarySearch(toSearch, toFind, compareFunction) {
    let min = 0;
    let max = toSearch.length - 1;
    let mid;

    while(min <= max) {
        mid = Math.floor((min + max) / 2);
        const comparison = compareFunction(toFind, toSearch[mid]);

        if(comparison === 0) {
            return { "index": mid, "value": toSearch[mid] };
        } else if (comparison > 0) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return undefined;
}
