
//Top left panel
//Top Row
move(newButton('assets/switch-tl/off.png')).to(-210, 640)
move(newButton('assets/switch-tl/off.png')).to(-205, 650)
move(newButton('assets/switch-tl/off.png')).to(-200, 660)
//Bottom Row
move(newButton('assets/switch-tl/off.png')).to(-274, 595)
move(newButton('assets/switch-tl/off.png')).to(-269, 606)
move(newButton('assets/switch-tl/off.png')).to(-265, 616)


//makes a new button
function newButton(url) {
    let button = document.createElement('img')
    button.src = url
    button.style.position = 'relative';
    button.setAttribute = ('class', 'switch');
    button.setAttribute = ('value', 'off');
    document.getElementById("top").appendChild(button);
    return button
}


//give buttons functionality
function buttonFunction(url) {
    let button = newButton(url)
    //will turn buttons off and on, add function
    button.addEventListener('click', (url) => {
        if (button.value == 'off') {
            button.remove()
            newButton(url)
        }
        else {

        }
    })
    return item
}

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