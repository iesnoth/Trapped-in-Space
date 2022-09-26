// move(buttonFunction('assets/switch tl/off.png')).to(200, 450)

newButton('assets/switch-tl/off.png')

//makes a new button
function newButton(url){
    let button = document.createElement('img')
    button.src = url
    button.style.position = 'absolute'
    button.setAttribute = ('class','button');
    //document.body.append(button)
    document.getElementById("top").appendChild(button);
    return button
}

//give buttons functionality
function buttonFunction(url){
    let button = newButton(url)
    //will turn buttons off and on, add function
    button.addEventListener('click', () => {
        button.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

//defines where a button will be
    function move(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
