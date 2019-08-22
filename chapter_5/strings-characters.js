function characterScript(code) {
    for (let script of scripts) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));

let horseShoe = "🐴🎈";

console.log(horseShoe.length);

for (let char of horseShoe) {
    console.log(char.codePointAt(0));
}