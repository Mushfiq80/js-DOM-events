
// option 1
function makeRed() {
    document.body.style.background = 'red';
}

// Option 2
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue; //eikhane direct function likhe dileo hobe

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// another Option
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// Golden Rod option that we use
document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})