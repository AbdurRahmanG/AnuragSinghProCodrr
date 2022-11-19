
// =================
// If else 

// const username = prompt("Type your Full Name") || "AbdurRahman G";
// const userAge = prompt("Type your Age") || 24;

// Or

// const username = prompt("Type your Full Name");
// const userAge = prompt("Type your Age");

// Or
// const username = prompt("Type your Full Name");
// const userAge = parseInt(prompt("Type your Age"));

// Truthy or Falsy
// if(username){
//     document.write(`Name: ${username}. `);
// }

// if(userAge || 0){
//     document.write(`Age: ${userAge}. `);
// }

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

// if(userAge >= 18 && userAge <= 24) {
//     document.write("You are a college student and you are studying computer science. ");
// } else if(userAge >= 25 && userAge <= 45){
//     document.write("You are a working professional. ");
// } else if(userAge > 45) {
//     document.write("You are old person. ");
// }

// document.write("Kindly enter a valid name and age!")

// ==================
// Switch case

// debugger

// const dayNumber = parseInt(prompt("Enter Day in Number Like (0,1,2,3,4,5,6)"));

// switch (dayNumber) {
//     case 0:
//         console.log("It's Thursday Today.");
//         document.write("It's Thursday Today.");
//         break;
//     case 1:
//         console.log("It's Friday Today.");  
//         document.write("It's Friday Today.");
//         break;
//     case 2:
//         console.log("It's Saturday Today.");
//         document.write("It's Saturday Today.");
//         break;
//     case 3:
//         console.log("It's Sunday Today.");
//         document.write("It's Sunday Today.");
//         break;
//     case 4:
//         console.log("It's Monday Today.");
//         document.write("It's Monday Today.");
//         break;
//     case 5:
//         console.log("It's Tuesday Today.");
//         document.write("It's Tuesday Today.");
//         break;
//     case 6:
//         console.log("It's Wednesday Today.");
//         document.write("It's Wednesday Today.");
//         break;
//     default:
//         console.log("Kindly Enter A Valid Day Number...");
//         document.write("Kindly Enter A Valid Day Number...");
// }


// Switch case example 2
// const grade = prompt("Enter your grade in character (A, B, C, D etc.)").toLowerCase();

// switch (grade) {
//     case "a":
//         console.log("Congratulations! You did well and You passed the Test.");
//         break;
//     case "b":
//         console.log("You did good, Needs more improvement.");
//         break;
//     case "c":
//         console.log("You did average, But needs more and more improvement.");
//         break;
//     default:
//         console.log("You are failed, you need to be clear with your goal.");
// }

// Ternary Operator
const gender = prompt("Choose gender like (m(male) or f(female))");
document.write(`${gender.toLowerCase() === "f" ? "She" : "He" } is a Student.`)