const add = (a,b) => {
  //console.log(arguments); <- won't work with arrow functions
  return a + b;
}
console.log(add(55,1));

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],

  // TESTS
  // printPlacesLived: function () {
  //   console.log(this.name);
  //   console.log(this.cities);
  //   //const name = this.name;
  //   //const that = this;
  //   // this.cities.forEach( function (city, argument){
  //   //   //console.log(name, 'This city', city, argument);
  //   //   console.log(that.name, 'This city', city, argument);
  //   // });
  //   this.cities.forEach( (city, argument) => {
  //     console.log(this.name, 'This city', city, argument);
  //   });

  //WON'T WORK WITH ARROW FUNCITON
  // printPlacesLived: () => {
  //   this.cities.forEach((city, argument) => {
  //     console.log(this.name, 'This city', city, argument);
  //   });
  // }

  // printPlacesLived: function() {
  //   this.cities.forEach((city, argument) => {
  //     console.log(this.name, 'This city', city, argument);
  //   });
  // }

  //SHORTER WAY
  // printPlacesLived() {
  //   this.cities.forEach((city, argument) => {
  //     console.log(this.name, 'This city', city, argument);
  //   });
  // }

  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city +'!');
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
