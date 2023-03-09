class Car {
  constructor(brand, year, horsepower) {
    this.brand = brand;
    this.year = year;
    this.horsepower = horsepower;
  }

  calculateAge() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  canDrive(userAge) {
    if (userAge >= 25) {
      return true;
    } else {
      return this.horsepower <= 105;
    }
  }
}
let users = [
  { fullName: 'Josif Stojkov', age: 30 },
  { fullName: 'Trajce Hristov', age: 20 },
  { fullName: 'Vasko Galev', age: 25 },
];

let cars = [
  new Car('Toyota', 2010, 120),
  new Car('Honda', 2015, 95),
  new Car('Ford', 2018, 80),
];

for (let user of users) {
  console.log(`${user.fullName} can drive:`);
  for (let car of cars) {
    if (car.canDrive(user.age)) {
      console.log(`- ${car.brand} (${car.horsepower}hp)`);
    }
  }
  console.log('---');
}
