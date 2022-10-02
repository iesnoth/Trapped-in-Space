
const myVar = {
    pressedKeys: [],
    keypad: document.querySelector('#keypad'),
    keys: this.keypad.children,
    solution: ['21', '23', '25', '27', '29']
}

//function chooses a random button
function doom() {
    myVar.doomNumber = Math.floor(Math.random() * 47) + 1;
    //turn this off when played by others
    console.log(myVar.doomNumber)
    return myVar.doomLink
}

//check solution array against pressedKeys array
function checkSolution() {
    solved = true;
    for (var i = 0; i < myVar.solution.length; i++) {
        value = myVar.solution[i]
        if (!myVar.pressedKeys.includes(value)) { solved = false }
    }
    for (var i = 0; i < myVar.pressedKeys.length; i++) {
        value = myVar.pressedKeys[i]
        if (!myVar.solution.includes(value)) { solved = false }
    }
    if (solved) {
        console.log('finished')
        
    }
    else {
        console.log('not solved');
    }

}

function unlock() {
    let throttleLeft = document.getElementbyId('throttle-left')
    throttleLeft.setAttribute('value','on')
    let throttleRight = document.getElementbyId('throttle-right')
    throttleRight.setAttribute('value','on')
}

//unlocks the throttle
//
// function unlock() {
//     let throttleLeft = document.getElementbyId('throttle-left');
//     throttleLeft.setAttribute('value','on');
//     let throttleRight = document.getElementbyId('throttle-right');
//     throttleRight.setAttribute('value','on');
// }



function destructButton(doom) {
    doom()
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click', () => {
        window.location.href = 'doom.html'

    })
}
destructButton(doom)