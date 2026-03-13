class Car{
  brand;
  model;
  speed=0;
  constructor(carDetails)
  {
    this.brand=carDetails.brand;
    this.model=carDetails.model;
  }
  go(){
    this.speed+=5;
    if(this.speed>200){
      this.speed=200;
    }
  }

  brake(){
    this.speed-=5;
    if(this.speed<0){
      this.speed=0;
    }
  }
  displayInfo(){
    console.log(`${this.brand} ${this.model} ${this.speed} km\h`);
  }
}

const car1=new Car({brand:'Toyota',model:'coralla'});
const car2=new Car({brand:'Tesla',model:'model 3.'});

console.log(car1);

car1.go();
car1.brake();
car1.go();
car1.go();
car1.go();
car1.brake();
console.log(car1.displayInfo());

console.log(car2);
car2.go();
car2.brake();
car2.go();
car2.go();
car2.brake();
console.log(car2.displayInfo());