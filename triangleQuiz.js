const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const correctAnswer = ["90°", "Right angled", "Midsegment", "Isosceles triangle"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let optionSelected of formResults.values()) {
        if (optionSelected === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerHTML = "Your score is : " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);