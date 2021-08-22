console.log("its working!");

const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

isTriangle = () => {
    console.log("triangle formed");
}

isTriangleBtn.addEventListener("click", isTriangle)