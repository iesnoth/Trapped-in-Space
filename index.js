const buttonArray = [
    //Top Console
    [
        //Left panel
        //Top Row
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(19, -30),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(23, -19),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(29, -8),
        //Bottom Row
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(-44, -74),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(-40, -64),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(39, -6),
        //Circle TV
        move(newButton('assets/circle-tv/off.png', 'top')).to(-124, 603),
        move(newButton('assets/circle-tv/off.png', 'top')).to(-62, 606),
        //Center Panel
        //top row
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(24, -7),
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(30, -7),
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(37, -7),
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(44, -7),
        //bottom row
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(-58, -54),
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(-52, -54),
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(-45, -54),
        move(newButton('assets/center-switch/off.png', 'center-buttons')).to(40, -18),
        //Right panel
        move(newButton('assets/circle-tr/off.png', 'right-buttons')).to(19, -18),
        move(newButton('assets/circle-tr/off.png', 'right-buttons')).to(30, -29),
        move(newButton('assets/circle-tr/off.png', 'right-buttons')).to(-33, -49),
        move(newButton('assets/circle-tr/off.png', 'right-buttons')).to(-23, -60)
    ],
    //Bottom Panel
    []
]

const switchArray = [
    [
        //Center throttle
        move(newButton('assets/center-dial/dial.png', 'center-console')).to(-69,-55),
        move(newButton('assets/center-dial/dial.png', 'center-console')).to(69,-55),
        //center dials


    ]

]

//makes a new button
function newButton(url, id) {
    let button = document.createElement('img')
    button.src = url
    button.style.position = 'relative';
    button.setAttribute = ('class', 'switch');
    button.setAttribute = ('value', 'off');
    document.getElementById(id).appendChild(button);
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