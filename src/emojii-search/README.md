emojii-search is a native React app that filters a list of emojiis 
using a text filter 

Prerequisites

Create a file called 'emojiiList.json' that contains the emojii data. 
Create the css style files for specific components.

The app contains the following components

1. EmojiiResultRow

   Renders an image of the translated hex representation of the emojii png 

2. EmojiResults   

   Uses Mount listeners and handlers to copy and destroy copy to clipboard
   Renders a div tag that contains multiple occurances of EmojiiResultRow

3. filterEmoji

   This is a function that takes 2 arguments (search text and max results)
   returns a list of emojiis object with a filter attribute set to true or false
   the length of the object is set by the max results value. 

4. Header

   Renders a heading for the display flanked by 2 images for decoration

5. SearchInput

   Renders the input control that is used for the search filter

6. App 

   This is the main or parent app where we maintain state using props
   filteredEmoji is set intially using filterEmoji
   Renders the Header, SearchInput and EmojiResults child component objects
   There is also a handleSearchChange listener function which resets the filteredEmoji value 

   
