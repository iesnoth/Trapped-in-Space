
const myVar = {
    pressedKeys: [],
    keypad: document.querySelector('#keypad'),
    keys: this.keypad.children,
    padSolution: ['21', '23', '25', '27', '29'],
    abbaPressedKeys: [],
    abbaSolution: ['9', '11', '13', '15'],
    audio:new Audio('assets/abba.mp3')

}

//function chooses a random button
function doom() {
    myVar.doomNumber = Math.floor(Math.random() * 47) + 1;
    //turn this off when played by others
    console.log(myVar.doomNumber)
    return myVar.doomLink
}

//check padSolution array against pressedKeys array
function checkSolution() {
    solved = true;
    for (var i = 0; i < myVar.padSolution.length; i++) {
        value = myVar.padSolution[i]
        if (!myVar.pressedKeys.includes(value)) { solved = false }
    }
    for (var i = 0; i < myVar.pressedKeys.length; i++) {
        value = myVar.pressedKeys[i]
        if (!myVar.padSolution.includes(value)) { solved = false }
    }
    if (solved) {
        window.alert('Throttle unlocked!')
        unlock()
    }
    else {
        console.log('not solved');
    }

}

//unlocks the throttle
function unlock() {
    document.getElementById('throttle-left').setAttribute('value','on')
    document.getElementById('throttle-right').setAttribute('value','on')
}

//uses changebg function to go to warp speed when throttle is thrown
function warpSpeed() {
        background = document.getElementById('bg');
        if(background.src = 'assets/sky.gif')
        {changeBg('assets/warp.gif');
        setTimeout(() =>{
            changeBg('assets/planet-gif.gif')
        },4000)
    }
        else if (background.src = 'assets/planet-gif.gif')
        {changeBg('assets/warp.gif');
        setTimeout(() =>{
            changeBg('assets/sky.gif')
        },4000)     
        }
}

//changes the background
function changeBg(url) {
    background = document.getElementById('bg')
    background.src = url
}

//sends user to the doom window
function destructButton() {
    doom()
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click', () => {
        window.location.href = 'doom.html'

    })
}
destructButton()


//***********abba puzzle */
//check abbaSolution against abbaPressed Keys
//plays 'dancing queen' when abbaPressedKeys = abbaSolution

function checkSolutionAbba() {
    solvedAbba = true;
    for (var i = 0; i < myVar.abbaSolution.length; i++) {
        value = myVar.abbaSolution[i]
        if (!myVar.abbaPressedKeys.includes(value)) { solvedAbba = false }
    }
    for (var i = 0; i < myVar.abbaPressedKeys.length; i++) {
        value = myVar.abbaPressedKeys[i]
        if (!myVar.abbaSolution.includes(value)) { solvedAbba = false }
    }
    if (solvedAbba) {
        myVar.audio.play();
    }
    else {
        myVar.audio.pause();
        console.log('not solved');
    }

}