# Changelog
## Single designer: Victoria Beasley

### March 10, 2023
Added a typescript branch to do TS upgrade. Will not be pushing to main branch, as it is too buggy at the moment

### March 8, 2023
Added a sass branch to do SCSS upgrade. Will not be pushing to main branch, as it is too buggy at the moment

## Oct 2, 2022

### General clean-up, removed comments and added clarifying comments, updated the readme

### index.html
Added last minute border jpg for the aesthetic, and for later functionality
    - info on game, reloading the game // these features don't work

### style.css
Added border

### CREATED doom.js
Added buttons to the border // they do not function

### doom.css
Added border

### index.js
Put buttons into arrays for readability and access
Added throttleFunction() to create/place throttle
    - figured it out after a lot of debugging, but have to click throttle twice for it to work

### puzzleFunctions.js
Functions (checkSolution, unlock) added for a puzzle in the game that unlocks the throttle

## Sept 30, 2022

### CREATED doom.html
Added page which holds the lose-page gif

### CREATED doom.css
Added css for basic styling

### index.js
Continued editing of button positions

### puzzleFunctions.js
Reworking the destructButton() functionality
Edited doom()

## Sept 29, 2022

### CREATED buttonCreation.js
Added (newButton, buttonFunction, move) functions for easier access
Edited buttonFunction() to accept a second id attribute
Created then deleted a function specific to switches: not DRY

### CREATED puzzleFunctions.js
Added functions (doom, destructButton) to randomly choose a button to trigger the doom page

### index.js
Added new id attribute to all buttons
Deleted button functions, since they are now in their own file

## Sept 28, 2022

### index.js
Change all instances of newButton() to buttonFunction(), which calls newButton inside it
    - buttonFunction() allows the buttons to be turned off and on

### style.css
Z-indexes and button div positions edited

## Sept 26, 2022

### index.js
Added all the needed buttons, spent a lot of time adjusting positions

### style.css
Added style for added button divs

## Sept 26, 2022

### index.js
Created (newButton, buttonFunction, move) functions
    - edited newButton
Added an object const for background assets
Begin positioning the plethora of buttons with (move, newButton)
    - 16 added

### index.html
Reuploaded the background assets in a different resolution

### style.css
Deleted (#circleDash) block
Edit the background css
Start positioning the panels of buttons through their divs

## Sept 25, 2022

### style.css
More styling for basic set up,
worked on sizing for button elements

### index.html
Put all components into divs for easier styling

## Sept 24, 2022

### index.html
Linked images

### style.css
Added basic styling

## Sept 21, 2022

### CREATED index.html
HTML boilerplate and pseudocode

### CREATED readme.md
Started writing readme

### CREATED script.js
Added pseudocode 

### CREATED style.css