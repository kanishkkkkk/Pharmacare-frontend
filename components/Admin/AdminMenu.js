import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ListGroup, Navbar, NavbarBrand } from "reactstrap";
import "../../App.css";

function AdminMenu() {
    return (
        <div>
            <ListGroup>
                {/* <Navbar className="my-2" color="secondary" dark>
                    <NavbarBrand className="App">Menu</NavbarBrand>
                </Navbar> */}
                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/home"
                >
                    Home Admin
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/view-drugs"
                >
                    View Drugs
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/view-orders"
                >
                    ALL Orders
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/view-orders-new"
                >
                    New Orders
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/view-orders-verified"
                >
                    Verified Orders
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/view-orders-pickedup"
                >
                    Picked Up Orders
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/add-drug"
                >
                    Add Drug
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/view-supplier"
                >
                    View Supplier
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/admin/add-supplier"
                >
                    Add Supplier
                </Link>
            </ListGroup>
        </div>
    );
}
export default AdminMenu;
