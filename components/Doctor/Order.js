import React from "react";
import { Card, CardBody, CardText, Container, Button } from "reactstrap";
import DrugInOrder from "./DrugInOrder";

// doctorId: "9be2f2d1-8658-4be3-b479-d7b982e0bfcc"
// drugList: Array(2)
// 0: {drugId: '028f71d3-a92d-4044-8d55-610607e2f265', drugName: 'd_name_1', drugQuantity: 10, expiryDate: '2024-05-22T00:00:00.000+00:00', price: 220, …}
// 1: {drugId: '8f5dbbea-ad4a-4768-82c5-5b4fa9954806', drugName: 'd_name_3', drugQuantity: 20, expiryDate: '2025-06-02T00:00:00.000+00:00', price: 150, …}
// length: 2
// [[Prototype]]: Array(0)
// orderId: "62f533b30aa1040390c70e17"
// pickedUp: true
// totalPrice: 5200
// verified: true

function Order({ order }) {
    console.log("single order component");
    console.log(order);

    return (
        <div>
            <Container>
                <Card>
                    <CardBody>
                        <CardText>Order id : {order.orderId}</CardText>
                        <CardText>Doctor id : {order.doctorId}</CardText>
                        <CardText>
                            Verified : {order.verified ? "true" : "false"}
                        </CardText>
                        <CardText>
                            Picked up : {order.pickedUp ? "true" : "false"}
                        </CardText>
                        {order.drugList.length > 0
                            ? order.drugList.map((d) => (
                                  <DrugInOrder key={d.drugId} drug={d} />
                              ))
                            : "empty drug"}
                        <CardText>Total Price : {order.totalPrice}</CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default Order;
