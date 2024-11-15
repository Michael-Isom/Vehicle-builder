import inquirer, { Answers } from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js"; // Wheel import is now needed

// Define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers: Answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  createVehicle(): void {
    console.log("Creating a new vehicle...");

    inquirer
      .prompt([
        { type: 'input', name: 'vin', message: 'Enter VIN:' },
        { type: 'input', name: 'color', message: 'Enter color:' },
        { type: 'input', name: 'make', message: 'Enter make:' },
        { type: 'input', name: 'model', message: 'Enter model:' },
        { type: 'number', name: 'year', message: 'Enter year:' },
        { type: 'number', name: 'weight', message: 'Enter weight (kg):' },
        { type: 'number', name: 'topSpeed', message: 'Enter top speed (mph):' },
      ])
      .then((answers: Answers) => {
        const wheels: Wheel[] = [
          new Wheel(16, 'Michelin'),
          new Wheel(16, 'Michelin'),
          new Wheel(16, 'Michelin'),
          new Wheel(16, 'Michelin'),
        ];

        const newCar = new Car(
          answers.vin,
          answers.color,
          answers.make,
          answers.model,
          answers.year,
          answers.weight,
          answers.topSpeed,
          wheels,
          4
        );

        this.vehicles.push(newCar);
        console.log('New car created!');
      });
  }

  performActions(): void {
    console.log(`Performing actions on vehicle with VIN: ${this.selectedVehicleVin}`);
    // Additional action implementations (start, stop, accelerate, etc.)
  }

  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers: Answers) => {
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// Export the Cli class (default export)
export default Cli;
