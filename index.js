const switchArray = [
    [
        //Bottom left sliders
        move(buttonFunction('assets/slider/slider-down.png', 'assets/slider/slider-up.png', 'center-left',41)).to(0, -63),
        move(buttonFunction('assets/slider/slider-down.png','assets/slider/slider-up.png', 'center-left',42)).to(-7, -60),
        move(buttonFunction('assets/slider/slider-down.png','assets/slider/slider-up.png', 'center-left',43)).to(-6, -58),
        move(buttonFunction('assets/slider/slider-down.png','assets/slider/slider-up.png', 'center-left',44)).to(-5, -54),
        move(buttonFunction('assets/slider/slider-down.png', 'assets/slider/slider-up.png', 'center-left', 45)).to(-5, -52),
        //Center throttle
        move(throttleFunction('assets/throttle/left.png', 'assets/throttle/left-up.png', 'center-console','throttle-left')).to(18, -122),
        move(throttleFunction('assets/throttle/right.png','assets/throttle/right-up.png','center-console','throttle-right')).to(21, -120),
        //center dials
        move(buttonFunction('assets/center-dial/dial.png', 'assets/center-dial/turn.png', 'center-console',46)).to(-146, -55),
        move(buttonFunction('assets/center-dial/dial.png', 'assets/center-dial/turn.png', 'center-console',47)).to(0, -55),

    ]

]

const buttonArray = [
    //border buttons(removing until they work right)
    // [
    //     move(newButton('assets/border-buttons/restart.png', 'border-div', 'restart')).to(386, 73),
    //     move(newButton('assets/border-buttons/info.png', 'border-div', 'info')).to(395, 73)
    // ]
    //Top Console
    [
        //Left panel
        //Top Row
        move(buttonFunction('assets/switch-tl/off.png', 'assets/switch-tl/on.png', 'left-buttons', 1)).to(19, -30),
        move(buttonFunction('assets/switch-tl/off.png', 'assets/switch-tl/on.png', 'left-buttons', 2)).to(23, -19),
        move(buttonFunction('assets/switch-tl/off.png', 'assets/switch-tl/on.png', 'left-buttons', 3)).to(29, -8),
        //Bottom Row
        move(buttonFunction('assets/switch-tl/off.png', 'assets/switch-tl/on.png', 'left-buttons', 4)).to(-44, -74),
        move(buttonFunction('assets/switch-tl/off.png', 'assets/switch-tl/on.png', 'left-buttons', 5)).to(-40, -64),
        move(buttonFunction('assets/switch-tl/off.png', 'assets/switch-tl/on.png', 'left-buttons', 6)).to(39, -6)
    ],
    [
        //Circle TV
        move(buttonFunction('assets/circle-tv/off.png', 'assets/circle-tv/on.png', 'top', 7)).to(-124, 287),
        move(buttonFunction('assets/circle-tv/off.png', 'assets/circle-tv/on.png', 'top', 8)).to(-62, 289)
    ],
    //Center Panel
    //top row
    [
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 9)).to(24, -7),
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 10)).to(30, -7),
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 11)).to(37, -7),
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 12)).to(44, -7),
        //bottom row
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 13)).to(-58, -54),
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 14)).to(-52, -54),
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 15)).to(-45, -54),
        move(buttonFunction('assets/center-switch/off.png', 'assets/center-switch/on.png', 'center-buttons', 16)).to(40, -18)
    ],
    [    //Right panel
        move(buttonFunction('assets/circle-tr/off.png', 'assets/circle-tr/on.png', 'right-buttons', 17)).to(19, -18),
        move(buttonFunction('assets/circle-tr/off.png', 'assets/circle-tr/on.png', 'right-buttons', 18)).to(30, -29),
        move(buttonFunction('assets/circle-tr/off.png', 'assets/circle-tr/on.png', 'right-buttons', 19)).to(-33, -49),
        move(buttonFunction('assets/circle-tr/off.png', 'assets/circle-tr/on.png', 'right-buttons', 20)).to(-23, -60)
    ],
    //Bottom Panel
    [
        //KEYPAD
        //top row
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 21)).to(-3, -5),
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 22)).to(-8, -5),
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 23)).to(-13, -5),
        //middle row
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 24)).to(5, 4),
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 25)).to(0, 4),
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 26)).to(-5, 4),
        //bottom row
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 27)).to(13, 12),
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 28)).to(7, 12),
        move(buttonFunction('assets/keypad-left/up.png', 'assets/keypad-left/down.png', 'keypad', 29)).to(2, 12)
    ],
    [
        //Big Squares
        move(buttonFunction('assets/big-square/up.png', 'assets/big-square/down.png', 'big-keys', 30)).to(-21, -7),
        move(buttonFunction('assets/big-square/up.png', 'assets/big-square/down.png', 'big-keys', 31)).to(15, 40),
        move(buttonFunction('assets/big-square/up.png', 'assets/big-square/down.png', 'big-keys', 32)).to(-10, 49),
        move(buttonFunction('assets/big-square/up.png', 'assets/big-square/down.png', 'big-keys', 33)).to(26, 95)
    ],
    //RIGHT SIDE
    //toggles
    [
        move(buttonFunction('assets/toggle-r/up.png', 'assets/toggle-r/down.png', 'center-right', 34)).to(80, -40),
        move(buttonFunction('assets/toggle-r/up.png', 'assets/toggle-r/down.png', 'center-right', 35)).to(90, -40),
        move(buttonFunction('assets/toggle-r/up.png', 'assets/toggle-r/down.png', 'center-right', 36)).to(97, -40)
    ],
    //tiny lights
    [
        move(buttonFunction('assets/tiny-r/off.png', 'assets/tiny-r/on.png', 'center-right', 37)).to(-51, -73),
        move(buttonFunction('assets/tiny-r/off.png', 'assets/tiny-r/on.png', 'center-right', 38)).to(-20, -75)
    ],
    //knobs with lights
    [
        move(buttonFunction('assets/knob/off.png', 'assets/knob/on.png', 'center-right', 39)).to(-2, -78),
        move(buttonFunction('assets/knob/off.png', 'assets/knob/on.png', 'center-right', 40)).to(2, -80)
    ]

]


