const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Post Office",
    "Daria's House-Enie's House",
    "Ernie's House-Grete's House",
    "Grete's House-Shop",
    "Alice's House-Cabin",
    "Marketplace-Post Office",
    "Bob's House-Town Hall",
    "Darias's House-Town Hall",
    "Grete's House-Farm",
    "Marketplace-farm",
    "Marketplace-shop",
    "Marketplace-town Hall",
    "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEgde(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (! roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new villageState(destination, parcels);
        }
    }
}

let first = new VillageState("Post Office", [{
    place: "Post Office",
    address: "Alice's House"
}]);
let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {
        direction: randomPick(roadGraph[state.place])
    };
}