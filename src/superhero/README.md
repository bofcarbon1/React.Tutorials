superhero is a React Redux application that lists DC Comics superheroes with a list search filter
it is built from the following tutorial

https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3

Prerequisites (if you don't clone this as per the instructions in the link)

1. npm install redux
2. npm install react-redux
3. Add a file named hero.js with a data array of character content
4. Add a folter named images with sub folders View and Cover
   Copy in images from the code in github. 

Components

1. char (function) in file reducers.js
   apply the filter to the list of characters 

2. searchTermChanged in file actins.js
   A listener function for the search change it sets an action type and payload

3. App in file App.js
   A function that takes as arguments the following:
     char - an array of DC comic characters
     searchTerm - the filter for the dispalying items from the char array
     searchTermChanged - function to call when the search text is changed
   A map function is used on char to draw out and bind item details per line in the list
   A connect is used on the export statement to wire up the reducer in the store to actions


