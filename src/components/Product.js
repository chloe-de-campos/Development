import "../App.css"
import Button from '@mui/material/Button';

export default function Product(props) {

    function addToCart(item){
        props.setCartSum(props.cartSum + 1)
        var newCart = []
        const updatedCart = newCart.concat(props.theCartItems)
        updatedCart.push(props)
        
        props.cartSetter(updatedCart)
        props.setPriceTotal(props.priceTotal+props.product.price)
    }

    
    return(
 
            <div class="Product"> 
                <div class="product-image">
                    <img src={props.product.image} />
                </div>
                <div class="product-desc">
                    <div>
                        <h5 style={{}}> {props.product.name}</h5>
                        <p style={{width:"100%", fontSize:"12pt"}}>{props.product.description}</p>
                    </div>
                    
                    <div > 
                        <p>${props.product.price}</p>
                        <Button style={{zIndex:"z-index: -10",backgroundColor:"#999933", borderRadius:"0px"}} variant="contained" onClick={() => addToCart()}>Add to Cart</Button>
                    </div> 
                </div>
            </div> 
             

    )
}