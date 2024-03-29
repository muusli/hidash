const { forEach, map } = require('./index');
let sum = 0;
forEach([ 1, 2, 3 ], (value) => {
	sum += value;
});
if (sum !== 6) {
	throw new Error(`Expected summing array to equal 6 but is ${sum}`);
}

const result = map([ 1, 2, 3 ], (value) => {
	return value * 2;
});

if (result[0] !== 2) {
	throw new Error(`Expected 2 is ${result[0]}`);
}
