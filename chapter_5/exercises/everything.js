function every(array = [], predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every(array = [], predicate) {
    return array.every(predicate);
}

every([1, 3, 5], n => n < 10);
every([2, 4, 16], n => n < 10);
every([], n => n < 10);