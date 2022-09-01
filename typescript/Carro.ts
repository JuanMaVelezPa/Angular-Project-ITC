// Decorators
function assemble(logo: string) {
  return function (target: Function) {
    target.prototype.poner = function (): void {
      console.log('Vehicule is assmebling with logo: ' + logo);
    };
  };
}

// Interface Definition
interface maintenance {
  getLavado(): string;
}

// Inheritance
class motor {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string) {
    this.type = type;
  }
}

// Class Definition
@assemble('corbatin')
class Car extends motor implements maintenance {
  // Properties
  public brand: string;
  public color: string;
  public model: string;
  public year: number;
  public capacity: number;

  //Methods
  constructor(
    brand: string,
    color: string,
    model: string,
    year: number,
    capacity: number
  ) {
    super('car');
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.year = year;
    this.capacity = capacity;
  }
  getLavado(): string {
    return 'The price from maintenance is ' + 5000;
  }

  public setBrand(brand: string) {
    this.brand = brand;
  }

  public getBrand(): string {
    return this.brand;
  }

  public setColor(color: string) {
    this.color = color;
  }
  public getColor(): string {
    return this.color;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel(): string {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear(): number {
    return this.year;
  }

  public setCapacity(capacity: number) {
    this.capacity = capacity;
  }

  public getCapacity(): number {
    return this.capacity;
  }
}

var car: Car = new Car('Jeep', 'Orange', 'Rubicon', 2022, 4);
car.setBrand('Jeep2');
console.log(car);
console.log(
  'Car(brand: ' +
    car.getBrand() +
    ', model: ' +
    car.getModel() +
    ', color:' +
    car.getColor()
);
console.log('Motor type: ' + car.getType());
// car.poner();
