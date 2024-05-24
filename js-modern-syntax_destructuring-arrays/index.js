console.clear();

// EXERCISE 1
// Use array destructuring to extract the variables "name", "price", and "quantity".
// Make sure to export your variable as in the example below to make the tests work.

const item = ["Egg", 0.25, 12];

// example: export const [value1, value2] = array;

// ?? export const [1,2,3] = item;

const { name, price, quantity } = item;

// EXERCISE 2
// Use array destructuring to extract the variables "firstNameOfChris", "lastNameOfChris" and "ageOfChris".

const personChris = [12, "Chris", "Owen"];

const firstNameOfChris = personChris[1];

const lastNameofChris = personChris[2];

const ageOfChris = personChris[0];

console.log(firstNameOfChris);

console.log(lastNameofChris);

console.log(ageOfChris);

// EXERCISE 3
// Use array destructuring to extract the variables "firstNameOfAlex" and "lastNameOfAlex".
// Make sure not to have unused variables.

const personAlex = ["Alex", 12, "Main"];

const firstNameOfAlex = personAlex[0];

const lastNameOfAlex = personAlex[2];

// EXERCISE 4
// Use array destructuring to extract the last name from the array
// as variable called "lastName".

const students = ["Christina", "Jon", "Alexandare"];

const lastName = students[2];

// EXERCISE 5
// Use array destructuring to extract all of the names from this nested array.
// Assign the given order of students to variables called "student1" to "student5".

const nestedStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

function showStudents(...nestedStudents) {
  console.log(nestedstudents);
  return `firstnames of students: ${nestedstudents.join(",")}.`;
}

// EXERCISE 6
// Spread the values of the values array into the function call of the add function.
// Keep in mind that you need to export the variable 'result' to make the test work.

const values = [1, 6, 7, 9, 12, 5, 4];

export const result = add(...values);

function add(...values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}
