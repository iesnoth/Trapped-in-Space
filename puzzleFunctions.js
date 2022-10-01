
const myVar = {}
//function chooses a random button
function doom() {
    myVar.doomNumber = Math.floor(Math.random() * 47) + 1;
    //turn this off when played by others
    console.log(myVar.doomNumber)
    return myVar.doomLink
}
doom()
//makes the number whose id matches the doomNumber the self-destruct button
// function destructButton(doom){
//     doom();
//     let element = document.getElementById(myVar.doomNumber);
//     element.addEventListener('click',() => {
//         //add self destruct sequence here
//         // window.alert('You lose.')
//         element.setAttribute('href','doom.html')
//     })
// }
// function linkOfDoom() {
//     myVar.doomLink = document.createElement("a");
//     myVar.doomLink.setAttribute('href', 'doom.html');
//     myVar.doomLink.appendChild(element);
//     return doomLink
// }


function destructButton() {
    let element = document.getElementById(myVar.doomNumber);
    element.addEventListener('click', () => {
        window.alert('You lose.')
    })
}


destructButton()

//function which unlocks the throttle when certain buttons are pushed in a certain order