import { useState } from "react";
import DataContext from "./datacontext";

function GlobalState(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "Dorothy", id: 123, email: "dorothy.schwark@gmail.com" });

    function addCart(prod) {
        let copy = [...cart];

        let found = false;

        for (let i = 0; i < copy.length; i++) {
            let prodInCart = copy[i];
            if (prod.id === prodInCart.id) {
                prodInCart.quantity += prod.quantity;
                found = true;
            }
        }
        if (!found) {
            copy.push(prod);
        }
        setCart(copy);
    }

    function removeCart() {
        console.log('global remove');
    }


    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addCart: addCart,
            removeCart: removeCart,
        }}>
            {props.children}
        </DataContext.Provider>
    );
}


export default GlobalState;