move(newButton('assets/switch-tl/off.png')).to(350, 820)


//makes a new button
function newButton(url){
    let button = document.createElement('img')
    button.src = url
    button.style.position = 'absolute';
    button.setAttribute = ('class','switch');
    button.setAttribute = ('value','off');
    document.getElementById("top").appendChild(button);
    return button
}


//give buttons functionality
function buttonFunction(url){
    let button = newButton(url)
    //will turn buttons off and on, add function
    button.addEventListener('click', (url) => {
        if(button.value == 'off'){
        button.remove()
        newButton(url)
        }
        else{
            
        }
    })
    return item
}

//defines where a button will be
function move(element) {
    element.style.position = 'fixed'

    function moveTo(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to:moveTo
    }
}