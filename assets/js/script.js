// questions and answers
var q1 = "What is an example of a event listener?";
var ans1 = [
    "1. Submit",
    "2. Background-image",
    "3. setItem",
    "4. If-else statement"
];

var q2 = "What is not a Math method?";
var ans2 = [
    "1. Math.pi",
    "2. Math.count",
    "3. Math.max",
    "4. Math.floor"
];

var q3 = "What is a predefined action that we can call or invoke in our code?";
var ans3 = [
    "1. A function",
    "2. A while loop",
    "3. A DOM",
    "4. An alert"
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

// front page
    var body = document.body;
    var pageEl = document.querySelector(".main-page");
    var questionEl = document.querySelector(".title");
    var answersEl = document.querySelector(".section");
    var timerEl = document.querySelector("#timer");
    var startButtonEl = document.querySelector(".start-button");

    // append childs
    body.appendChild(pageEl);
    pageEl.appendChild(answersEl);

// questions page
    var choiceA = document.createElement("button");
    var choiceB = document.createElement("button");
    var choiceC = document.createElement("button");
    var choiceD = document.createElement("button");

    // set Attributes
    choiceA.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");
    choiceB.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");
    choiceC.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");
    choiceD.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");

// question number user is on 
var i = 1;

// check if answer is correct function
function checkAnswer(i){
    switch(i){
        case 1:
            if(choiceA.click){
                console.log('correct');
                break;
            }
            else{
                console.log('wrong');
                break;
            }
    };
};


// timer variable to countdown and save for player's time
var timeLeft = 5;

// timer function
function timer(){

    var timeInterval = setInterval(function(){
        // when timer >= 0, count down by 1
        if(timeLeft >= 0){
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
            // user finishes quiz
            if(i === 6){
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
};


// question function
function displayQuestion(){
    // start timer
    timer();

    startButtonEl.style.display = 'none';
    answersEl.textContent = '';

    answersEl.appendChild(choiceA);
    answersEl.appendChild(choiceB);
    answersEl.appendChild(choiceC);
    answersEl.appendChild(choiceD);
    
        // addEventListeners to choice buttons to check for correct answer and display next question
        choiceA.addEventListener('click', checkAnswer);
        choiceB.addEventListener('click', checkAnswer);
        choiceC.addEventListener('click', checkAnswer);
        choiceD.addEventListener('click', checkAnswer);

    for(i; i <= 6; i++){
        switch(i){
            case 1:
                questionEl.textContent = q1;
                choiceA.textContent = ans1[0];
                choiceB.textContent = ans1[1];
                choiceC.textContent = ans1[2];
                choiceD.textContent = ans1[3];
            case 2:
                questionEl.textContent = q2;
                break;
            case 3:
                questionEl.textContent = q3;
                break;
            case 4:
                questionEl.textContent = q4;
                break;
            case 5:
                questionEl.textContent = q5;
                break;
        }
    }


};

function gameOver(){
    questionEl.textContent = "Game Over!";
    answersEl.textContent = "Your final score is " + timeLeft + ".";

    var nameInputEl = document.createElement('input');
        nameInputEl.className('nameInput');
        nameInputEl.textContent = 'Enter Name';
        pageEl.appendChild(nameInputEl);

    var player = {
        name: nameInputEl.value.trim(),
        score: timeLeft.value.trim()
    };

    // save initials and score in local storage
    localStorage.setItem("player", JSON.stringify(player));

    var getUser = localStorage.getItem("player");

    console.log(JSON.parse(getUser));
};

startButtonEl.addEventListener("click", displayQuestion);


