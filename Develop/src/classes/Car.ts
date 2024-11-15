import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class extending Vehicle class
class Car extends Vehicle {
  // Declare additional properties specific to Car
  numberOfDoors: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  numberOfDoors: number   // Additional property for Car
  ) {
    // Call the parent class (Vehicle) constructor with 8 arguments
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    
    // Initialize the Car-specific property
    this.numberOfDoors = numberOfDoors;
  }

  // Additional methods specific to Car can be added here
  override printDetails(): void {
    super.printDetails();
    console.log(`Car number of doors: ${this.numberOfDoors}`);
  }
}

export default Car;