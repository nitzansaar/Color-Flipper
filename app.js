const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // change the mfing background color
    // get random color
    let rand = colors[getRandomNum()];
    document.body.style.backgroundColor = rand;
    color.textContent = rand;
});

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}


