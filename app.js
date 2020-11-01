const statesQuantity = 50;

let addIt = 5 + 4;

function sayHello() {
    alert("Hello, world!");
};

sayHello();

function checkAge(name, age) {
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    };
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let yummyVeg = ["tomatoes", "carrots", "cucumbers", "eggplant"];

let total = yummyVeg.length;

for (let i = 0; i < total; i++) {
    console.log(yummyVeg[i]);
};
