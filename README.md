# Development

### Link to Deployed Website
If you used the stencil code, this is `https://sdpy695.github.io/Development/`

### Goal and Value of the Application
This application allows users to navigate through a catalogue of zoo animals and create a list of those they would like to purchase.

It offers a sort feature which can sort by price from low to high or high to low and filter features according to diet of animal and number of each animal. 

The user can aggregate their animals in the cart, or use the Clear Cart button to start over. 

### Usability Principles Considered
I wanted users to be able to easily clear the cart and reset their filters, and to be able to use the filters and sorting methods in conjunction with eachother to narrow down the list of animals, and to easily see the total price of their chosen animals. 

### Organization of Components
My app uses the following components: 
    Cart: displays aggregated animals
    FilteredList: handles application of filters and sorting methods to list of animals and orders for display
    Navbar: shows checkboxes and dropdown for user to choose filters and sorting methods 
    Product: builds a cart to display information about each animal

### How Data is Passed Down Through Components
The App handles the display of and communication between components. It uses state variables to keep track of information like the items in the cart, the price total, and which filters and sorting methods have been chosen. Then it uses props to pass this information and the methods required to update it into each component. 

### How the User Triggers State Changes
The user can trigger state changes using the buttons in each Product (to add the animal to the cart), the button in the Cart (to clear the cart), or the NavBar checkboxes/dropdown (to update the filters). Any time these buttons are used, they change the state of the state variables: cartItems, filters, or sort. When the state of these variables is changed, the methods which use them in their props also automatically update accordingly.
