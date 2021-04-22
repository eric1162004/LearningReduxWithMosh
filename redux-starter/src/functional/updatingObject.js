// The spread operator only do shallow copy
// nested spread operator is needed to copy nested object
const person = { name: "John", address: { city: "new york" } };
const update = { ...person, address: { ...person.address }, name: "Bob" };