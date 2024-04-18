import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/add-product.svg";
import list_product_icon from "../../assets/list-product.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/add/product"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" width={30} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/list/product"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" width={30} />
          <p>List Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
