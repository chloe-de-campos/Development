import Button from '@mui/material/Button';
import { Filter9Sharp } from '@mui/icons-material';
import { useState } from "react";




export default function Cart(props) {
    function buildCart() {
    // consolidateArray(cartItems)
    console.log('_________BUILDIHGCART')
    return (props.cartItems.map((item, index) =>
        <div class="cartItem" >
            {console.log('image', item.product.image)}
            {/* <div className="cartImage"> */}
                <img className="cartImage" src={item.product.image} />
            {/* </div>  */}
            {item.name}
            {/* <Button variant="contained" onClick={() => props.removeFromCart(item)}>Remove Item</Button> */}
         </div>
    
      )
    )
  }

    return (
        <div className = "cart">
          <h2>Cart</h2>
          {/* {props.cartItems} */}
          
           {/* {props.cartItems.map((cartitem, index) => <li>{cartitem}</li>)} */}
            <div className ='cartItems'> 
                {buildCart()}

            </div> 

          <Button variant="contained" onClick={() => props.clearCart()}>Clear Cart</Button>
         
          <h4 style={{"padding-top": "20px"}}>Total</h4>
          ${Math.round(props.priceTotal*100)/100}

          
        </div>
    )
}