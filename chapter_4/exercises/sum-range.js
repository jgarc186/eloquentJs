let range = (start, end, increment = 1) => {
    let values = [];
    if (Math.sign(increment) === 1) {
        for (let i = start; i <= end; i += increment) {
            values.push(i);
        }
    } else {
        for (let i = end; i <= start; i -= increment) {
            values.unshift(i);
        }
    }

    return values;
};

range(5, 2, -1);

let sum = (...range) => {
    let totalSum = 0;
    for (numbers of range) {
        for (number of numbers) {
            totalSum += number;
        }
    }
    return totalSum;
};

sum(range(1,10, -1));