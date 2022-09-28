const buttonArray = [
    //Top Console
    [
        //Left panel
        //Top Row
        move(buttonFunction('assets/switch-tl/off.png','assets/switch-tl/on.png', 'left-buttons')).to(19, -30),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(23, -19),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(29, -8),
        //Bottom Row
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(-44, -74),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(-40, -64),
        move(newButton('assets/switch-tl/off.png', 'left-buttons')).to(39, -6)
    ],
    [
        //Circle TV
        move(newButton('assets/circle-tv/off.png', 'top')).to(-124, 593),
        move(newButton('assets/circle-tv/off.png', 'top')).to(-62, 597)
    ],
    //Center Panel
    //top row
    [
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
    [
        //KEYPAD
        //top row
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(-3, -5),
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(-8, -5),
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(-13, -5),
        //middle row
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(5, 4),
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(0, 4),
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(-5, 4),
        //bottom row
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(13, 12),
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(7, 12),
        move(newButton('assets/keypad-left/up.png', 'keypad')).to(2, 12)
    ],
    [
        //Big Squares
        move(newButton('assets/big-square/up.png', 'big-keys')).to(-21, -7),
        move(newButton('assets/big-square/up.png', 'big-keys')).to(15, 40),
        move(newButton('assets/big-square/up.png', 'big-keys')).to(-10, 49),
        move(newButton('assets/big-square/up.png', 'big-keys')).to(26, 95)
    ],
    //RIGHT SIDE
    //toggles
    [
        move(newButton('assets/toggle-r/up.png', 'center-right')).to(80, -40),
        move(newButton('assets/toggle-r/up.png', 'center-right')).to(90, -40),
        move(newButton('assets/toggle-r/up.png', 'center-right')).to(97, -40)
    ],
    //tiny lights
    [
        move(newButton('assets/tiny-r/off.png', 'center-right')).to(-51, -73),
        move(newButton('assets/tiny-r/off.png', 'center-right')).to(-20, -75)
    ],
    //knobs with lights
    [
        move(newButton('assets/knob/off.png', 'center-right')).to(-2, -78),
        move(newButton('assets/knob/off.png', 'center-right')).to(2, -80)
    ]

]


const switchArray = [
    [
        //Bottom left sliders
        move(newButton('assets/left-slider.png', 'center-left')).to(-14, -81),
        move(newButton('assets/left-slider.png', 'center-left')).to(-9, -78),
        move(newButton('assets/left-slider.png', 'center-left')).to(-3, -75),
        move(newButton('assets/left-slider.png', 'center-left')).to(2, -73),
        move(newButton('assets/left-slider.png', 'center-left')).to(6, -70),
        //Center throttle
        move(newButton('assets/throttle/left.png', 'center-console')).to(15, -120),
        move(newButton('assets/throttle/right.png', 'center-console')).to(25, -120),
        //center dials
        move(newButton('assets/center-dial/dial.png', 'center-console')).to(-146, -55),
        move(newButton('assets/center-dial/dial.png', 'center-console')).to(0, -55),

    ]

]

//makes a new button
function newButton(url, id) {
    let button = document.createElement('img')
    button.src = url
    button.style.position = 'relative';
    button.setAttribute('class', 'switch');
    button.setAttribute('value', 'off');
    document.getElementById(id).appendChild(button);
    return button
}


//give buttons functionality
function buttonFunction(url1, url2, id) {
    let button = newButton(url1, id)
    //will turn buttons off and on, add function
    button.addEventListener('click', () => {
        if (button.value == "off") {
            button.src = url2
            console.log('clicked!')
        }
        else {
            button.src = url1
            console.log('clicked again!')
            
        }
    })
    return button
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