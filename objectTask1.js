/*
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",                   //Task 1
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);

*/
/*

const car = {
    make: "Toyota",
    model: "Corolla",                            // Task 2
    year: 2020,
    padssenger_capacity: 5
};
console.log(car);

*/

/*

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",            // task 3
        marks: 30
    }
};

console.log(student.physics.marks);

*/

/*

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true                       // Task 4
};
const keys = Object.keys(student).length;
console.log(keys);

*/
/*

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true                               // Task 5
};

for (let key in myObject) {
    console.log(`key: ${key} | type:  ${typeof myObject[key]}`);
}
*/

// String Task

/*

            let str = "JavaScript is amazing!";
              count = 0;

            for (let char of str) {
                if (char.toLowerCase() === 'a') {
                    count++;
            }
            }


            console.log(count);


    */

            /*

        let str = "Aardvarks are Amazing Animals!";
        let count = 0;

        for (let char of str) {
            if (char === 'a' || char === 'A') {
                count++;
            }
        }

        console.log(count);

*/

        function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


console.log(capitalizeWords('i am learning javascript programming'));


