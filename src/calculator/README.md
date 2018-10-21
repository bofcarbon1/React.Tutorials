calculate is one of the React code examples from facebook

The React Native app is divded into two sections
1. component 
2. logic 

1. component consists of..

App.js

This is the parent component where we set state as props
(total, next and operation). It contains a handleClick for any
calculator button selected. A display and button panel are rendred 
to the browser

ButtonPanel.js 

This is where the buttons are layed out on the calculator. There
is an onclick function that takes the name of the button and sets
the prop button name. 

Button.js

This is the detail level of the Button control that works with the
ButtonPanel parent to set the calculator button pressed. 

display.js

This is where the calculator total is displayed

2. logic consists of ...........

calculate.js 

Consists of function 'calculate' which gets called whenever
a button from the button panel is pressed (see App.js). 
Depending on the button type (number, operation) prop values
will be set and returned. 

operate.js

This where values entered are added, subtracted, multiplied
or divided. The parent of operate.js is calculate.js and props
are passed, set and returned depending on what was calculated. 



