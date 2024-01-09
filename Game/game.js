// Declaing variable for keeping track of score of computer and user
let user_score = 0;
let comp_score = 0;

//Accesing all div of choices and msg to change it
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//Aceesing paragraph of score-board to update score on screen
let user_para = document.querySelector("#user-score");
let comp_para = document.querySelector("#comp-score");

//By forEach loop identifying which option is selected by user and sending it to playGame() function
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});

//Function to change message as per user win or loses
const msg_generator = (user_win,user_choice,comp_choice) => {
    if(user_win){
        user_score++;
        user_para.innerText = user_score;
        msg.innerText = "You Win! "+"Your "+user_choice+" beats "+comp_choice;
        msg.style.backgroundColor = "green";
    }
    else {
        comp_score++;
        comp_para.innerText = comp_score;
        msg.innerText = "You Lost! "+comp_choice+" beats Your "+user_choice;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (user_choice) => {
    const comp_choice = getCompChoice();
    
    if(user_choice !== comp_choice){
        let user_win = true;
        
        if(user_choice === "rock"){
            user_win = comp_choice === "paper" ? false : true;
        }
        else if(user_choice === "scissor"){
            user_win = comp_choice === "paper" ? true : false;
        }
        else {
            user_win = comp_choice === "scissor" ? false : true;
        }
        msg_generator(user_win,user_choice,comp_choice);
    }
    else {
        msg.innerText = "Game was Draw ! Play Again";
        msg.style.backgroundColor = "#081b31";
    }
};

//Function to generate computer choice
const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};