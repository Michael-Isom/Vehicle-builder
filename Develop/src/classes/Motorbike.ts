import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  // Declare properties
  override color: string;
  override weight: number;
  override topSpeed: number;
  override wheels: Wheel[] = [];
  engineCapacity: number; // New property for engine capacity

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    engineCapacity: number // New argument for engine capacity
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.engineCapacity = engineCapacity; // Initialize the engineCapacity property

    // Ensure wheels array contains exactly 2 elements
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Override wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override printDetails method
  override printDetails(): void {
    super.printDetails();
    console.log(`Motorbike color: ${this.color}`);
    console.log(`Motorbike weight: ${this.weight}`);
    console.log(`Motorbike top speed: ${this.topSpeed}`);
    console.log(`Motorbike engine capacity: ${this.engineCapacity}cc`); // Print engine capacity
  }

  // Override start method
  override start(): void {
    super.start();
    console.log('Motorbike started');
  }

  // Override accelerate method
  override accelerate(change: number): void {
    super.accelerate(change);
    console.log(`Motorbike accelerated to ${this.currentSpeed} mph`);
  }

  // Override decelerate method
  override decelerate(change: number): void {
    super.decelerate(change);
    console.log(`Motorbike decelerated to ${this.currentSpeed} mph`);
  }

  // Override stop method
  override stop(): void {
    super.stop();
    console.log('Motorbike stopped');
  }

  // Override turn method
  override turn(direction: string): void {
    super.turn(direction);
    console.log(`Motorbike turned ${direction}`);
  }

  // Override reverse method
  override reverse(): void {
    super.reverse();
    console.log('Motorbike reversed');
  }
}

export default Motorbike;