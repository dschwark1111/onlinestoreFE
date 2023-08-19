import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useEffect, useState } from "react";
import DataContext from "../store/datacontext";

function Product(props){
    const [quanity, setQuantity] = useState(1);
    const addCart = useContext(DataContext).addCart
    useEffect (function(){
        console.log("this is a product")
    },[]);

    function handleQuantityChange(qty) {
        setQuantity(qty);
    };

    function getPrice() {
        return props.data.price.toFixed(2)
    }
    function getTotal() {
        const total = props.data.price * quanity;
        return total.toFixed(2);
    }

    function addToCart() {
        const prodWithQty = {
            ...props.data,
            quanity: quanity
        };
        addCart(prodWithQty);
    }

    return(
        <div className="product">
            <img src={"/images/"+ props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>{getPrice}</label>
                <label>Total</label>
                <label>{getTotal()}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange} />

            <button onClick={addToCart} className="btn btn-dark btn-small">Add</button>
        </div>

    );
}

export default Product;