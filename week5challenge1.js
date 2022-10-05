// find the even numbers in an array
let someValues = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < someValues.length; i++) {
    if (someValues[i] % 2 == 0 && someValues[i] !== 0) {
        console.log(someValues[i]);
    }
}