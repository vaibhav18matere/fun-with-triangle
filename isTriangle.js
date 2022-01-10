const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

const calculateSumOfAngles = (angle1, angle2, angle3) => {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

const isTriangle = () => {

    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0) {
        return output.innerHTML = "Please enter valid inputs";
    }

    if (!Number(inputs[0].value) || !Number(inputs[1].value) || !Number(inputs[2].value)) {
        //checking for empty input given by user
        return output.innerHTML = "Please enter all the inputs";
    } else {

        if (sumOfAngles === 180) {
            output.innerHTML = ("Angles form a Triangle !")

        } else {
            output.innerHTML = ("Angles not form a triangle")
        }

    }
}

isTriangleBtn.addEventListener("click", isTriangle);