import React, { useContext, useState } from "react"
import Button from 'react-bootstrap/Button'
import AppContext from "../context/AppContext"
import { Link } from "react-router-dom"
import Cart from "./Cart"

const AddToCartButton = (props) => {

    const context = useContext(AppContext)

    const [modalShow, setModalShow] = useState(false);

    function handleClick(e){
        context.addToCart(props.product)
    }

    const handleCartClick = () => {
        context.registryFeedbackOut()
        setModalShow(true)
    }

    return (
        <div>
            {context.cartItems.some(item => item.name === props.product.name)?
            <div> 
            <Button variant="outline-info" name="add-another" className="btn-sm mb-2" onClick={handleClick}>Add another</Button>
            <p className="small">Added to cart. <Link onClick={handleCartClick}>View it</Link></p>
            </div>
            : 
            <Button variant="outline-success" name="add" className="btn-sm mb-2" onClick={handleClick}>Add to cart</Button>
            }
            <Cart
                show={modalShow}
                onHide={()=>setModalShow(false)}
            />
        </div>
    )
}

export default AddToCartButton