console.log("Welcome to the TypeScript world!");

// #1  Sting Formatter

function formatString(str: string, dualCase?: boolean): string {
  return dualCase ? str.toUpperCase() : str.toLowerCase();
}
console.log(formatString("Programming Hero", true)); // Output: "PROGRAMMING HERO"
console.log(formatString("Programming Hero", false)); // Output: "programming hero"
console.log(formatString("Programming Hero")); // Output: "programming hero"

//  #2 filters an array of objects by the rating

interface Movie {
  title: string;
  rating: number;
}

const movies: Movie[] = [
  { title: "Inception", rating: 3.8 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 4.6 },
  { title: "The Matrix", rating: 2.7 },
  { title: "The Godfather", rating: 4.9 },
  { title: "Pulp Fiction", rating: 4.5 },
  { title: "The Shawshank Redemption", rating: 4.8 },
  { title: "Forrest Gump", rating: 4.7 },
  { title: "Fight Club", rating: 4.2 },
  { title: "The Lord of the Rings: The Return of the King", rating: 5.0 },
];

function filterByRating(Moviecarts: Movie[]) {
  return Moviecarts.filter((cart) => cart.rating >= 4);
}
console.log(filterByRating(movies));

// Output: [ { title: 'The Dark Knight', rating: 5 }, { title: 'The Godfather', rating: 4.9 }, { title: 'Pulp Fiction', rating: 4.5 }, { title: 'The Shawshank Redemption', rating: 4.8 }, { title: 'Forrest Gump', rating: 4.7 }, { title: 'Fight Club', rating: 4.2 }, { title: 'The Lord of the Rings: The Return of the King', rating: 5 } ]

// #3  generic function that concatenates multiple arrays

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}
console.log(concatenateArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"])); // Output: ["a", "b", "c", "d", "e", "f"]

// #4  class with private properties and  method

interface VehicleInterface {
  make: string;
  year: string;
  getinfo(): string;
}
interface CarInterface extends VehicleInterface {
  model: string;
  getModel(): string;
}

class Vehicle {
  constructor(protected make: string, protected year: string) {}
  public getinfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: string, private model: string) {
    super(make, year);
  }
  public getModel() {
    return `Car Model: ${this.model}`;
  }
}

const car = new Car("Toyota", "2020", "Corolla");
console.log(car.getinfo()); // Output: "Make: Toyota, Year: 2020"
console.log(car.getModel()); // Output: "Car Model: Corolla"

// #5 a function that takes a string | number and returns its lenght and number of multiply

type StringOrNumber = string | number;
function processValue(value: StringOrNumber): number {
  return typeof value === "string" ? value.length : value * 2;
}
console.log(processValue("Programming Hero")); // Output: 16
console.log(processValue(5)); // Output: 10

// #6 a function to find the product with the highest price in an array

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(product: Product[]): Product | null {
  return product.length === 0
    ? null
    : product.reduce((highest, current) => {
        return current.price > highest.price ? current : highest;
      }, product[0]);
}

console.log(
  getMostExpensiveProduct([
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 600 },
  ])
); // Output: { name: "Laptop", price: 1200 }

// #7 an enum Day for the days of the week

enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDaytype(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

console.log(getDaytype(Day.Monday)); // Output: "Weekday"
console.log(getDaytype(Day.Saturday)); // Output: "Weekend"

// #8  Create an async function that

const squareasync = async (num: number): Promise<number> => {
  try {
    return num < 0
      ? Promise.reject("Negative number")
      : await Promise.resolve(num * num);
  } catch (error) {
    return Promise.reject(`Error : ${error} is not a number`);
  }
};
squareasync(8).then((result) => console.log(result)); // Output: 25
squareasync(-5).catch((error) => console.log(error)); // Output: "Error : Negative number is not a number"
