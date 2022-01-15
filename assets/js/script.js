// questions and answers
var q1 = "What is an example of a property name?";
var ans1 = [
    "1. Color",
    "2. Background-image",
    "3. Font-family",
    "4. All of the above"
];

var q2 = "You can center an image by doing display: block and then _________";
var ans2 = [
    "1. Padding: 10px",
    "2. Flex: wrap",
    "3. Margin: 0 auto",
    "4. Margin: auto 0"
];

var q3 = "How can you create a new branch and move to that branch?";
var ans3 = [
    "1. Git checkout -b <branch-name>",
    "2. Git checkout <branch-name>",
    "3. Git-branch <branch-name>",
    "4. Git checkout -d <branch-name>"
];

var q4 = "The condition in an if / else statement is enclosed with";
var ans4 = [
    "1. Parenthesis",
    "2. Curly brackets",
    "3. Semicolon",
    "4. Square brackets"
];

var q5 = "Where can you NOT use a break statment in?";
var ans5 = [
    "1. A switch",
    "2. A for loop",
    "3. An if/else statement",
    "4. A while loop"
];

// global variables
var questionEl = document.querySelector("#title");
var answersEl = document.querySelector("#section");
var startButtonEl = document.querySelector("#start-button");
var highScoreList = document.querySelector("#hs-list");
var nameInputEl = document.querySelector("#name");
var submitButtonEl = document.querySelector("#submit-button");
var timerEl = document.querySelector(".timer");

var i = 1;


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
function displayQuestion(){
    // start timer
    timer();

    for(i; i <= 5; i++){
        questionEl.textContent = q1;
        answersEl.textContent = ans1;
    }
    

    // click eventlistener for answer
    answerButton.addEventListener("click", function(event){
        if(q1){
            if(ans1[3]){

            }
            else{

            }
        }

        if(q2){
            if(ans2[2]){
                
            }
            else{
                
            }
        }

        if(q3){
            if(ans3[0]){
                
            }
            else{
                
            }

        }

        if(q4){
            if(ans4[0]){
                
            }
            else{
                
            }
        }

        if(q5){
            if(ans5[2]){
                
            }
            else{
                
            }
        }
    });
};

// game over page with event listener
submitButton.addEventListener("click", function(event){
    questionEl.textContent = "Game Over!";
    answersEl.textContent = "Your final score is " + timeLeft + ".";

    var player = {
        name = nameInputEl.value.trim(),
        score = timeLeft.value.trim()
    };

    // save initials and score in local storage
    localStorage.setItem("player", JSON.stringify(player));

    var getUser = localStorage.getItem("player");

    console.log(JSON.parse(get));

});



buttonEl.addEventListener("click", displayQuestion);