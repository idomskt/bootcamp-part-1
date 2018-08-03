// ============================== Class 03 - Guessing game ====================================
var rightFeedback = "Thats the right answer, great job!";
var wrongFeedback = "Wrong answer, please try again";
var rightAnswerCounter = 0;
// First question markup
function qNumberOne() {
    var answer = "israel";
    var question = prompt('What country I was born in?');
    console.log('Before answering the first question');
    if(question.toLowerCase() == answer){
        alert(rightFeedback);
        rightAnswerCounter ++;
        console.log('The user answer correct the first question');
    } else {
        alert(wrongFeedback);
    }
}
function petQuiz() {
    var answer = "yes";
    var shortAnswer = answer.charAt(0);
    var question = prompt("Does my dog name is Cookie?");
    if((question.toLowerCase() == answer) || (question.toLowerCase() == shortAnswer)) {
        alert(rightFeedback);  
        rightAnswerCounter ++;
    } else {
        alert(wrongFeedback);  
    }
}
function randomNumber() {
    var answer = 8;
    var question = prompt("Choose a number between 0 to 20");
    while(question != answer) {
        if(question < answer) {
            question = prompt("choose a higher number");
        } else {
            question = prompt("choose a lower number");
        }
    }
    alert("Bullseye!!!");
    rightAnswerCounter ++;
}
function quizScore() {
    alert("You answered " + rightAnswerCounter + " right questions");
}
// ============================== End of guessing game ====================================

// ============================== Class 04 - Continue guessing game ====================================

// Global variable
var rightAnswer = "Right!";
var wrongAnswer = "Wrong!";

// Generic markup for the questions
function genericFeedback(q, a, id) {
    var question = prompt(q);
    var printFeedback = document.getElementById(id);
    if (question.toLowerCase() == a) {
        printFeedback.innerHTML=rightAnswer;
    } else {
    printFeedback.innerHTML=wrongAnswer;
    }
}


// What states I lived in question
function statesILived() {
    var question = prompt("Please name one state that I lived in");
    var lowCase = question.toLowerCase();
    var states = ["minnesota", "michigan", "illinois", "oregon"];
    var printFeedback = document.getElementById("states");
    
    if(states.includes(lowCase)) {
        printFeedback.innerHTML=rightAnswer;
    } else {
        printFeedback.innerHTML=wrongAnswer;
    }
    
}
