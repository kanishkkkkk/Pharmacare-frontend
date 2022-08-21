import { useEffect, useState } from "react";
import { Button, Col, Form,  ListGroup, Row } from "react-bootstrap";
import {Input } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "./Context";
import '../Style.css';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.drugQuantity, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="drugContainer">
        <ListGroup>
          {cart.map((drugs) => (
            <ListGroup.Item key={drugs.drugId}>
              <Row>
                <Col md={2}>
                  <span>{drugs.drugId}</span>
                </Col>
                <Col md={2}>
                  <span>{drugs.drugName}</span>
                </Col>
                <Col md={2}>₹ {drugs.price}</Col>
                
                {/* 	<Col md={3}>
                  <Input 
                    
                    placeholder="Quantity"
                    type="number"
                    value={drugs.drugQuantity}
                    onChange={(e)=>
                    dispatch({
                      type:"CHANGE_CART_QTY",
                      payload:{
                        drugId: drugs.DrugId,
                        Quantity: e.target.value,
                      }
                    })}></Input>
                  </Col>    */}
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={drugs.drugQuantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          drugId: drugs.DrugId,
                          drugQuantity: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(drugs.drugQuantity).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                   ))}   
                  </Form.Control>
                    </Col> 
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: drugs,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div>
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" 
        disabled={cart.length === 0}
        onClick >
          Place order
        </Button>
      </div>
    </div>
  );
};

export default Cart;