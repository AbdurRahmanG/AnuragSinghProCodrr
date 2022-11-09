let username = document.getElementById("username");

const yourName = prompt("What's your name?");
if (yourName == "") {
    confirm("Are you sure?");
    username.innerHTML = "You have entered blank name!";
} else {
    alert("Your name is " + yourName);
    username.innerHTML = "Your name is " + yourName;
};


