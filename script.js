/*PSUEDO CODE

Basic list of what I'll need:

Functions:
flips a button from one position to another
plays a noise when a button is pressed
animates a lever when pressed


Function which appends a new image
function newButton(url){
    let button = document.createElement('button')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

Function that will give buttons functionality
function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

Function that defines where a button will be
    function moveTo(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }


Puzzles:
A panel requires a certain pattern to be pressed in order for an event to occur

An event happens after a series of buttons is pressed in the right order


Stretch goals:
Add a border with different links as buttons
Put a credits and a way to handle volume on a different page

 */
