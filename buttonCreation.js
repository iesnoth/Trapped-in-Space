
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
        }
        else {
            e.target.src = url1
            e.target.setAttribute('value', 'off')
        }

    })
    return button
}

//give switches function
// function buttonFunction(url1, url2, id, id2) {
//     let button = newButton(url1, id, id2)
//     //will turn buttons off and on, add function
//     button.addEventListener('click', (e) => {
//         if (e.target.getAttribute("value") == "off") {
//             move(e.target).to(10,10)
//             e.target.setAttribute('value', 'on')
//         }
//         else {
//             e.target.src = url1
//             e.target.setAttribute('value', 'off')
//         }

//     })
//     return button
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

// return{
//     move:move,
//     newButton:newButton,
//     buttonFunction:buttonFunction
// }

// }
// makeButtons()