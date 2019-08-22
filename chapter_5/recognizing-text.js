function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let know = counts.findIndex(c => c.name == name);

        if (know == -1) {
            counts.push({
                name,
                count: 1
            });
        } else {
            counts[know].count++;
        }
    }
    return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "node");

    let total = scripts.reduce((n, {count}) => n + count, 0);

    if (total == 0) {
        return "No Scripts found";
    }

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts("jdfkjklsfjsf👍🏼"));