
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


// game over page with event listener
submitButtonEl.addEventListener("click", function(event){
    

});