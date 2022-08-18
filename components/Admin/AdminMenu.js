import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function AdminMenu() {
    return (
        <ListGroup>
            <Link
                className="list-group-item list-group-item-action"
                to="/admin/home"
            >
                Home Admin
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-orders"
            >
                View Orders
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-drugs"
            >
                View Drugs
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
            <Link
                className="list-group-item list-group-item-action"
                bg-color="red"
                to ="/home"
            >
                Logout
            </Link>
        </ListGroup>
    );
}
export default AdminMenu;
