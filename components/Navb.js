import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavItem} from "reactstrap";

function Navb() {
    return (
        <div>
            <Navbar color="secondary" light expand container="lg">
                <NavbarBrand>PHARMACARE</NavbarBrand>
                <Nav>
                    <NavItem className="mx-2">
                        <Button color="primary">
                            <Link
                                className="list-group-item list-group-item-action"
                                to="/doctor/home"
                            >
                                Doctor
                            </Link>
                        </Button>{" "}
                    </NavItem>
                    <NavItem>
                        <Button color="primary">
                            <Link
                                className="list-group-item list-group-item-action"
                                to="/admin/home"
                            >
                                Admin
                            </Link>
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navb;
