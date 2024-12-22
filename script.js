// // Complete the js code

// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype
SportsCar.prototype = Object.create(Car.prototype);
// Set the constructor back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200

// function Car(make, model) {
// 	this.make = make;
// 	this.model = model;
// }


// function SportsCar (make, model, topSpeed) {
// 	this.make = make;
// 	this.model = model;
// 	this.topSpeed = topSpeed;
// }

// Car.prototype.getMakeModel = function(){
// 	return `${make} ${model}`;
// }
// SportsCar.prototype.getTopSpeed = function(){
// 	return `${topSpeed}`;
// }

// const car = new SportsCar("ferrari", "Testarossa", 200);
// console.log(car.getMakeModel()); 
// console.log(car.getTopSpeed()); 

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
