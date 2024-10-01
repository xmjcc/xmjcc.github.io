const object1 = {a: "somestring", b: 42};
console.log(Object.entries(object1));
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}, ${value}`);
}