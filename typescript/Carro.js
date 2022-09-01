var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators
function assemble(logo) {
    return function (target) {
        target.prototype.poner = function () {
            console.log('Vehicule is assmebling with logo: ' + logo);
        };
    };
}
// Inheritance
var motor = /** @class */ (function () {
    function motor(type) {
        this.type = type;
    }
    motor.prototype.getType = function () {
        return this.type;
    };
    motor.prototype.setType = function (type) {
        this.type = type;
    };
    return motor;
}());
// Class Definition
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    //Methods
    function Car(brand, color, model, year, capacity) {
        var _this = _super.call(this, 'car') || this;
        _this.brand = brand;
        _this.color = color;
        _this.model = model;
        _this.year = year;
        _this.capacity = capacity;
        return _this;
    }
    Car.prototype.getLavado = function () {
        return 'The price from maintenance is ' + 5000;
    };
    Car.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setYear = function (year) {
        this.year = year;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
    };
    Car.prototype.getCapacity = function () {
        return this.capacity;
    };
    Car = __decorate([
        assemble('corbatin')
    ], Car);
    return Car;
}(motor));
var car = new Car('Jeep', 'Orange', 'Rubicon', 2022, 4);
car.setBrand('Jeep2');
console.log(car);
console.log('Car(brand: ' +
    car.getBrand() +
    ', model: ' +
    car.getModel() +
    ', color:' +
    car.getColor());
console.log('Motor type: ' + car.getType());
car.poner();
