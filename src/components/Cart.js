import Button from '@mui/material/Button';
import { Filter9Sharp } from '@mui/icons-material';
import { useState } from "react";




export default function Cart(props) {
    function buildCart() {
      if (props.cartItems.length == 0) {
        return (
          <div>
            <p><em>"a zoo with no animals is a barren and silent display."</em>--Anonymous</p>
          </div>
        )

      }
       
      else {
        return (props.cartItems.map((item, index) =>
            <div class="cartItem" >
                {/* <div className="cartImage"> */}
                    <img className="cartImage" src={item.product.image} />
                {/* </div>  */}
                {item.name}
                {/* <Button variant="contained" onClick={() => props.removeFromCart(item)}>Remove Item</Button> */}
            </div>
        
          )
        )
      }
  }

    return (
        <div className = "cart">
          <h3>Cart</h3>
          {/* {props.cartItems} */}
          
           {/* {props.cartItems.map((cartitem, index) => <li>{cartitem}</li>)} */}
            <div className ='cartItems'> 
                {buildCart()}

            </div> 

            <Button style={{zIndex:"z-index: -10",backgroundColor:"#999933", borderRadius:"0px"}} variant="contained" onClick={() => props.clearCart()}>Clear Cart</Button>
         
          <h5 style={{"padding-top": "20px"}}>Total</h5>
          ${Math.round(props.priceTotal*100)/100}

          
        </div>
    )
}