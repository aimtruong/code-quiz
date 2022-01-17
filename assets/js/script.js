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
    var pageEl = document.getElementsByClassName("main-page");
    var questionEl = document.querySelector("#title");
    var answersEl = document.querySelector("#section");
    var timerEl = document.querySelector(".timer");
    var startButtonEl = document.querySelector("#start-button");

// questions page
    var choiceA = document.createElement("button");
    var choiceB = document.createElement("button");
    var choiceC = document.createElement("button");
    var choiceD = document.createElement("button");
        
        // append childs
        body.appendChild(pageEl);
        pageEl.appendChild(answersEl);
        answersEl.append(choiceA, choiceB, choiceC, choiceD);

        // set Attributes
        choiceA.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");
        choiceB.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");
        choiceC.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");
        choiceD.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");

// high score page
    var highScoreList = document.createElement("ol");
    var nameInputEl = document.createElement("div");
    var submitButtonEl = document.createElement("button");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");

        // append Childs
        body.append(highScoreList, nameInputEl, submitButtonEl);
        highScoreList.append(li1, li2, li3, li4, li5);

        // set Attributes
        submitButtonEl.setAttribute("style", "background-color: yellowgreen; border-radius: 10px; border: none; font-size: 15px; padding: 10px 15px;");

        
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
        // questionEl.textContent = q1;
        // answersEl.textContent = ans1;
    }
    
    // click eventlistener for answer
    answerButton.addEventListener("click", function(event){
        switch(questionEl){
            case q1:
                if(ans1[3]){
                    
                }
                else{

                }

            case q2:
                if(ans2[2]){
                    
                }
                else{
                    
                }

            case q3:
                if(ans3[0]){
                    
                }
                else{
                    
                }


            case q4:
                if(ans4[0]){
                    
                }
                else{
                    
                }

            case q5:
                if(ans5[2]){
                    
                }
                else{
                    
                }
        }
    });
};

// game over page with event listener
submitButtonEl.addEventListener("click", function(event){
    questionEl.textContent = "Game Over!";
    answersEl.textContent = "Your final score is " + timeLeft + ".";

    var player = {
        name = nameInputEl.value.trim(),
        score = timeLeft.value.trim()
    };

    // save initials and score in local storage
    localStorage.setItem("player", JSON.stringify(player));

    var getUser = localStorage.getItem("player");

    console.log(JSON.parse(getUser));

    listEl = "complete function";

});



startButtonEl.addEventListener("click", displayQuestion);