var userAge = parseInt(prompt("What is your age?"), 10);
if (isNaN(userAge) == true) {
    console.log("that is not a number");
}   else if (userAge < 18) {
    console.log("you are under 18");   
}   else if (userAge == 26) {
    console.log("cool, you are the same age as me");
}   else {
    console.log("hello");
}
