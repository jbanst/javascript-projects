let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split()); // no parameter, so no changes
console.log(str.split('e')); // removes every 'e' from inside the ()
console.log(str.split(' ')); // splits each word separated by a ' '
console.log(str.split('')); // splits every character

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join()); // no parameter, so no changes
console.log(arr.join('a')); // replaces the commas with an 'a' in between each item in the array
console.log(arr.join(' ')); // replaces commas with a ' '
console.log(arr.join('')); // replaces commas with no space and joins items together

//3) Do split or join change the original string/array?

arr.join('a');
str.split(' ');

console.log(arr);
console.log(str);

// Split and join do not change the original string/array.


//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(String(cargoHold.split(',').sort()));


