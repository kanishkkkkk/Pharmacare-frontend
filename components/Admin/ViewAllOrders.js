import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Acordion from "./Acordion";
import OrderAdmin from "./OrderAdmin";
function ViewAllOrders({ orders, updateViewOrder }) {
    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>All Orders</NavbarBrand>
            </Navbar>
            <Container>
                {console.log("view all  orders")}
                {console.log(orders.length)}
                {orders.length > 0
                    ? orders.map((o) => {
                          console.log("view order in map ");
                          //   console.log(o);
                          return (
                              <OrderAdmin
                                  key={o.orderId}
                                  order={o}
                                  updateViewOrder={updateViewOrder}
                              />
                          );
                      })
                    : "No order"}
            </Container>
        </div>
    );
}

export default ViewAllOrders;
