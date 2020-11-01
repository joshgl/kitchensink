// Amount of states
const statesQuantity = 50;

let addIt = 5 + 4;

function sayHello() {
    alert("Hello, world!");
};

sayHello();

//Check if the user is younger than 21
function checkAge(name, age) {
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    };
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//Vegetables are yummy, here is an array of them
let yummyVeg = ["tomatoes", "carrots", "cucumbers", "eggplant"];

let total = yummyVeg.length;

for (let i = 0; i < total; i++) {
    console.log(yummyVeg[i]);
};

let pet = {
    name: "Kiki",
    breed: "Tabby Cat"
};

console.log(pet);

let namesArray = [{name: "Bob", age: 34}, {name: "Bill", age: 14}, {name: "Becky", age: 57}, {name: "Bart", age: 17}, {name: "Bindi", age: 77}];

for (let i = 0; i < namesArray.length; i++){
    (checkAge(namesArray[i].name, namesArray[i].age));
};

function getLength(word){
  return word.length;
};

hwLength = getLength("Hello World");

if (hwLength % 2 == 0){
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
};