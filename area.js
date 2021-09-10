const inputs = document.querySelectorAll(".length-input");
const areaBtn = document.querySelector("#area-button");
const output = document.querySelector("#output");

calculateAreaOfTriangle = (base, height) => {
    const area = 1 / 2 * (base * height);
    return area;
}

calculateArea = () => {
    if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0) {
        return output.innerHTML = "Please enter valid inputs";
    }
    if (!Number(inputs[0].value) || !Number(inputs[1].value)) {
        return output.innerHTML = "Please enter both the inputs";

    } else {
        const area = calculateAreaOfTriangle(Number(inputs[0].value), Number(inputs[1].value));
        output.innerHTML = "Area of Triangle is " + (area).toFixed(2) + "  cm²";

    }
}

areaBtn.addEventListener("click", calculateArea)

