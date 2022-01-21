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
        var q1 = "What is an example of a event listener?";

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


// view high scores button
var header = document.querySelector("#view-HS");


// high score page
function highScorePage(){
    question.textContent = "High Scores";

    var hs = document.querySelector(".HS-list");

first = document.createElement("ol");
second = document.createElement("ol");
third = document.createElement("ol");
fourth = document.createElement("ol");
fifth = document.createElement("ol");
};


// timer
var headerEl = document.querySelector("header");
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
            highScorePage();
          }
        }, 1000);
};


// create start button and eventlistener
    var startbtnEl = document.querySelector(".start-button"); 
    
    startbtnEl.addEventListener("click", function(){
        paragraph.textContent = "";
        body.removeChild(startbtnEl);
        question.textContent = q1;
        body.appendChild(ans1El);
        timerStarts();

        // addeventlistener for answer click
        var questionAnswerEl = document.querySelectorAll("button");

        var correctOrWrongEl = document.createElement("p");
            correctOrWrongEl.textContent = "";
            correctOrWrongEl.setAttribute("style", "font-style: italic, color: rgba(155, 145, 145, 0.747)");
            body.appendChild(correctOrWrongEl);

        questionAnswerEl.forEach(button => {
            button.addEventListener("click", (e) =>{
                switch(question){
                    case q1El:
                        if(ans1AEl){
                            question.textContent = q2;
                            body.appendChild(ans2El);
                            correctOrWrongEl.textContent = "Correct!";
                            break;
                        }
                        else{
                            timeLeft = timeLeft - 10;
                            question.textContent = q2;
                            body.appendChild(ans2El);
                            correctOrWrongEl.textContent = "Wrong!";
                            break;
                        }
                    case q2El:
                        if(ans2BEl){
                            question.textContent = q3;
                            body.appendChild(ans3El);
                            correctOrWrongEl.textContent = "Correct!";
                            break;
                        }
                        else{
                            timeLeft = timeLeft - 10;
                            question.textContent = q3;
                            body.appendChild(ans3El);
                            correctOrWrongEl.textContent = "Wrong!";
                            break;
                        }
                    case q3El:
                        if(ans3AEl){
                            question.textContent = q4;
                            body.appendChild(ans4El);
                            correctOrWrongEl.textContent = "Correct!";
                            break;
                        }
                        else{
                            timeLeft = timeLeft - 10;
                            question.textContent = q4;
                            body.appendChild(ans4El);
                            correctOrWrongEl.textContent = "Wrong!";
                            break;
                        }
                    case q4El:
                        if(ans4AEl){
                            question.textContent = q5;
                            body.appendChild(ans5El);
                            correctOrWrongEl.textContent = "Correct!";
                            break;
                        }
                        else{
                            timeLeft = timeLeft - 10;
                            question.textContent = q5;
                            body.appendChild(ans5El);
                            correctOrWrongEl.textContent = "Wrong!";
                            break;
                        }
                    case q5El:
                        if(ans5CEl){
                            body.removeChild(ans5El);
                            highScorePage();
                            correctOrWrongEl.textContent = "Correct!";
                            break;
                        }
                        else{
                            timeLeft = timeLeft - 10;
                            body.removeChild(ans5El);
                            highScorePage();
                            correctOrWrongEl.textContent = "Wrong!";
                            break;
                        }
                }
            });
        });
    
    });


         
