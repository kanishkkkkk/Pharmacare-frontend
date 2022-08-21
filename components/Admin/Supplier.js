import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";

import "../Style.css";

const Supplier = ({ supplier }) => {
    return (
        <div>
            <Container>
                <Card className="Card">
                    <CardBody>
                        <CardSubtitle>
                            User name : {supplier.supplierName}{" "}
                        </CardSubtitle>
                        <CardText>Users id : {supplier.supplierId}</CardText>
                        <CardText>
                            Users email : {supplier.supplierEmail}
                        </CardText>
                        <CardText>
                            Users contact : {supplier.supplierContact}{" "}
                        </CardText>
                    </CardBody>
                    <CardBody>
                        <Button className="mx-2">update</Button>
                        <Button>update</Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Supplier;
