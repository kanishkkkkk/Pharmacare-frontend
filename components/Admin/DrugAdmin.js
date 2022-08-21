import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
    Table,
} from "reactstrap";
import baseUrl from "../../api's/base_url";
import UpdateDrug from "./UpdateDrug";

const DrugAdmin = ({ drug, flag, deletionView, index }) => {
    const deleteDrugHandler = () => {
        axios.delete(baseUrl + "/drug/" + drug.drugId).then(
            (response) => {
                console.log(response);
                deletionView(drug.drugId);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    const dummy = () => {};

    const dummy2 = () => {
        <Container>
            <Card>
                <CardBody>
                    {console.log("single drug")}
                    {console.log(drug)}
                    <CardSubtitle>Drug name : {drug.drugName} </CardSubtitle>
                    <CardText>Drug id : {drug.drugId}</CardText>
                    <CardText>Expiry date : {drug.expiryDate}</CardText>
                    <CardText>Quantity : {drug.drugQuantity}</CardText>
                    <CardText>Price : {drug.price} </CardText>
                </CardBody>
                {!flag ? (
                    <CardBody>
                        <Link to={"/admin/update-drug/" + drug.drugId}>
                            <Button className="mx-1">update</Button>
                        </Link>

                        <Button onClick={deleteDrugHandler}>delete</Button>
                    </CardBody>
                ) : (
                    ""
                )}
            </Card>
        </Container>;
    };

    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{drug.drugId}</td>
            <td>{drug.drugName}</td>
            <td>{drug.expiryDate}</td>
            <td> {drug.drugQuantity}</td>
            <td>{drug.price} </td>
            {!flag ? (
                <>
                    <td>
                        <Link to={"/admin/update-drug/" + drug.drugId}>
                            <Button color="primary" className="mx-1">
                                update
                            </Button>
                        </Link>
                        <Button color="danger" onClick={deleteDrugHandler}>
                            delete
                        </Button>
                    </td>
                </>
            ) : (
                <td></td>
            )}
        </tr>
    );
};

export default DrugAdmin;
