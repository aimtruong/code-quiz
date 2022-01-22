// connect questions to title for easy textcontent change
var body = document.querySelector(".main-page");
var question = document.querySelector(".title");
var paragraph = document.querySelector(".section");

// connect answers to body
var ans1El = document.createElement("form");
var ans2El = document.createElement("form");
var ans3El = document.createElement("form");
var ans4El = document.createElement("form");
var ans5El = document.createElement("form");

// create element for questions and arrays
    // for question 01 // ans1AEl
        var q1El = "What is an example of a event listener?";

        var ans1AEl = document.createElement("button");
            ans1AEl.textContent = "1. Submit";

        var ans1BEl = document.createElement("button");
            ans1BEl.textContent = "2. Background-image";

        var ans1CEl = document.createElement("button");
            ans1CEl.textContent = "3. setItem";

        var ans1DEl = document.createElement("button");
            ans1DEl.textContent = "4. If-else statement";

    // for question 02 // ans2BEl
        var q2El = "What is not a Math method?";

        var ans2AEl = document.createElement("button");
            ans2AEl.textContent = "1. Math.pi";

        var ans2BEl = document.createElement("button");
            ans2BEl.textContent = "2. Math.count";

        var ans2CEl = document.createElement("button");
            ans2CEl.textContent = "3. Math.max";

        var ans2DEl = document.createElement("button");
            ans2DEl.textContent = "4. Math.floor";

    // for question 03 // ans3AEl
        var q3El = "What is a predefined action that we can call or invoke in our code?";

        var ans3AEl = document.createElement("button");
            ans3AEl.textContent = "1. A function";

        var ans3BEl = document.createElement("button");
            ans3BEl.textContent = "2. A while loop";

        var ans3CEl = document.createElement("button");
            ans3CEl.textContent = "3. A DOM";

        var ans3DEl = document.createElement("button");
            ans3DEl.textContent = "4. An alert";

    // for question 04 // ans4AEl
        var q4El = "The condition in an if / else statement is enclosed with...";
    
        var ans4AEl = document.createElement("button");
            ans4AEl.textContent = "1. A parenthesis";

        var ans4BEl = document.createElement("button");
            ans4BEl.textContent = "2. Curly brackets";

        var ans4CEl = document.createElement("button");
            ans4CEl.textContent = "3. A semicolon";

        var ans4DEl = document.createElement("button");
            ans4DEl.textContent = "4. Square brackets";

    // for question 05 // ans5CEl
        var q5El = "Where can you NOT use a break statment in?";
        
        var ans5AEl = document.createElement("button");
            ans5AEl.textContent = "1. A switch";

        var ans5BEl = document.createElement("button");
            ans5BEl.textContent = "2. A for loop";

        var ans5CEl = document.createElement("button");
            ans5CEl.textContent = "3. An if/else statement";

        var ans5DEl = document.createElement("button");
            ans5DEl.textContent = "4. A while loop";

// append answers
ans1El.append(ans1AEl, ans1BEl, ans1CEl, ans1DEl);
ans2El.append(ans2AEl, ans2BEl, ans2CEl, ans2DEl);
ans3El.append(ans3AEl, ans3BEl, ans3CEl, ans3DEl);
ans4El.append(ans4AEl, ans4BEl, ans4CEl, ans4DEl);
ans5El.append(ans5AEl, ans5BEl, ans5CEl, ans5DEl);


// high score list
var hs = document.createElement("form");

// button to go back to main page
var goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Go Back";
    
// button to clear high scores
var clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear High Scores";

// high scores
var first = document.createElement("ol");
var second = document.createElement("ol");
var third = document.createElement("ol");
var fourth = document.createElement("ol");
var fifth = document.createElement("ol");

var firstEl = {
    name: "n/a",
    highscore: 0
}

var secondEl = {
    name: "n/a",
    highscore: 0
}

var thirdEl = {
    name: "n/a",
    highscore: 0
}

