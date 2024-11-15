// Import necessary classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles = [];

// Example setup for the truck (assuming Truck class is implemented)
const truck1 = new Truck(
  Cli.generateVin(), 
  "red", 
  "Ford", 
  "F-150", 
  2021, 
  5000, 
  120, 
  [new Wheel(18, "Goodyear"), new Wheel(18, "Goodyear")], // Assuming wheels will be added
  10000 // Towing capacity
);

// Will use default wheels for the car
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  [new Wheel(16, "Bridgestone"), new Wheel(16, "Bridgestone")], // Assuming wheels will be added
  4 // Number of doors
);

// Setup motorbike with wheels
const motorbike1Wheels = [
  new Wheel(17, "Michelin"), 
  new Wheel(17, "Michelin")
];

// Motorbike setup (assuming motorbike class has engineCapacity as a parameter)
const motorbike1 = new Motorbike(
  Cli.generateVin(), 
  "black", 
  "Harley Davidson", 
  "Sportster", 
  2021, 
  500, 
  125, 
  motorbike1Wheels,
  1200 // engineCapacity
);

// Push vehicles to the array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1); // Add the motorbike to the array

// Create a new instance of the Cli class and start the CLI interface
const cli = new Cli(vehicles);
cli.startCli();
