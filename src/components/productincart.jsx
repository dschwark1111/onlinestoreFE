import "./productincart.css"

function ProductInCart(props) {
    function getTotal() {
        const total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product-cart">
            <img src={"/images/" + props.data.image} alt=""></img>
            <div>
                <h5>{props.data.title}</h5>
            </div>
            <label>{props.data.category}</label>
            <label>${props.data.price.toFixed(2)}</label>
            <label>{props.data.quantity}</label>
            <label>${getTotal()}</label>

            <button className="btn btn-sm btn btn-dark">Remove</button>
        </div>

    );

}

export default ProductInCart;