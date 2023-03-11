
// makes the buttons and gives attributes
//imputs are all strings
//returns an HTML object

function newButton(url: string, id: string, id2: string): HTMLImageElement {
    let button: HTMLImageElement = document.createElement('img')
    button.src = url
    button.style.position = 'relative';
    button.setAttribute('class', 'switch');
    button.setAttribute('value', 'off');
    button.setAttribute('id', id2);
    // the ! forces the TS to ignore the possibility of null and move on
    document.getElementById(id)!.appendChild(button);
    return button
}



//give buttons functionality
function buttonFunction(url1: string, url2: string, id: string, id2: string): HTMLImageElement {
    let button: HTMLImageElement = newButton(url1, id, id2)
    //turns buttons off and on, adds function
    button.addEventListener('click', (e: MouseEvent) => {
        if (e.target instanceof Element) {
            if (e.target.getAttribute("value") == "off") {
                e.target.src = url2
                e.target.setAttribute('value', 'on')
                if (typeof e.target.id == 'number') {
                    if (e.target.id >= 21 && e.target.id <= 29) {
                        myVar.pressedKeys.push(e.target.id)
                    }
                    else if (e.target.id >= 9 && e.target.id <= 16) {
                        myVar.abbaPressedKeys.push(e.target.id)
                    }
                }
            }
        }
        else {
            if (e.target instanceof Element) {
                e.target.src = url1
                e.target.setAttribute('value', 'off')
                if (typeof e.target.id == 'number') {
                    if (e.target.id >= 21 && e.target.id <= 29) {
                        myVar.pressedKeys.indexOf(e.target.id) !== -1 && myVar.pressedKeys.splice(myVar.pressedKeys.indexOf(e.target.id), 1)
                    }
                    else if (e.target.id >= 9 && e.target.id <= 16) {
                        myVar.abbaPressedKeys.indexOf(e.target.id) !== -1 && myVar.abbaPressedKeys.splice(myVar.abbaPressedKeys.indexOf(e.target.id), 1)
                    }
                }
            }
        }
        checkSolution()
        checkSolutionAbba()
    })
    return button
}



//specifically for the throttle

function throttleFunction(url1: string, url2: string, id: string, id2: string): unknown {
    let button = newButton(url1, id, id2)
    //might need to delete this
    button.setAttribute('class', 'throttle')
    //will turn buttons off and on, add function
    button.addEventListener('click', (e: MouseEvent) => {
        if (e.target instanceof Element) {
            if (e.target.getAttribute("value") == "on") {
                e.target.setAttribute('value', 'warp')
                e.target.src = url2
            }
            else if (e.target.getAttribute("value") == 'warp') {
                warpSpeed()
                e.target.setAttribute('value', 'locked')
            }
            else if (e.target.getAttribute("value") == "locked") {
                window.alert(`We're out of fuel, genius.`)
            }
        }
    })
    return button
}

//for the border buttons
//I'll figure this out later
// function borderButtons(id, url1, url2) {
//     let buttonB = document.getElementById(id)
//     buttonB.addEventListener('mouseover', (e) => {
//         e.target.src = url1
//     })
//     buttonB.addEventListener('mouseoout', (e) => {
//         e.target.src = url2
//     })
//     buttonB.addEventListener('click',(e) => {
//         console.log('clicked')
//     })
// }
// borderButtons('restart', 'assets/border-buttons/restart-dark.png', 'assets/border-buttons/restart.png')


//defines where a button will be
//element is another function which also calls another function
function move(element): object {
    //left and bottom are both numbers
    function moveTo(left: number, bottom: number) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveTo
    }
}