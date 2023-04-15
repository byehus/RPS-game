const usrScore = 0;
const cpuScore = 0;
const usrScore_span = document.getElementById("usrScore_");
const cpuScore_span = document.getElementById("cpuScore_");
const score_div = document.querySelector(".score_");
const result_div = document.querySelector(".result_");
const rock_div = document.getElementById("roc_");
const paper_div = document.getElementById("pap_");
const scissors_div = document.getElementById("scis_");

function game(userChoice) {
    console.log("yes " + userChoice);
}

function cpuChoice() {
    const choices = ["roc_", "pap_", "scis_"];
    const randoNumber = Math.floor(Math.random() * 3);
    return choices[randoNumber];
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
