

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

Math.round(average(scripts.filter(script => script.living).map(script => script.year)));

Math.round(average(scripts.filter(script => ! script.living).map(script => script.year)));