var fourthEl = {
    name: "n/a",
    highscore: 0
}

var fifthEl = {
    name: "n/a",
    highscore: 0
}
    
localStorage.setItem("first HS", JSON.stringify(firstEl));
localStorage.setItem("second HS", JSON.stringify(secondEl));
localStorage.setItem("third HS", JSON.stringify(thirdEl));
localStorage.setItem("fourth HS", JSON.stringify(fourthEl));
localStorage.setItem("fifth HS", JSON.stringify(fifthEl));

var firstHS = localStorage.getItem("first HS");
    firstHS = JSON.parse(firstHS);

var secondHS = localStorage.getItem("second HS");
    secondHS = JSON.parse(secondHS);

var thirdHS = localStorage.getItem("third HS");
    thirdHS = JSON.parse(thirdHS);
    
var fourthHS = localStorage.getItem("fourth HS");
    fourthHS = JSON.parse(fourthHS);
    
var fifthHS = localStorage.getItem("fifth HS");
    fifthHS = JSON.parse(fifthHS);
    
first.textContent = "1. " + firstHS.name + " - " + firstHS.highscore;
second.textContent = "2. " + secondHS.name + " - " + secondHS.highscore;
third.textContent = "3. " + thirdHS.name + " - " + thirdHS.highscore;
fourth.textContent = "4. " + fourthHS.name + " - " + fourthHS.highscore;
fifth.textContent = "5. " + fifthHS.name + " - " + fifthHS.highscore;


// startbutton
var startbtnEl = document.querySelector(".start-button");

// function start()
function start(){
    paragraph.textContent = "";
        body.removeChild(startbtnEl);
        question.textContent = q1El;
        body.appendChild(ans1El);
        timerStarts();
        // addeventlistener for answer click
        var questionAnswerEl = document.querySelectorAll("button");

        var correctOrWrongEl = document.createElement("p");
            correctOrWrongEl.textContent = "";
            correctOrWrongEl.setAttribute("style", "font-style: italic, color: rgba(155, 145, 145, 0.747)");
            body.appendChild(correctOrWrongEl);

        for(var i = 1; i <= 5; i++){
            questionAnswerEl.forEach(button => {
                questionAnswerEl.addEventListener("click", (e) => {
                            if(question.textContent === q1El){
                                if(button == ans1AEl){
                                question.textContent = q2El;
                                body.appendChild(ans2El);
                                correctOrWrongEl.textContent = "Correct!";
                                }
                                else{
                                timeLeft = timeLeft - 10;
                                question.textContent = q2El;
                                body.appendChild(ans2El);
                                correctOrWrongEl.textContent = "Wrong!";
                                }
                            }
                            else if(question.textContent === q2El){
                                if(button == ans2BEl){
                                    question.textContent = q3El;
                                    body.appendChild(ans3El);
                                    correctOrWrongEl.textContent = "Correct!";
                                }
                                else{
                                    timeLeft = timeLeft - 10;
                                    question.textContent = q3El;
                                    body.appendChild(ans3El);
                                    correctOrWrongEl.textContent = "Wrong!";
                                }
                            }  
                            else if(question.textContent === q3El){
                                if(button == ans3AEl){
                                    question.textContent = q4El;
                                    body.appendChild(ans4El);
                                    correctOrWrongEl.textContent = "Correct!";
                                }
                                else{
                                    timeLeft = timeLeft - 10;
                                    question.textContent = q4El;
                                    body.appendChild(ans4El);
                                    correctOrWrongEl.textContent = "Wrong!";
                                }
                            }
                            else if(question.textContent === q4El){
                                if(button == ans4AEl){
                                    question.textContent = q5El;
                                    body.appendChild(ans5El);
                                    correctOrWrongEl.textContent = "Correct!";
                                }
                                else{
                                    timeLeft = timeLeft - 10;
                                    question.textContent = q5El;
                                    body.appendChild(ans5El);
                                    correctOrWrongEl.textContent = "Wrong!";
                                }
                            }  
                            else if(question.textContent === q5El){
                                if(button == ans5CEl){
                                    body.removeChild(ans5El);
                                    correctOrWrongEl.textContent = "Correct!";
                                    savePlayerScore();
                                    highScorePage();
                                }
                                else{
                                    timeLeft = timeLeft - 10;
                                    body.removeChild(ans5El);
                                    correctOrWrongEl.textContent = "Wrong!";
                                    savePlayerScore();
                                    highScorePage();
                                }
                            }    
                });
            });
        }
}


