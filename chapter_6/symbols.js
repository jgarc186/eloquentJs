const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of blue yarn`
};

[1, 2].toString();

[1, 2][toStringSymbol]();

let stringObject = {
    [toStringSymbol]() {
        return "a jute rope";
    }
};

stringObject[toStringSymbol]();