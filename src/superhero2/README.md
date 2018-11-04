superhero2 is a React Context API application that lists DC Comics superheroes with a list search filter
This converts the superhero React Redux version of the application
It is built from the following tutorial

https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3

Prerequisites (if you don't clone this as per the instructions in the link)

1. Add a file named hero.js with a data array of character content
2. Add a folter named images with sub folders View and Cover
   Copy in images from the code in github. 

Components

1. Provider in file Provider.js
   Creates a React Context with a reference to a state object of choice
   render returns a tag reference to the context previously created 

2. Consumer in Consumer.js
   Creates a consumer for the React Context provider created in Provider
   
3. App in file App.js
   A function that takes as arguments the following:
     char - an array of DC comic characters
     searchTerm - the filter for the dispalying items from the char array
     searchTermChanged - function to call when the search text is changed
   A map function is used on char to draw out and bind item details per line in the list
   A connect is used on the export statement to wire up the reducer in the store to actions
