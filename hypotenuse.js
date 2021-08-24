console.log("lets start");

const inputSides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-button");
const outputValue = document.querySelector("#output");

calculateSumOfSquares = (side1, side2) => {
    const sumOfSquares = side1 ** 2 + side2 ** 2;
    return sumOfSquares;
}

calculateHypotenuse = () => {

    const sumOfSquares = calculateSumOfSquares(2, 8);
    console.log(sumOfSquares);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)