import React from "react";
import DrugAdmin from "./DrugAdmin";
import {
    Card,
    CardBody,
    CardText,
    Container,
    Button,
    Row,
    Col,
} from "reactstrap";

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
const OrderAdmin=({ order })=> {
    console.log("single order component");
    console.log(order);

    return (
        <div>
            <Container>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={2}>
                                <CardText>Order id : {order.orderId}</CardText>
                            </Col>
                            <Col md={2}>
                                <CardText>
                                    Doctor id : {order.doctorId}
                                </CardText>
                            </Col>
                            <Col md={2}>
                                <CardText>
                                    Verified :{" "}
                                    {order.verified ? "true" : "false"} Picked
                                    up : {order.pickedUp ? "true" : "false"}
                                </CardText>
                            </Col>
                            {/* <Col md={2}>
                                <CardText></CardText>
                            </Col> */}
                            <Col md={5}>
                                {order.drugList.length > 0
                                    ? order.drugList.map((d) => (
                                          <DrugAdmin
                                              key={d.drugId}
                                              drug={d}
                                              flag={true}
                                          />
                                      ))
                                    : "empty drug"}
                            </Col>
                            <Col>
                                <CardText>
                                    Total Price : {order.totalPrice}
                                </CardText>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default OrderAdmin;
