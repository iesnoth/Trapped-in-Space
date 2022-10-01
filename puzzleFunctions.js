
const myVar = {
    pressedKeys : [],
}
//function chooses a random button
function doom() {
    myVar.doomNumber = Math.floor(Math.random() * 47) + 1;
    //turn this off when played by others
    console.log(myVar.doomNumber)
    return myVar.doomLink
}

//makes an array of the ids in the keypad
// function openThrottle(){
//     buttonArray[4].map()
// }
// openThrottle()

//onclick of a keypad button, the id should be saved to the pressedKeys array
//add another function that takes the id OUT OF the array if it is un-pressed

function destructButton(doom,restart) {
    doom()
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click', () => {
        window.location.href = 'doom.html'
        // myVar.screen = window.location.href
        restart()

    })
}
destructButton(doom)

//sends player back to homepage
function restart() {
    alert('You lose. Try again?');
    window.location = "index.html";
}