import React from "react";
import { Input, Form, FormGroup, Container, Card, Button } from "reactstrap";

function AddDrug() {
    return (
        <div className="AddDrug my-2">
            <h1>ADD DRUG</h1>
            <Container>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label>Drug Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Drug Name"
                                id="DName"
                                name="drugName"
                            ></Input>
                            <label>Expiry Date</label>
                            <Input
                                type="date"
                                placeholder="Enter Expiry Date"
                                id="ExpDate"
                                name="drugExpiryDate"
                            ></Input>
                            <label>Quantity</label>
                            <Input
                                type="Number"
                                placeholder="Enter Quantity"
                                id="Qty"
                                name="drugQuantity"
                            ></Input>
                            <label>Price</label>
                            <Input
                                type="Number"
                                placeholder="Enter Drug Price"
                                id="price"
                                name="DrugPrice"
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

export default AddDrug;
