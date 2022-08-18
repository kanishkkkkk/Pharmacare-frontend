import React, { useState } from "react";
import {
    Button,
    Form,
    Container,
    Input,
    Col,
    Row,
    FormGroup,
    Card,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../api's/base_url";

const Register = () => {
    const [Users, setUsers] = useState({});

    const handleForm = (e) => {
        console.log(Users);
        AddUser(Users);
        e.preventDefault();
    };

    const AddUser = (data) => {
        axios.post(`${baseUrl}/createUser`, data).then(
            (response) => {
                console.log(response);
                console.log("response");
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    };

    return (
        <div className="register my-2">
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Card className="p-4" color="secondary">
                            <Form onSubmit={handleForm}>
                                <FormGroup>
                                    <label className="m-2">Name</label>
                                    <Input
                                        className="m-2"
                                        type="text"
                                        placeholder="Enter Full Name"
                                        id="Name"
                                        name="userName"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                Name: e.target.value,
                                            });
                                        }}
                                    ></Input>

                                    <label className="m-2">Email</label>
                                    <Input
                                        className="m-2"
                                        type="email"
                                        placeholder="Enter Email Id"
                                        id="Email"
                                        name="userEmail"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                Email: e.target.value,
                                            });
                                        }}
                                    ></Input>

                                    <label className="m-2">Password</label>
                                    <Input
                                        className="m-2"
                                        type="password"
                                        placeholder="Enter Password"
                                        id="Pass"
                                        name="userPassword"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                Pass: e.target.value,
                                            });
                                        }}
                                    ></Input>

                                    <label className="m-2">Contact</label>
                                    <Input
                                        className="m-2"
                                        type="text"
                                        placeholder="Enter Contact Number"
                                        id="Contact"
                                        name="userContact"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                Contact: e.target.value,
                                            });
                                        }}
                                    ></Input>
                                    <label className="m-2">Role</label>
                                    <Input
                                        className="m-2"
                                        type="select"
                                        id="role"
                                        name="userRole"
                                        placeholder="select role"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                role: e.target.value,
                                            });
                                        }}
                                    >
                                        <option value="ROLE_DOCTOR">
                                            Doctor
                                        </option>
                                        <option value="ROLE_ADMIN">
                                            Admin
                                        </option>
                                    </Input>

                                    <Button
                                        color="dark"
                                        type="submit"
                                        className="m-2"
                                    >
                                        Register
                                    </Button>
                                    <Link to="/login">
                                        <Button color="dark" className="m-2">
                                            Login
                                        </Button>
                                    </Link>
                                </FormGroup>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
