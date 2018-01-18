class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    return `Hi. I am ${this.name}`; //template strings - ES6
  }

  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += ` His major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting(){
    let desc = super.getGreeting();
    if(this.homeLocation){
      desc += ` I am visiting from ${this.homeLocation}.`;
    }
    return desc;
  }
}

const me = new Student('Bart Glo', 23, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getDescription());

const otherS = new Student();
console.log(otherS.hasMajor());
console.log(otherS.getDescription());

const other = new Person();
console.log(other);
console.log(other.getDescription());

const trave = new Traveler();
console.log(trave.getGreeting());
// --------------------------------------
const obj = {
  name: 'Vikram',
  getName (){
    return this.name;
  }
};

const getName = obj.getName.bind(obj);
console.log(getName());
