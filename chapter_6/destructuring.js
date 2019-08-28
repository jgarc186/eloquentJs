`let data = {
    name: 'jose',
    age: 30,
    results: [
        'foo',
        'bar'
    ],
    count: 30
};

let {results, count} = data;

function getData({results, count}) {
    return `
        results: ${results}
         count: ${count}
         `;
}`