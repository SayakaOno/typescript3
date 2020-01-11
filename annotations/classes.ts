// class modifiers
// - public: can be called anywhere
// - private: can be called only inside the class
// - protected: can be called inside the class and its child classes

class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

const car1 = new Car(4, 'red');
car1.startDrivingProcess();
