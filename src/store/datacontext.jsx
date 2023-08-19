import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    user: [],
    addCart: () => { },
    removeCart: () => { },
});

export default DataContext;