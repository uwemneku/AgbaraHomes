let openAnimation = function ()
{
    let changingText = document.getElementById('floatingText')
let text = ['Looking for a <br> HOME in AGBARA', 'We can help <br> YOU find one', 'Click GET STARTED <br> to begin']

let changeText = function () {
    changingText.innerHTML = text[0];
}

let animationThings = function() {
    setTimeout(() => {
        changingText.style.opacity = 1
        changingText.innerHTML = text[0]

    }, 2000);
    setTimeout(() => {
        changingText.style.opacity = 0
    }, 5000);
    setTimeout(() => {
        changingText.innerHTML = text[1]
    }, 6000);
    setTimeout(() => {
        changingText.style.opacity = 1
    }, 7000);
    setTimeout(() => {
        changingText.style.opacity = 0
    }, 
    8000);
    setTimeout(() => {
        changingText.innerHTML = text[2]
    }, 9000);
    setTimeout(() => {
        changingText.style.opacity = 1
    }, 10000);
    setTimeout(() => {
        changingText.style.opacity = 0
    },  13000);

}

animationThings();
setInterval(() => {
    animationThings();
}, 13000);




let startButton = document.getElementById('startButton');

startButton.addEventListener('click', page2)

function page2() {
    // let top = 
    document.getElementById('page2').style.top = '40px'
}


}
openAnimation();

let submitedValues = {type:'', bedrooms:'', bathrooms:'', location:'', tiolet:'', kitchen:''};

let selectButtons = document.getElementsByClassName('select');