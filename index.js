
//Top left panel
//Top Row
move(newButton('assets/switch-tl/off.png','top')).to(-210, 640)
move(newButton('assets/switch-tl/off.png','top')).to(-205, 650)
move(newButton('assets/switch-tl/off.png','top')).to(-200, 660)
//Bottom Row
move(newButton('assets/switch-tl/off.png','top')).to(-274, 595)
move(newButton('assets/switch-tl/off.png','top')).to(-269, 606)
move(newButton('assets/switch-tl/off.png','top')).to(-265, 616)
//Circle TV
move(newButton('assets/circle-tv/off.png','top')).to(-204,621)
move(newButton('assets/circle-tv/off.png','top')).to(-135,624)
//Top Center Panel
//top row
move(newButton('assets/center-switch/off.png','center-buttons')).to (24,-7)
move(newButton('assets/center-switch/off.png','center-buttons')).to (30,-7)
move(newButton('assets/center-switch/off.png','center-buttons')).to (37,-7)
move(newButton('assets/center-switch/off.png','center-buttons')).to (44,-7)
//bottom row
move(newButton('assets/center-switch/off.png','center-buttons')).to (-58,-54)
move(newButton('assets/center-switch/off.png','center-buttons')).to (-52,-54)
move(newButton('assets/center-switch/off.png','center-buttons')).to (-45,-54)
move(newButton('assets/center-switch/off.png','center-buttons')).to (40,-18)

//makes a new button
function newButton(url,id) {
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