products is a React Native Mode application that list products
in a table that can be filtered by an in stock check and a name match

Contains the following components

1. ProductCategoryRow

Renders a category row header with a value from props (state)

2. ProductRow

Renders a product row with name and price from props (state).
If the product is not in stock displays details in red. 

3. ProductTable

Sets filtered text and in stock only from props (state)
Iterates through props.products object 
  fills array row referencing ProductCategoryRow and ProductRow
Renders the table with the details from the rows array filled above

4. SearchBar

Contains 2 listeners for handling the text filter and in stock checkbox
Renders a form with 2 input forms on text and on checkbox with onchange handle commands

5. FilteredProductTable

This is where state is maintained setting props (fitlered text and in stock only)
The SearchBar is used by referencing it and ties handlers in that component used to change the product lit in the table
The ProductTable is used by referencing it and it contains products and values for the filter and in stock checkbox value

7. An array of PRODUCTS data used in the app

8. App

The main component that returns a reference to FilteredProductTalbe and an object setting to the hard coded data in item 7


