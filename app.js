const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Get all elements with the id btn
const btn = document.getElementById('btn');

// Get the first element with the id color
const color = document.querySelector(".color");

// Generate a random number when number is clicked
btn.addEventListener("click", function () {
    // Get random number between 0 - 3
    const randomNumber = 2;
    console.log(randomNumber);

    // Change the backgroundColor style property to the randomNumber color
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.random() * colors.length;
}