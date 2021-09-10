const inputSides = document.querySelectorAll(".input-side");
const hypotenuseBtn = document.querySelector("#hypotenuse-button");
const outputValue = document.querySelector("#output");

calculateSumOfSquares = (side1, side2) => {
    const sumOfSquares = side1 ** 2 + side2 ** 2;
    return sumOfSquares;
}

calculateHypotenuse = () => {

    if (Number(inputSides[0].value) <= 0 || Number(inputSides[1].value) <= 0) {
        return outputValue.innerHTML = "Please enter valid inputs";

    } if (Number(!inputSides[0].value) || Number(!inputSides[1].value)) {
        return outputValue.innerHTML = "Please add both the inputs";

    } else {
        const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value));

        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

        outputValue.innerHTML = "Length of hypotenuse is " + (Math.round(lengthOfHypotenuse * 100) / 100).toFixed(2) + " cm²";
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)
