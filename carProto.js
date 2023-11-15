/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car{
    constructor(model){
        this.model = model;
        this.currentSpeed = 0;
    }
    // Increases currentSpeed by 1
    accelerate(){
        this.currentSpeed += 1;
    }
    // Decreases currentSpeed by 1
    brake(){
        this.currentSpeed -= 1;
    }
    // String Representation of Model. 
    toString(){
        console.log(`Model: ${this.model} | Travelling Speed: ${this.currentSpeed}`);
    }
}
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
// Note to Kyle; This needs work prior to Submission. 
class ElectricCar extends Car{
    constructor(model, currentSpeed){
        super(model, currentSpeed);
        this.motor = 'electric';
    }
    // Calls the Accelerate Method from the Inhereted Class Twice. 
    accelerate(){
        super.accelerate();
        super.accelerate();
    }
    toString(){
        console.log(`Electric Car | Current Speed: ${this.currentSpeed} | Model: ${this.model}`);
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const clownCar = new Car('Clown');
clownCar.accelerate();
clownCar.accelerate();
clownCar.brake();
clownCar.toString();

const electricCar = new ElectricCar('Electric');
electricCar.accelerate();
electricCar.accelerate();
electricCar.brake();
electricCar.toString();

