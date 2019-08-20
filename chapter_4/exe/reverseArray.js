let arrayValue = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

const reverseArray = (value) => {
    let num = value.length, newArray = [];

    for (let i = 0; i <= num; i++) {
        newArray.unshift(value[i]);
    }

    return newArray;
}

let newArray = reverseArray(arrayValue);

const reverseArrayInPlace = (value) => {
    let num = value.length, newArray = [], oldArray = [];

    for (let i = 0; i <= num; i++) {
        oldArray = value[i];
        value[i] = value[num - 1 - i];
        newArray[num - i] = oldArray;
    }

    return newArray;
}

reverseArrayInPlace(newArray);
