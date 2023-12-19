let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const getpcchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const draw = () => {
    console.log("game was draw.");
    msg.innerText = "Draw the game. Play again.";
    msg.style.backgroundColor = "black";
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
};

const play = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = getpcchoice();
    console.log("comp choice = ", compchoice);
    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
    } else {
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        play(userchoice);
    });
});


