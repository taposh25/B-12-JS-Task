const numbers = [6, 7, 9, 2, 3, 8, 5, 1, 10];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

// const sorted_numbers_asc = numbers.sort(function(a, b){return a - b })
// console.log(sorted_numbers_asc);

const sorted_numbers_desc = numbers.sort(function(a, b){return b - a })
console.log(sorted_numbers_desc);