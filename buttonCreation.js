
// function makeButtons(){
function newButton(url, id, id2) {
    let button = document.createElement('img')
    button.src = url
    button.style.position = 'relative';
    button.setAttribute('class', 'switch');
    button.setAttribute('value', 'off');
    button.setAttribute('id', id2);
    document.getElementById(id).appendChild(button);
    return button
}



//give buttons functionality
function buttonFunction(url1, url2, id, id2) {
    let button = newButton(url1, id, id2)
    //will turn buttons off and on, add function
    button.addEventListener('click', (e) => {
        if (e.target.getAttribute("value") == "off") {
            e.target.src = url2
            e.target.setAttribute('value', 'on')
            if (e.target.id >= 21 && e.target.id <= 29) {
                myVar.pressedKeys.push(e.target.id)
            }
        }
        else {
            e.target.src = url1
            e.target.setAttribute('value', 'off')
            if (e.target.id >= 21 && e.target.id <= 29) {
                myVar.pressedKeys.indexOf(e.target.id) !== -1 && myVar.pressedKeys.splice(myVar.pressedKeys.indexOf(e.target.id), 1)
            }
        }
        checkSolution()
        return solved
    })
    return button
}

//BUG DETANGLING
//newButton is called in throttleFunction which has eventListeners for clicks.
//Those clicks come from buttons made by buttonFunction which calls checkSolution.
//checkSolution gets its information from buttonFunction, and is called in buttonFunction.
//checkSolution calls unlock() if certain parameters are met.
//unlock() affects the throttleFunction
//I think the problem might come from the buttonFunc and throttleFunc being connected, or when things are being called

//specifically for the throttle

function throttleFunction(url1, url2, id, id2) {
    let button = newButton(url1, id, id2)
    //might need to delete this
    button.setAttribute('class','throttle')
    //will turn buttons off and on, add function
    button.addEventListener('click', (e) => {
        if (e.target.getAttribute("value") == "on") {
            e.target.setAttribute('value','locked')
            e.target.src = url2
        }
        else if(e.target.getAttribute("value") == "locked"){
            window.alert(`We're out of fuel, genius.`)
        }
    })
    return button
}



// function warpSpeed(){
//     let warpNeeds = document.getElementsByClassName('throttle')
// }


//defines where a button will be
function move(element) {

    function moveTo(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveTo
    }
}