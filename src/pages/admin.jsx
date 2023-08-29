import { useEffect, useState } from 'react';
import "./admin.css";
import DataService from '../services/dataService';



function Admin() {
    const [product, setProduct] = useState({ title: '', category: '', image: '', price: '' });
    const [allProducts, setAllProducts] = useState([]);

    useEffect(function () {
        loadData();
    }, []);

    async function loadData() {
        let service = new DataService();
        const prods = await service.getProducts();
        setAllProducts(prods);
    }

    function handleInputChange(e) {

        const val = e.target.value;
        const name = e.target.name;

        //create copy, modify, set copy back
        let copy = { ...product };
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        let copy = { ...product };
        copy.price = parseFloat(copy.price);
        let service = new DataService();
        service.saveProduct(copy);


        function clearForm() {
            setProduct({ title: '', category: '', image: '', price: '' });
        }
    }
    return (<div className="admin">
        <h1>Store Management</h1>

        <div className="parent-container">
            <h3> Register New Product</h3>
            <div>
                <label className="form-label">Title</label>
                < input value={product.title} onChange={handleInputChange} name="title" input type="text" className="form-control" />
            </div>
            <div>
                <label className="form-label">Category</label>
                <input input value={product.category} onChange={handleInputChange} name="category" type="text" className="form-control" />
            </div>
            <div>
                <label className="form-label">Image</label>
                <input input value={product.image} onChange={handleInputChange} name="image" type="text" className="form-control" />
            </div>
            <div>
                <label className="form-label">Price</label>
                <input input value={product.price} onChange={handleInputChange} name="price" type="number" className="form-control" />
            </div>
            <div className="admin button" onClick={saveProduct}>
                <button type="button" className="btn btn-dark">Save Product</button>
            </div>

            <hr />

            <ul className='product-list'>
                {allProducts.map(prod => <li key={prod._id}>{prod.title}  ${prod.price} <button className='btn btn btn-dark'> Remove</button></li>)}
            </ul>
        </div>
    </div>
    );


}

export default Admin;