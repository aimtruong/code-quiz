// questions and answers
var q1 = "What is an example of a property name?";
var ans1 = [
    "1. Color",
    "2. Background-image",
    "3. Font-family",
    "4. All of the above"
]

var q2 = "You can center an image by doing display: block and then _________";
var ans2 = [
    "1. Padding: 10px",
    "2. Flex: wrap",
    "3. Margin: 0 auto",
    "4. Margin: auto 0"
]

var q3 = "How can you create a new branch and move to that branch?";
var ans3 = [
    "1. Git checkout -b <branch-name>",
    "2. Git checkout <branch-name>",
    "3. Git-branch <branch-name>",
    "4. Git checkout -d <branch-name>"
]

var q4 = "The condition in an if / else statement is enclosed with";
var ans4 = [
    "1. Parenthesis",
    "2. Curly brackets",
    "3. Semicolon",
    "4. Square brackets"
]

var q5 = "Where can you NOT use a break statment in?";
var ans5 = [
    "1. A switch",
    "2. A for loop",
    "3. An if/else statement",
    "4. A while loop"
]

// global variables
var questionEl = document.getElementsByName("h2");
var answersEl = document.getElementsByName("p");
var timerEl = document.getElementById("timer");

var i = 1;


// start function
function start(){
    questionEl.textContent = q1;
    answersEl.textContent = ans1;
    timer();
    displayQuestion();
}

// timer function
function timer(){
    var timeLeft = 60;

    var timeInterval = setInterval(function(){
        // when timer >= 0
        if(timeLeft >= 0){
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
            // user finishes quiz
            if(i === 5){
                timerEl.textContent = "Time: " + timeLeft;
                gameOver();
            }
        }
        // when timer is 0
        else{
            clearInterval(timeInterval);
            timerEl.textContent = "";
            gameOver();
        }
    }, 1000);

    console.log(timeLeft);
};


// question function


// click eventlistener for answer


    // when correct


    // when wrong


// game over function

    // save initials and score in local storage