// go back button function
function goBack(){
    question.textContent = "Coding Quiz Challenge";
    paragraph.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    body.appendChild(startbtnEl);
    hs.textContent = "";
    goBackBtn.disabled;
    clearBtn.disabled;
    startbtnEl.addEventListener("click", start);
};

// clear function 
function clear(){
    firstEl = {
        name: "n/a",
        highscore: 0
    }

    secondEl = {
        name: "n/a",
        highscore: 0
    }

    thirdEl = {
        name: "n/a",
        highscore: 0
    }

    fourthEl = {
        name: "n/a",
        highscore: 0
    }

    fifthEl = {
        name: "n/a",
        highscore: 0
    }
    
    localStorage.setItem("first HS", JSON.stringify(firstEl));
    localStorage.setItem("second HS", JSON.stringify(secondEl));
    localStorage.setItem("third HS", JSON.stringify(thirdEl));
    localStorage.setItem("fourth HS", JSON.stringify(fourthEl));
    localStorage.setItem("fifth HS", JSON.stringify(fifthEl));

    var firstHS = localStorage.getItem("first HS");
    firstHS = JSON.parse(firstHS);

    var secondHS = localStorage.getItem("second HS");
    secondHS = JSON.parse(secondHS);

    var thirdHS = localStorage.getItem("third HS");
    thirdHS = JSON.parse(thirdHS);
    
    var fourthHS = localStorage.getItem("fourth HS");
    fourthHS = JSON.parse(fourthHS);
    
    var fifthHS = localStorage.getItem("fifth HS");
    fifthHS = JSON.parse(fifthHS);
    
    first.textContent = "1. " + firstHS.name + " " + firstHS.highscore;
    second.textContent = "2. " + secondHS.name + " " + secondHS.highscore;
    third.textContent = "3. " + thirdHS.name + " " + thirdHS.highscore;
    fourth.textContent = "4. " + fourthHS.name + " " + fourthHS.highscore;
    fifth.textContent = "5. " + fifthHS.name + " " + fifthHS.highscore;
}

// save player info
var playerName = document.createElement("input[name='playerName']").value;
var playerHS = document.querySelector("timeLeft");

var playerInfo = {
    name: playerName,
    highscore: playerHS
};


localStorage.setItem(playerInfo);


// view high scores button
var highscorebtn = document.querySelector("#view-HS");
    highscorebtn.addEventListener("click", highScorePage);

// high score page
function highScorePage(){
    question.textContent = "High Scores";
    paragraph.textContent = "";
    body.removeChild(startbtnEl);
    highscorebtn.textContent = "";

    body.appendChild(hs);
    hs.append(first, second, third, fourth, fifth);

    body.append(goBackBtn, clearBtn);

    goBackBtn.addEventListener("click", goBack);
    clearBtn.addEventListener("click", clear);
};
    

// timer
var timerEl = document.querySelector("#timer");
var timeLeft = 60;

function timerStarts(){
    var timeInterval = setInterval(function(){
        if(timeLeft >= 0){
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
          }
          else{
            clearInterval(timeInterval);
            timerEl.textContent = "";
            ans1El.textContent = "";
            ans2El.textContent = "";
            ans3El.textContent = "";
            ans4El.textContent = "";
            ans5El.textContent = "";
            highScorePage();
        }
    }, 1000);
};


// create start button and eventlistener    
startbtnEl.addEventListener("click", start);
        
