import Product from "./Product.js"
import { NavItem } from "react-bootstrap";
import {useState} from "react"
import {useEffect} from "react"
import { ConstructionSharp } from "@mui/icons-material";
//contains filtering/sorting/aggregator methods

export default function FilteredList(props)  {
    const [productList, setProductList] = useState(props.list)
    // const list = props.list 
    
    useEffect(() => {
        setProductList(props.list);
      }, [props.list]);

    //sorts products
    //this function was adapted from this post: https://stackoverflow.com/questions/19259233/sorting-json-by-specific-element-alphabetically 
    const sortedArray = productList.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
    console.log("sortStyle ", props.sortStyle)
    if (props.sortStyle === "lth") {
        const sortedArray = productList.sort((a, b) => {
            return a.price - b.price;
        })
    }
    else if (props.sortStyle === "htl") {
        const sortedArray = productList.sort((a, b) => {
            return b.price - a.price;
        })
    }

   
     
  
    const matchesFilterType = item => {
        console.log('productList, ', props.list)
        console.log('checkingfilters')
        // console.log('props', props);
        // console.log('props.filters', props.filters);


        // all items should be shown when no filter is selected
        if(props.filters.length == 0) { 
            console.log('nofilters')
            console.log("AAA", props.cartSumSetter, props.cartSum)
            return  Product({
                setCartSum: props.cartSumSetter,
                cartSum: props.cartSum,
                product: item,
                name: item.name, 
                priceTotal: props.priceTotal, 
                setPriceTotal: props.setPriceTotal, 
                theCartItems: props.theCartItems, 
                cartSetter: props.cartSetter})
        } else {
            console.log('filters', props.filters)
            console.log('diet filters are ', props.filters.diet)
            console.log('legs filters are ', props.filters.legs)

            const dietFilters = props.filters.diet
            const legFilters = props.filters.legs
            var validDiet = false
            var validLegs = false

            if (dietFilters.length > 0){
                for (let i = 0; i < dietFilters.length; i++){
                    if (dietFilters[i] == item.diet){
                        validDiet = true
                    }
                }
            }
            else{
                console.log('noDietFilters!')
                validDiet = true
            }

            if (legFilters.length > 0){
                for (let i = 0; i < legFilters.length; i++){
                    console.log('legfilter ', legFilters[i])
                    console.log('itemdiet ', legFilters[i])
                    if (legFilters[i] == item.legs){
                        validLegs = true
                    }
                }
            }
            else{
                validLegs = true
                console.log('noLEGFilters!')
            } 

            if (validDiet && validLegs){
                console.log('valid! making product out of ', item.name)
                return  Product({
                    setCartSum: props.cartSumSetter,
                    cartSum: props.cartSum,
                    product: item,
                    name: item.name, 
                    priceTotal: props.priceTotal, 
                    setPriceTotal: props.setPriceTotal, 
                    theCartItems: props.theCartItems, 
                    cartSetter: props.cartSetter})
            }
            else{
                console.log('invalid because validdiet: ', validDiet, "validlegs ", validLegs)
            }

            // for (let i = 0; i < dietFilters.length; i++){
            //     console.log("filtering by " , dietFilters[i])

            //     //need to see if it matches ANY leg options not just [i]th
            //     if ((dietFilters.length == 0 | item.diet == dietFilters[i]) && (legFilters.length == 0 | item.legs == legFilters[i])) {
            //         console.log('diet: ', dietFilters[i])
            //         console.log('adding ', item.name)
            //         return  Product({
            //             product: item,
            //             name: item.name, 
            //             priceTotal: props.priceTotal, 
            //             setPriceTotal: props.setPriceTotal, 
            //             theCartItems: props.theCartItems, 
            //             cartSetter: props.cartSetter})
            //     }
            //     else{
            //         console.log('not adding ', item)
            //     }
            // }

            // const legFilters = props.filters.legs
            // console.log('legs filters are ', props.legFilters)
            // for (let i = 0; i < legFilters.length; i++){
            //     console.log("filtering by " , legFilters[i])
            //     console.log('item has ', item.legs, ' legs')
            //     console.log('filter has ', legFilters[i], ' legs')
            //     if (item.legs == legFilters[i]) {
            //         console.log('legs: ', legFilters[i])
            //         console.log('adding ', item.name)
            //         return  Product({
            //             product: item,
            //             name: item.name, 
            //             priceTotal: props.priceTotal, 
            //             setPriceTotal: props.setPriceTotal, 
            //             theCartItems: props.theCartItems, 
            //             cartSetter: props.cartSetter})
            //     }
            //     else{
            //         console.log('not adding ', item)
            //     }
            // }
        }
    }


    return(
        <div className= "bakeryGallery">
        {sortedArray.map((item) => ( // TODO: map bakeryData to BakeryItem components
            matchesFilterType(item) ))}      
     </div>
    )

    //sort array and then filter or filter and then sort array 
    //filter and sort scales better 

}