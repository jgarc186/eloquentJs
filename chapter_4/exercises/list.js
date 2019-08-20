let values = [1, 2 ,3];

let arrayToList = (values = []) => {
    let number = values.length - 1, list = null;
    for (let i = number; i >= 0; i--) {
        {
            list = { value: values[i], list };
        }
    }
    return list;
};

let listToArray = (lists) => {
    let values = [];
    for (let i = lists; i; i = i.list) {
        values.push(i.value);
    }
    return values;
};

listToArray(arrayToList(values));
