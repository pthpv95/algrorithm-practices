class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

function permALone(src) {
  return src.length;
}

class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
  }

  getName() {
    return "It is a car: " + super.getName();
  }
}

var newCar = new Car("tesla");
console.log(newCar.getName());

function factorial(num) {
  var fac = 1;
  for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}
module.exports = {
  permALone,
  factorial,
  Vehicle,
  Car
};
