// Generate random number between 10 to 100
const randomNumber = Math.floor(Math.random() * 90) + 10;
document.write(` Random Number = ${randomNumber}. `);

// Calculate are of a rectangle
const width = parseInt(prompt("Enter width of a rectangle"));
const height = parseInt(prompt("Enter height of a rectangle"));

const areaOfRectangle = width * height;
document.write(` Area of Rectangle = ${areaOfRectangle}. `);

// Calculate are of a circle
const radius = parseInt(prompt("Enter radius of a circle"));

const areaOfRadius = ((Math.PI) * (Math.pow(radius, 2)));
document.write(` Area of Circle = ${areaOfRadius}. `);
