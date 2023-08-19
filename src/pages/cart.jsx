import "./cart.css"
import { Link } from 'react-router-dom'
import DataContext from "../store/datacontext";
import { createContext, useContext } from "react";
import GlobalState from "../store/globalstate";
import Product from "../components/product";

function Cart() {
    const cart = useContext(DataContext).cart;

    return (<div className="cart page">
        <h1>Your Cart</h1>
        <h5>You have {cart.length} products in your cart.</h5>
    </div>
    );
}

export default Cart;