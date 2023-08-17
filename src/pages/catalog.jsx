import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);
    useEffect(function () {
        console.log("the component is loaded");
        loadCatalog();
    }, []);

    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
        let cats = ["earrings", "boards", "other"];
        setCategories(cats);
        setProdsToDisplay(prods);
    }
    function filter(categories) {
        console.log(categories);

        let list = [];
        for (let i = 0; i < products.length; i++) {
            let prod = products[i];
            if (prod.category == categories) {
                list.push(prod);
            }
        }
        console.log(list);
        setProdsToDisplay(list);
    }

    function clearFilter() {
        setProdsToDisplay(products);
    };

    return (
        <div className="catalog page">
            <h1>Check out our {products.length} amazing products in our catalog!</h1>
            <br />
            <button onClick={clearFilter} className="btn btn-sm btn-dark btn-filter">All</button>
            {categories.map(c => <button key={c} onClick={() => filter(c)} className="btn btn-sm btn-dark btn-filter">{c}</button>)}
            <br />
            {prodsToDisplay.map(p => <Product key={p.id} data={p}></Product>)}
        </div>

    );

}

export default Catalog;