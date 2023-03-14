# Trapped in Space Game

## Github Pages Deployment
https://iesnoth.github.io/Trapped-in-Space/

## Important Info for testers
- Has to be played on Chrome
- If you get the doom screen, click back button to reset the game

### A Brief Overview
Have you ever wondered:
"What would it be like to be the pilot of a lo-fi 16-bit spaceship, but I still don't know what any of the buttons do?"
Well, this game seeks to satisfy that very specific curiosity.
There are a lot of buttons, you push a lot of buttons, and sometimes they do things.

Sometimes they do very bad things.

It's a low-stress puzzle box, with an open-ended nature which will have the tenacious gamer coming back over and over again, and give the competionist gamer a case of moon madness.

## Gameplay

The player comes into the game blind, seeing just the console. Right away they can glean a few things about their situation:

    1. They are drifting through space,

    2. The ship they are in is low tech,

    3. There is no ticking clock: no depleting oxygen or food supply
    
However, there is no obvious goal. The little story the game has is found by pushing a _lot_ of buttons.

There's no set way to "win" the game, but the player can lose, and lose spectacularly. 

## The Features

- **So Many Buttons:**
    The big draw of the game is to play with a lot of buttons. None of them are labelled, and it's not obvious what any of them should do. "Low key frustration" is the mood I'm going for.
        - Half of them will just make a funny noise (unfinished as of 10/2/22)
        - Each button has at least an *on* and *off* position.
    
    The coding goal is to have a few functions which work for every button, then some specialized events.

- **Animations:**
    There will be some animations for figuring out complicated puzzles, or losing. I'd also like to add ambient animation (example: flickering lights).

- **Note-taking:** A feature I'd like to add but not sure if I'll have time. Like I said, none of the buttons are labelled. But I'd like to give the players a way to take notes in-game. This is a stretch goal.

- **Languages**
    1. HTML
    2. CSS
    3. Javascript

- **Programs**
    1. VSCode
    2. Photoshop CC

## Bugs

9/27/22
Can't really zoom into game without the buttons going haywire

Buttons move around when crossing browsers, have to view in Chrome for best experience

10/1/22
Throttle isn't perfectly aligned.

10/2/22
- After finishing the keypad puzzle, you have to click the throttle a few times to warp.
- If you go to the planet background before hitting the self destruct, the old bg will be on the doom page.
- The frame scrolls with the browser while the game doesn't.
- Not a bug, but I still need to finish the buttons on the border

10/3/22
- Border isn't centered correctly.

## New Things I Learned
- math.random
- the includes keyword
- how to take elements out of an array dynamically
- some about "in" though I'm still not 100% on that
- adding audio

## Citations

-Special thanks to JD Howell, who helped with debugging.

-"Secret"'s comment on this conversation https://css-tricks.com/snippets/css/orientation-lock/ helped with turning orientation code.

-JS Web Game by _jlboba_ inspired the button functions, git repo here:
https://github.com/HackerUSA-CE/JS-Web-Game-Part-7.git

-W3Schools taught me about shake animation: https://www.w3schools.com/howto/howto_css_shake_image.asp

-Matthew Telles aided greatly in the writing of the checkSolution function

-AmerllicA's comment on this stack overflow conversation clarified taking an element from an array: https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value

-All of the art for the game was made by me. More of my art can be found online under the iesnoth moniker. This is my first foray into pixel art.

## API

There is no API for this build.

## Licensing

TBD