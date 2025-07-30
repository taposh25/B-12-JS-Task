
/*
let i = 1;
let sum = 0;

while (true) {
  sum += i;

  if (sum >= 100) {
    console.log(`Stopped at i = ${i}, Total Sum = ${sum}`);
    break;
  }

  i++;
}
*/

let sum = 0;

for (let i = 1; i <= 200; i++) {
  sum += i;

  if (sum >= 100) {
    console.log(`Stopped at i = ${i}, Total Sum = ${sum}`);
    break;
  }
}

