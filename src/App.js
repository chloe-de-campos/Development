import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import productList from "./assets/products.js";
import Product from "./components/Product.js";
import FilteredList from './components/FilteredList';
import DisplayList from './components/DisplayList'
import NavBar from './components/NavBar';
import {useEffect} from 'react'
import Cart from './components/Cart.js'
import Button from '@mui/material/Button';
import { ConnectingAirportsOutlined } from '@mui/icons-material';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0.00);
  const [filters, setFilters] = useState({diet:[], legs:[]});
  const [sortStyle, setSortStyle] = useState('alph');
 

  useEffect(() => {
    setFilters(filters);
  }, [filters]);

  // function consolidateArray(array) {
  //   var newArray = [] 
  //   for (let i = 0; i < array.length; i++){
  //     for (let j=0; j < newArray.length; j++){
  //       if (array[i] == newArray[j][0]) {
  //         newArray[newArray.indexOf(i)]
  //       }
  //       else {
  //         newArray.push([i, 1])
  //       }
  //     }
  //   }
  //   return (

  //   )
  // }

  function removeFromCart(item){ 
    console.log('removing', item)
    console.log('removing', item.name)
    console.log('removing', cartItems.indexOf(item))
    console.log('removing', cartItems.indexOf(item.name))
    console.log('removing',cartItems.splice( cartItems.indexOf(item), 1))

    cartItems.splice( cartItems.indexOf(item), 1)
    return (
      cartItems.map((item, index) =>
        <div class="cartItem" >
            <p>{item.name}</p>
            <Button variant="contained" onClick={() => removeFromCart(item)}>Remove Item</Button>
         </div>
    
      )
    )
  }

  

  //sets the sort state to the selected type, function passed to the onSelect event handler of HTML buttons
  function selectSortStyle (eventKey){
    console.log("Sort set to " , eventKey)
    setSortStyle(eventKey)
    
  }

  //empties cart
  function clearCart () {
    setCartItems([])
    setPriceTotal(0.00)
  }

  function updateFilteredList() {
    console.log('oop')
    // this.forceUpdate
  }


  return (
    <div className="App"> 
      <h1> BUILD A ZOO </h1>
      <div onChange={updateFilteredList()} className="NavBar">
          {NavBar({
            filters: filters, 
            updateFilters: setFilters, 

            // forceUpdateMethod: handleForceupdateMethod,
            selectSortStyle: selectSortStyle,
            sortStyle: sortStyle})}
        </div>

      <div refresh={updateFilteredList()} className = "mainApp">
        
        {console.log("LSIT ", productList)}
        { FilteredList({
            list: productList,
            priceTotal: priceTotal, 
            setPriceTotal: setPriceTotal, 
            theCartItems: cartItems, 
            cartSetter: setCartItems,
            setFilters: setFilters,
            filters: filters,

            setSortStyle: setSortStyle,
            sortStyle: sortStyle
        })}

        {Cart({
          removeFromCart: removeFromCart,
          clearCart: clearCart,
          cartItems: cartItems,
          priceTotal: priceTotal
          }) }
      
      </div>
    </div>
  );
}



export default App;

