//TASK 9 PART 1

// Countdown from 20 to 0
let count = 20; // start the count at 20
while (count >= 0) { // continue the loop as long as the count is greater than or equal to 0
console.log(count); // log the count to the console
count--; // decrement the count
}

// Print even numbers between 20 to 0
for (let i = 20; i >= 0; i--) {
if (i % 2 === 0) {
console.log(i);
}
}

// Loop and print stars
for (let i = 1; i <= 5; i++) {
let asterisks = '';
for (let j = 0; j < i; j++) {
asterisks += '*';
}
console.log(asterisks);
}
          