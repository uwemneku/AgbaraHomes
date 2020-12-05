let text = document.getElementsByTagName('p');
textToWrite = 'EFFICATIVE';
function writeText (a){
    text[0].innerText += a;
}

document.querySelector('video').playbackRate = 0.70;
document.querySelector('video').loop = "true";
document.querySelector('video').play();
