console.log("lets start");

const inputSides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-button");
const outputValue = document.querySelector("#output");

calculateSumOfSquares = (side1, side2) => {
    const sumOfSquares = side1 ** 2 + side2 ** 2;
    return sumOfSquares;
}

calculateHypotenuse = () => {

    const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    outputValue.innerHTML = "Length of hypotenuse is " + (Math.round(lengthOfHypotenuse * 100) / 100).toFixed(2);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)