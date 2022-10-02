
const myVar = {
    pressedKeys: [],
    keypad: document.querySelector('#keypad'),
    keys: this.keypad.children,
    padSolution: ['21', '23', '25', '27', '29'],
    abbaPressedKeys: [],
    abbaSolution: ['9', '11', '13', '15']

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
        console.log(solved)
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

function warpSpeed() {
        background = document.getElementById('bg');
        background.src = 'assets/warp.gif';
        setTimeout(() =>{
            changeBg(FILL IN)
        },4000)
}

function changeBg(url) {
    background = document.getElementById('bg')
    background.src = url
}


function destructButton(doom) {
    doom()
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click', () => {
        window.location.href = 'doom.html'

    })
}
destructButton(doom)


//***********abba puzzle */
//check abbaSolution against abbaPressed Keys
// function checkSolutionAbba() {
//     solvedAbba = true;
//     for (var i = 0; i < myVar.abbaSolution.length; i++) {
//         value = myVar.abbaSolution[i]
//         if (!myVar.abbaPressedKeys.includes(value)) { solved = false }
//     }
//     for (var i = 0; i < myVar.abbaPressedKeys.length; i++) {
//         value = myVar.abbaPressedKeys[i]
//         if (!myVar.abbaSolution.includes(value)) { solved = false }
//     }
//     if (solvedAbba) {
//         console.log('solvedAbba')
//     }
//     else {
//         console.log('not solved');
//     }

// }