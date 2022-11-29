import "../App.css"
import Button from '@mui/material/Button';

export default function Product(props) {

    function addToCart(item){
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
                    <h2 style={{}}> {props.product.name}</h2>
                    <p style={{width:"100%"}}>{props.product.description}</p>
                    <p>${props.product.price}</p>
                    <div> 
                        <Button variant="contained" onClick={() => addToCart()}>Add to Cart</Button>
                    </div> 
                </div>
            </div> 
            

    )
}