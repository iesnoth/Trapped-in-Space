
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
    solved = true
    for (var i = 0; i < myVar.solution.length; i++) {
        value = myVar.solution[i]
        if (!myVar.pressedKeys.includes(value)) { solved = false }
    }
    for (var i = 0; i < myVar.pressedKeys.length; i++) {
        value = myVar.pressedKeys[i]
        if (!myVar.solution.includes(value)) { solved = false }
    }
    if (solved) {
        unlock()
    }
    else {
        console.log('not solved')
    }
}

//unlocks the throttle
//
function unlock() {
    let throttles = document.getElementsByClassName('throttle')
    throttles.setAttribute('value','open')
}



    // let div = document.getElementById('center-console');
    // let locked = document.getElementById('throttle-left');
    // div.removeChild(locked);
    // let throttleLeft = move(buttonFunction('assets/throttle/left.png', 'assets/throttle/left-up.png', 'center-console', 'throttle-left-open')).to(21,-120);
    // div.appendChild(throttleLeft);
    // let lockedRight = document.getElementById('throttle-right');
    // div.removeChild(lockedRight);
    // let throttleRight = move(buttonFunction('assets/throttle/right.png', 'assets/throttle/right-up.png', 'center-console', 'throttle-right-open')).to(18, -122);
    // div.appendChild(throttleRight);
    // console.log("unlocked!")



function destructButton(doom) {
    doom()
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click', () => {
        window.location.href = 'doom.html'

    })
}
destructButton(doom)

//sends player back to homepage
function restart() {
    alert('You lose. Try again?');
    window.location = "index.html";
}