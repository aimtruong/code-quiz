
// high score page
var header = document.querySelector("header");
var hs = document.querySelector(".HS-list");

first = document.createElement("ol");
second = document.createElement("ol");
third = document.createElement("ol");
fourth = document.createElement("ol");
fifth = document.createElement("ol");

// current player

var playerInfo = {
    initial: INITIAL,
    highscore: HIGHSCORE
};


// current high scores
    var firstHighScoreInfo = {
        initial: "n/a",
        highscore: 0
    };
    
    var secondHighScoreInfo = {
        initial: "n/a",
        highscore: 0
    };
    
    var thirdHighScoreInfo = {
        initial: "n/a",
        highscore: 0
    };
    
    var fourthHighScoreInfo = {
        initial: "n/a",
        highscore: 0
    };
    
    var fifthHighScoreInfo = {
        initial: "n/a",
        highscore: 0
    };

    playerInfo.textContent = playerInfo;
    first.textContent = firstHighScoreInfo;
    second.textContent = secondHighScoreInfo;
    third.textContent = thirdHighScoreInfo;
    fourth.textContent = fourthHighScoreInfo;
    fifth.textContent = fifthHighScoreInfo;

if (playerInfo.highscore > firstHighScoreInfo.highscore){
    localStorage.setItem(firstHighScoreInfo.initial, playerInfo.initial);
    localStorage.setItem(firstHighScoreInfo.highscore, playerInfo.highscore);
}
else if(playerInfo.highscore > secondHighScoreInfo.highscore){
    localStorage.setItem(secondHighScoreInfo.initial, playerInfo.initial);
    localStorage.setItem(secondHighScoreInfo.highscore, playerInfo.highscore);
}
else if(playerInfo.highscore > thirdHighScoreInfo.highscore){
    localStorage.setItem(thirdHighScoreInfo.initial, playerInfo.initial);
    localStorage.setItem(thirdHighScoreInfo.highscore, playerInfo.highscore);
}
else if(playerInfo.highscore > fourthHighScoreInfo.highscore){
    localStorage.setItem(fourthHighScoreInfo.initial, playerInfo.initial);
    localStorage.setItem(fourthHighScoreInfo.highscore, playerInfo.highscore);
}
else if(playerInfo.highscore > fifthHighScoreInfo.highscore){
    localStorage.setItem(fifthHighScoreInfo.initial, playerInfo.initial);
    localStorage.setItem(fifthHighScoreInfo.highscore, playerInfo.highscore);
}
else{
    console.log(playerInfo);
}


// button to clear high scores
var clearHighScoreEl = document.createElement("button");
    
clearHighScoreEl.addEventListener("click", function(){

    });
    
header.append(clearHighScoreEl);