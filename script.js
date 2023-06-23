class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = new Array();
  addPerson(personInfo) {
    this.residents.push(personInfo);
  }
}

class House {
  house = new Array();
  constructor(maxAmount) {
    this.maxAmount = maxAmount;
  }
  addApartment(apartmentInfo) {
    if (this.house.length < this.maxAmount) {
      this.house.push(apartmentInfo);
    } else {
      console.log("Sorry house is full");
    }
  }
}

const person1 = new Person("Tom", "male");
const person2 = new Person("Jane", "female");
const person3 = new Person("John", "male");
const person4 = new Person("Kate", "female");
const person5 = new Person("Jordan", "male");
const person6 = new Person("Dana", "female");
const person7 = new Person("Bob", "male");
const person8 = new Person("Rosa", "female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();
const apartment5 = new Apartment();

apartment1.addPerson(person2);
apartment1.addPerson(person1);

console.log(apartment1);

apartment2.addPerson(person4);
apartment2.addPerson(person3);

console.log(apartment2);

apartment3.addPerson(person6);
apartment3.addPerson(person5);
apartment3.addPerson(person7);
console.log(apartment3);

apartment4.addPerson(person8);
console.log(apartment4);

console.log(apartment5);

const house1 = new House(3);
const house2 = new House(4);
const house3 = new House(10);
const house4 = new House(200);

house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment3);
house1.addApartment(apartment4);
console.log(house1);

house2.addApartment(apartment1);
house2.addApartment(apartment2);
house2.addApartment(apartment3);
house2.addApartment(apartment4);
house2.addApartment(apartment5);

console.log(house2);

house3.addApartment(apartment1);
house3.addApartment(apartment2);
house3.addApartment(apartment3);
house3.addApartment(apartment4);
house3.addApartment(apartment5);
house3.addApartment(apartment1);
house3.addApartment(apartment2);
house3.addApartment(apartment3);
house3.addApartment(apartment4);
house3.addApartment(apartment5);
house3.addApartment(apartment5);

console.log(house3);

console.log(house4);
