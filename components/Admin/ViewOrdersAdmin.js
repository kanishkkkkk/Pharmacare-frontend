import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "reactstrap";
import baseUrl from "../../api's/base_url";
import OrderAdmin from "./OrderAdmin";

function ViewOrdersAdmin() {
    const [orders, setOrders] = useState({});

    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/order").then(
            (response) => {
                console.log(response.data);
                setOrders(response.data);
            },
            (error) => {
                console.log("error");
                setOrders({});
            }
        );
    };

    useEffect(() => {
        document.title = "Orders";
        getOrdersFromApi();
    }, []);

    return (
        <div>
            <h1>This is View ordes pages Admin</h1>
            <Container>
                {/* {console.log("view orders")}
                {console.log(orders)} */}
                {orders.length > 0
                    ? orders.map((o) => {
                          console.log("view order in map ");
                          console.log(o);
                          return <OrderAdmin key={o.orderId} order={o} />;
                      })
                    : "No order"}
            </Container>
        </div>
    );
}
export default ViewOrdersAdmin;
