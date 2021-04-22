const numbers = [1, 2, 3];

// adding a number a specific position
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// removing
const removed = numbers.filter((n) => n !== 2);

// updating 
const updated = numbers.map(n => n === 2 ? 20 : n);
