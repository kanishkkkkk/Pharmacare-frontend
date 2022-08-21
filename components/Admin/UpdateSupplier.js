import React from "react";
import { Input, Form, FormGroup, Container, Card, Button } from "reactstrap";

const UpdateSupplier = () => {
    return (
        <div>
            <h1>View Supplier</h1>
            <Container>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label>Supplier Id</label>
                            <Input
                                type="text"
                                placeholder="Enter Supplier Id"
                                id="SupId"
                                name="supplierId"
                            ></Input>
                            <label>Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Supplier Name"
                                id="SupName"
                                name="supplierName"
                            ></Input>
                            <label>Email</label>
                            <Input
                                type="email"
                                placeholder="Enter supplier Email Id"
                                id="SupEmail"
                                name="supplierEmail"
                            ></Input>
                            <label>Contact</label>
                            <Input
                                type="text"
                                placeholder="Enter supplier Contact Number"
                                id="SupContact"
                                name="supplierContact"
                            ></Input>
                            <Button color="dark" type="submit">
                                Update
                            </Button>
                            <Button color="dark" type="submit">
                                Delete
                            </Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default UpdateSupplier;
