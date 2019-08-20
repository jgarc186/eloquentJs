let tabs = ["A", "B", "C", "D"];

let reverseArray = (tabs) => {
    let reverse = [];
    for (value of tabs) {
        reverse.unshift(value);
    }
    return reverse;
};

let inverseArray = (reversed = []) => {
    let numberOfItems = reversed.length - 1, inverse = [];
    for (let i = numberOfItems; i >= 0; i-- ) {
        inverse.push(reversed[i]);
    }
    return inverse;
};

inverseArray(reverseArray(tabs));