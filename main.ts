// object assignment
// part 1 : Employee Data
// challange:
// 1: Design a type alias named Employee to represent an employee object with the properties like name(string),
//  department(string),and role(string).
// 2: Include an optional nested object named contact to hold phone and email information (if provided)
// 3: Employee a union type for the role property to restrict it to "manager","engineer",or "intern".
// 4: Make the skills property an optional array of strings for listing an employee's skill(if any).

type Employee = {
  name: string;
  department: string;
  role: "Manager" | "Engineer" | "Intern"; // union type
  contact?: {
    phoneNumber: number;
    email: string;
  };
  skills?: string[];
};

let employee: Employee = {
  name: "Saiman",
  department: "head office",
  role: "Engineer",
  contact: {
    phoneNumber: 345678,
    email: "abc22@gmail.com",
  },

  skills: ["Computer Operator"],
};
console.log(employee);     // to view employee details

// Part2:  Car Details
//Challenge:

// 1: Design a type alias named Car to represent a car object.
// 2: Include a nested object named engine within car,containing a property named horsepower(number).
// 3: Define a function named getHorsepower directly within the car type alias to retrieve the engine's horsepower

type Car = {
  engine: {             // nested object engine
    horsePower: number;
  }
  getHorsePower: () => void;         //  use function
};

let car: Car = {
  engine: {
    horsePower: 450,
  },
  getHorsePower:()=>{
    console.log(`horsePower of the car is  ${car.engine.horsePower}`);
  },
};

car.getHorsePower()      // call function

// Part 3: Colorful T-shirt
// challenge:

// 1.Design a type alias named product to represent a t-shirt object with properties like name (string),price(number)
//   ,and color (string).
// 2.Include a nested object named inventory within product.this inventory object should have two properties:
// : stock (number) : represent the number of t shirt available.
// : coloroptions(optional array of string):list available colors(if any)
// 3.Inside the inventory object,define a function named  changecolor .this function accept a new color string
//  as an argument.when called it should
//  : update the color property of the product object .
//  : adjust the price based on the new color (implement your own logic,e.g),increase by
//     10% for red, decrease by 5% for blue)

type Product = {
  name: string;
  price: number;
  color: string;
  inventory: {
    stock: number;
    colorOption?: ["Pink", "Yellow", "Red", "Black", "Blue"];
    changeColor: (newColor: string) => void;
  };
};
let Tshirt: Product = {
  name: "Hero",
  price: 1200,
  color: "Yellow",
  inventory: {
    stock: 100,
    changeColor: (newColor: string) => {
      Tshirt.color = newColor;
      if (Tshirt.color === "Pink") {
        let priceIncrease20 = (Tshirt.price / 100) * 20; // increase 20% (1200/100 *20 = 240)
        Tshirt.price += priceIncrease20;                 // 1200 +240 =    1440              
      } else if (Tshirt.color === "Red") {
        let priceIncrease10 = (Tshirt.price / 100) * 10; // increase 10% (1200/100 *10 = 120 )
        Tshirt.price += priceIncrease10;                  // 1200 + 120 = 1320   
      } else if (Tshirt.color === "Blue") {
        let pricedecrease5 = (Tshirt.price / 100) * 5;  // decrease 5%  (1200/100 * 5 = 60)
        Tshirt.price -= pricedecrease5;                   // 1200 - 60 = 1140
      }
    },
  },
};
console.log(Tshirt.name)   // log to view tshirt name
Tshirt.inventory.changeColor("Red");                 // calling function 
console.log(`Red Shirt price is ${Tshirt.price} by increase of 10%.`);
console.log(Tshirt);
