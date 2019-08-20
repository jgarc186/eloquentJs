let labels = [];
let repeat = (number, action) => {
    for (let i = 0; i <= number; i++) {
        action(i);
    }
};

repeat(5, i => labels.push(`Unit ${i + 1}`));

labels;