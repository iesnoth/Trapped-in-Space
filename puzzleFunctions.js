
const myVar = {}
//function chooses a random button
function doom(){
    myVar.doomNumber = Math.floor(Math.random() * 49) + 1;
    //turn this off when played by others
    console.log(myVar.doomNumber)
    return myVar.doomNumber
}

//makes the number whose id matches the doomNumber the self-destruct button
function destructButton(doom){
    doom();
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click',() => {
        //add self destruct sequence here
        window.alert('You lose.')
    })
}

destructButton(doom)

//function which unlocks the throttle when certain buttons are pushed in a certain order