import React, { useState } from "react";
import { Input, Form, FormGroup, Container, Card, Button } from "reactstrap";
import axios from "axios";
import baseUrl from "../../api's/base_url";
function AddOrder() {
    const [Order, setOrder] = useState({});

    const handleForm = (e) => {
        console.log(Order);
        AddOrder(Order);
        e.preventDefault();
    };

    const AddOrder = (data) => {
        console.log(data);
        axios.post(`${baseUrl}/order`, data).then(
            (response) => {
                console.log(response.data);
                console.log("response");
                alert("added Order");
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    };

    return (
        <div className="AddOrder my-2">
            <h1>ADD ORDER</h1>
            <Container>
                <Card className="p-4" color="secondary">
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <label>Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Order Name"
                                id="OrderName"
                                name="OrderName"
                                onChange={(e) => {
                                    setOrder({
                                        ...Order,
                                        orderName: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label>Email</label>
                            <Input
                                type="email"
                                placeholder="Enter Order Email Id"
                                id="OrderEmail"
                                name="OrderEmail"
                                onChange={(e) => {
                                    setOrder({
                                        ...Order,
                                        orderEmail: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label>Contact</label>
                            <Input
                                type="number"
                                placeholder="Enter Order Contact Number"
                                id="OrderContact"
                                name="OrderContact"
                                onChange={(e) => {
                                    setOrder({
                                        ...Order,
                                        orderContact: e.target.value,
                                    });
                                }}
                            ></Input>
                            <Button color="dark" type="submit">
                                Add
                            </Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default AddOrder;
