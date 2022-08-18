import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";
import {CartState} from "./Context";

const Drug = ({ drug }) => {
    
    const { state:{cart}, dispatch, } = CartState();
    return (
        <div>
            {/* {console.log(drug)} drugId: '8f5dbbea-ad4a-4768-82c5-5b4fa9954806', drugName: 'd_name_3', drugQuantity: 380, expiryDate: '2025-06-02T00:00:00.000+00:00', price: 150, …*/}
            <Container>
                <Card>
                    <CardBody>
                        {console.log("single drug")}
                        {console.log(drug)}
                        <CardSubtitle>
                            Drug name : {drug.drugName}{" "}
                        </CardSubtitle>
                        <CardText>Drug id : {drug.drugId}</CardText>
                        <CardText>Expiry date : {drug.expiryDate}</CardText>
                        <CardText>Quantity : {drug.drugQuantity}</CardText>
                        <CardText>Price : {drug.price} </CardText>
                    </CardBody>
                    <CardBody>{
                        cart.some((d)=> d.drugId===drug.drugId)?(
                            <Button variant="danger" onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: drug,
                                })
                              }>Remove from cart</Button>
                        ) : (
                        <Button disabled={drug.drugQuantity===0} onClick={()=>{
                            dispatch({
                                type:'ADD_TO_CART',
                                payload:drug
                            });
                        }}>
                            {drug.drugQuantity===0? "Out of stock":"Add to cart"}</Button>)
                    }
                        
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Drug;
