// const username = prompt("Type your Full Name") || "AbdurRahman G";
// const userAge = prompt("Type your Age") || 24;

// Or

// const username = prompt("Type your Full Name");
// const userAge = prompt("Type your Age");

// Or
const username = prompt("Type your Full Name");
const userAge = parseInt(prompt("Type your Age"));

// Truthy or Falsy
if(username){
    document.write(`Name: ${username}. `);
}

if(userAge || 0){
    document.write(`Age: ${userAge}. `);
}

// End of Truthy or Falsy

// if(username === null || username === "" || username === " ") {
//     document.write(`Name: AbdurRahman G. `);
// } else {
//     document.write(`Name: ${username}. `);
// }

// if(userAge === null || userAge == "" || userAge == " ") {
//     document.write(`Age: 24. `);
// } else {
//     document.write(`Age: ${parseInt(userAge)}. `);
// }

// userAge = parseInt(userAge);

if(userAge >= 18 && userAge <= 24) {
    document.write("You are a college student and you are studying computer science. ");
} else if(userAge >= 25 && userAge <= 45){
    document.write("You are a working professional. ");
} else if(userAge > 45) {
    document.write("You are old person. ");
}

document.write("Kindly enter a valid name and age!")



