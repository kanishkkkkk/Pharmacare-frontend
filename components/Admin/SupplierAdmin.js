import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";

const SupplierAdmin = ({ supplier, flag }) => {
    return (
        <div>
            {/* {console.log(supplier)} supplierId: '8f5dbbea-ad4a-4768-82c5-5b4fa9954806', supplierName: 'd_name_3', supplierQuantity: 380, expiryDate: '2025-06-02T00:00:00.000+00:00', price: 150, …*/}
            <Container>
                <Card>
                    <CardBody>
                        {console.log("single supplier")}
                        {console.log(supplier)}
                        <CardSubtitle>
                            supplier name : {supplier.supplierName}{" "}
                        </CardSubtitle>
                        <CardText>supplier id : {supplier.supplierId}</CardText>
                        <CardText>supplier email : {supplier.supplierEmail}</CardText>
                        <CardText>supplier contact : {supplier.supplierContact}</CardText>
                        
                    </CardBody>
                    {!flag ? (
                        <CardBody>
                            <Button className="mx-1">update</Button>
                            <Button>delete</Button>
                        </CardBody>
                    ) : (
                        ""
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default SupplierAdmin;
