class Car {
    constructor({
        speed = 0,
        price = 30000,
        maxSpeed = 200,
        isOn = false,
        distance = 0,
    }) {
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance
    }


    static getSpecs(car) {
        return (`${car.model}, ${car.maxSpeed}, ${car.speed}, ${car.isOn}, ${car.distance}, ${car.price}`);
    }


    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice
    }


    turnOn() {
        this._isOn = true;
    }


    turnOff() {
        this._isOn = false
        this._speed = 0;
    }


    accelerate(value) {
        let newSpeed = this._speed + value;
        this._speed = newSpeed < this._maxSpeed ? newSpeed : this._maxSpeed;
    }



    decelerate(value) {
        let newSpeed = this._speed - value;
        this._speed = newSpeed > 0 ? newSpeed : 0;
    }


    drive(hours) {
        if (this._isOn) {
            this._distance += hours * this._speed;
        }
    }

}
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000