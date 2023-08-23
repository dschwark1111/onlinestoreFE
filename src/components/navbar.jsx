import "./navbar.css"
import { Link } from "react-router-dom";
import DataContext from "../store/datacontext";
import { useContext } from "react";



function Navbar() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  function getProductCount() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity;
    }


    return total;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Grace in the Wild Co
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Admin Access
              </Link>
            </li>
          </ul>



          <form className="d-flex" role="search">
            <Link className="btn btn-dark" type="submit" to="/cart">
              {getProductCount()}
              <i class="fa-solid fa-cart-shopping"></i>

            </Link>
          </form>
        </div>
      </div>
    </nav>

  );
}


export default Navbar
