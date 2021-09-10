const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

calculateSumOfAngles = (angle1, angle2, angle3) => {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

isTriangle = () => {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (sumOfAngles === 180) {
        output.innerHTML = ("Angles form a Triangle !")

    } else {
        output.innerHTML = ("Angles not form a triangle...")
    }

}

isTriangleBtn.addEventListener("click", isTriangle)