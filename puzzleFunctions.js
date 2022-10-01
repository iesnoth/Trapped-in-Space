
const myVar = {}
//function chooses a random button
function doom(){
    myVar.doomNumber = Math.floor(Math.random() * 47) + 1;
    //turn this off when played by others
    console.log(myVar.doomNumber)
    return myVar.doomNumber
}

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
function destructButton(doom){
    doom();
    let element = document.getElementById(myVar.doomNumber);
    element.setAttribute('href','doom.html')
}


destructButton(doom)

//function which unlocks the throttle when certain buttons are pushed in a certain order