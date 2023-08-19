import "./navbar.css"
import { Link } from "react-router-dom";
import Product from "./product";
import { useState } from "react";
import DataContext from "../store/datacontext";
import { useContext } from "react";
import Cart from "../pages/cart";
import GlobalState from "../store/globalstate";

function Navbar() {
  const user = useContext(DataContext).user;
  const Cart = useContext(DataContext).cart;

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

              {Cart.length}
              <i class="fa-solid fa-cart-shopping"></i>

            </Link>
          </form>
        </div>
      </div>
    </nav>

  );
}


export default Navbar
