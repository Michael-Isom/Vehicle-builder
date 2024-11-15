import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';

class Truck extends Vehicle implements AbleToTow {
  // Properties
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels); // Call to parent constructor
    this.towingCapacity = towingCapacity;

    if (this.wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
  }

  // Override start method
  override start(): void {
    super.start();
    console.log('Truck started');
  }

  // Override accelerate method
  override accelerate(change: number): void {
    super.accelerate(change);
    console.log(`Truck accelerated to ${this.currentSpeed} mph`);
  }

  // Override decelerate method
  override decelerate(change: number): void {
    super.decelerate(change);
    console.log(`Truck decelerated to ${this.currentSpeed} mph`);
  }

  // Override stop method
  override stop(): void {
    super.stop();
    console.log('Truck stopped');
  }

  // Override turn method
  override turn(direction: string): void {
    super.turn(direction);
    console.log(`Truck turned ${direction}`);
  }

  // Override reverse method
  override reverse(): void {
    super.reverse();
    console.log('Truck reversed');
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const make = vehicle?.make;
    const model = vehicle?.model;

    if (make && model) {
      console.log(`Vehicle to be towed: ${make} ${model}`);
    } else {
      console.log("Vehicle information is not available.");
    }

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${make} ${model} is being towed.`);
    } else {
      console.log(`The ${make} ${model} is too heavy to be towed.`);
    }
  }

  // Override printDetails method
  override printDetails(): void {
    super.printDetails();
    console.log(`Truck towing capacity: ${this.towingCapacity} kg`);
  }
}

export default Truck;