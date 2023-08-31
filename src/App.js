
import "./App.css";
import { useState } from "react";
import productList from "./assets/products.js";
import FilteredList from './components/FilteredList';
import NavBar from './components/NavBar';
import {useEffect} from 'react'
import Cart from './components/Cart.js'
import Button from '@mui/material/Button';
import zoostack from './assets/antizoostack.svg'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0.00);
  const [filters, setFilters] = useState({diet:[], legs:[]});
  const [sortStyle, setSortStyle] = useState('alph');
 

  useEffect(() => {
    setFilters(filters);
  }, [filters]);

  function removeFromCart(item){ 

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
    setSortStyle(eventKey)
    
  }

  //empties cart
  function clearCart () {
    setCartItems([])
    setPriceTotal(0.00)
  }

  function updateFilteredList(){
    console.log('updatingFilteredList')
  }


  return (
    <div className="App"> 
    <div style={{display:"flex", flexDirection: "row", justifyContent:"center"}}>
      <img style={{width: "10vw"}} src={zoostack} />
      <h1 style={{"text-align":"center", "margin":"40px","font-weight":"bold", "font-size":"10vw", "color":"Black"}}> BUILDAZOO </h1>
    </div>

      <div refresh={updateFilteredList()} className = "mainApp">
      <div onChange={updateFilteredList()} className="NavBar">
          {NavBar({
            filters: filters, 
            updateFilters: setFilters, 

            // forceUpdateMethod: handleForceupdateMethod,
            selectSortStyle: selectSortStyle,
            sortStyle: sortStyle})}
        </div>


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

