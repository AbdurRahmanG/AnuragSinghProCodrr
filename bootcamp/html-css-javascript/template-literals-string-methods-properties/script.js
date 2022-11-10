const message = "Assalamu Alaikum, I'm AbdurRahman G. ";

const welcome = "Welcome to Techily Fly. ";

const lastFourDigits = 1998;
const accountLastFourDigits = lastFourDigits.toString();

const myAccountNumber = accountLastFourDigits.padStart(16, "*");

console.log(myAccountNumber);

const stringTemplate = `My account number is ${myAccountNumber}. `;

console.log(stringTemplate);