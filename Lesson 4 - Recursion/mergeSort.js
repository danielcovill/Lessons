const toSort = [1, 3, 5, 8, 2, 4, 9, 7, 6];
const answer = toSort.sort((a, b) => a - b);

console.log(`Answer should be ${answer}`);
const result = mergeSort(toSort);
console.log(`The answer we got is ${result} - ${JSON.stringify(result) === JSON.stringify(answer) ? "right!" : "wrong." }`);

function mergeSort(arr) {
    const mid = Math.floor(arr.length / 2);
    if(arr.length === 1) {
        return arr;
    } else {
        // sort first half
        const firstHalf = mergeSort(arr.slice(0, mid));
        // sort second half
        const secondHalf = mergeSort(arr.slice(mid));
        // merge and return the results of the sorted halves
        let result = [];
        let firstIterator = 0;
        let secondIterator = 0;
        while(firstIterator < firstHalf.length || secondIterator < secondHalf.length) {
            if(firstHalf[firstIterator] < secondHalf[secondIterator]) {
                result.push(firstHalf[firstIterator++]);
            } else {
                result.push(secondHalf[secondIterator++]);
            }
        }
        return result;
    }
}