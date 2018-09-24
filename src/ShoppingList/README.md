The ShoppingList application displays a lit of items. 
The App component contains the following features constructor that sets state to a constant array of strings 
addItem function 
-- sets initial const from state 
-- sets newItem const from addForm value 
-- sets boolean value to check if item already exists 
-- if it is new adds item with existing to const in state 
-- clears addForm for more adds 
removeItem(item) 
-- sets const newBuyItems to the original list of items
-- except any item that matches the string value of the selected 
-- item from the the list after pressing the 'remove' button 
-- set state buyItems to the newBuyItems (simply swaps the array out) 
clearAll 
-- sets the state buyItems to an empty array render