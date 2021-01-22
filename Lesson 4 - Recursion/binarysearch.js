const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const seeking = 2;

// look at the list - check if the middle was what we wanted, higher, or lower
// re-search the section where the item was located (higher or lower)
console.log(searchList(arr, seeking));

function searchList(arr, toFind) {
    const middle = Math.floor(arr.length / 2);
    if (arr.length === 1 && toFind !== arr[0]) {
        return undefined;
    }
    if (arr[middle] === toFind) {
        const result = arr[middle];
        return result;
    }
    if (toFind > arr[middle]) {
        //return the item where we find it in the top half of list
        const result = searchList(arr.slice(middle + 1, arr.length), toFind);
        return result;
    } else {
        //return the item where we find it in the bottom half of list
        const result = searchList(arr.slice(0, middle), toFind);
        return result;
    }
}
