const square = function (x) {
  return x*x;
}

console.log(square(5));

const squareArrow = (x) => x*x;

console.log(squareArrow(5));


const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Mike Smith'));

const getFirstNameLong = (fullName) => {
  return fullName.split(' ')[0];
}
console.log(getFirstName('Judith Rowe'));
