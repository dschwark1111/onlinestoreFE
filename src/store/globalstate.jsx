import { useState } from "react";
import DataContext from "./datacontext";

function GlobalState(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "Dorothy", id: 123, email: "dorothy.schwark@gmail.com" });

    function addCart(prod) {
        console.log("global add");
        let copy = [...cart];
        copy.push(prod);
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