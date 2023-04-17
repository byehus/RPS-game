let usrScore = 0;
let cpuScore = 0;
const usrScore_span = document.getElementById("usrScore_");
const cpuScore_span = document.getElementById("cpuScore_");
const score_div = document.querySelector(".score_");
const result_h2 = document.querySelector(".result_ > h2");
const rock_div = document.getElementById("roc_");
const paper_div = document.getElementById("pap_");
const scissors_div = document.getElementById("scis_");

function getCpuChoice() {
    const choices = ["roc_", "pap_", "scis_"];
    const randoNumber = Math.floor(Math.random() * 3);
    return choices[randoNumber];
}

function win(userChoice, cpuChoice) {
    usrScore++;
    usrScore_span.innerHTML = usrScore;
    cpuScore_span.innerHTML = cpuScore;
    result_h2.innerHTML = "You win!";
}

function lose(userChoice, cpuChoice) {
    cpuScore++;
    usrScore_span.innerHTML = usrScore;
    cpuScore_span.innerHTML = cpuScore;
    result_h2.innerHTML = "You lose!";
}

function draw(userChoice, cpuChoice) {
    result_h2.innerHTML = "It's a draw!";
}

function game(userChoice) {
    const cpuChoice = getCpuChoice();
    switch (userChoice + cpuChoice) {
        case "roc_scis_":
        case "pap_roc_":
        case "scis_pap_":
            win(userChoice, cpuChoice);
            break;
        case "roc_pap_":
        case "pap_scis_":
        case "scis_roc_":
            lose(userChoice, cpuChoice);
            break;
        case "roc_roc_":
        case "pap_pap_":
        case "scis_scic_":
            draw(userChoice, cpuChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("roc_");
    });

    paper_div.addEventListener("click", function () {
        game("pap_");
    });

    scissors_div.addEventListener("click", function () {
        game("scis_");
    });
}

main();
