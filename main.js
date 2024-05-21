// object assignment
// part 1 : Employee Data
// challange:
// 1: Design a type alias named Employee to represent an employee object with the properties like name(string),
//  department(string),and role(string).
// 2: Include an optional nested object named contact to hold phone and email information (if provided)
// 3: Employee a union type for the role property to restrict it to "manager","engineer",or "intern".
// 4: Make the skills property an optional array of strings for listing an employee's skill(if any).
var employee = {
    name: "Saiman",
    department: "head office",
    role: "Engineer",
    contact: {
        phoneNumber: 345678,
        email: "abc22@gmail.com",
    },
    skills: ["Computer Operator"],
};
console.log(employee); // to view employee details
var car = {
    engine: {
        horsePower: 450,
    },
    getHorsePower: function () {
        console.log("horsePower of the car is  ".concat(car.engine.horsePower));
    },
};
car.getHorsePower(); // call function
var Tshirt = {
    name: "Hero",
    price: 1200,
    color: "Yellow",
    inventory: {
        stock: 100,
        changeColor: function (newColor) {
            Tshirt.color = newColor;
            if (Tshirt.color === "Pink") {
                var priceIncrease20 = (Tshirt.price / 100) * 20; // increase 20% (1200/100 *20 = 240)
                Tshirt.price += priceIncrease20; // 1200 +240 =    1440              
            }
            else if (Tshirt.color === "Red") {
                var priceIncrease10 = (Tshirt.price / 100) * 10; // increase 10% (1200/100 *10 = 120 )
                Tshirt.price += priceIncrease10; // 1200 + 120 = 1320   
            }
            else if (Tshirt.color === "Blue") {
                var pricedecrease5 = (Tshirt.price / 100) * 5; // decrease 5%  (1200/100 * 5 = 60)
                Tshirt.price -= pricedecrease5; // 1200 - 60 = 1140
            }
        },
    },
};
console.log(Tshirt.name); // log to view tshirt name
Tshirt.inventory.changeColor("Red"); // calling function 
console.log("Red Shirt price is ".concat(Tshirt.price, " by increase of 10%."));
console.log(Tshirt);
