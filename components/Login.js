import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Card,
    Input,
    Form,
    FormGroup,
    Row,
    Col,
} from "reactstrap";
import axios from "axios";

const Login = () => {
    return (
        <div className=" login my-4">
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Card className="p-4" color="secondary">
                            <Form className="">
                                <FormGroup>
                                    <label className="m-2">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email Id"
                                        id="Email"
                                        name="Email"
                                        className="m-2"
                                    ></Input>
                                    <label className="m-2">Password</label>
                                    <Input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="Pass"
                                        name="pass"
                                        className="m-2"
                                    ></Input>
                                    <Button color="dark" className="m-2">
                                        login
                                    </Button>
                                    <Link to="/register">
                                        <Button color="dark" className="m-2">
                                            Register
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

export default Login;

// import { useState } from "react";
// import "./LoginForm.css";

// function Login() {
//     // React States
//     const [errorMessages, setErrorMessages] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     // User Login info
//     const database = [
//         {
//             username: "user1",
//             password: "pass1",
//         },
//         {
//             username: "user2",
//             password: "pass2",
//         },
//     ];

//     const errors = {
//         uname: "invalid username",
//         pass: "invalid password",
//     };

//     const handleSubmit = (event) => {
//         //Prevent page reload
//         event.preventDefault();

//         let { uname, pass } = document.forms[0];

//         // Find user login info
//         const userData = database.find((user) => user.username === uname.value);

//         // Compare user info
//         if (userData) {
//             if (userData.password !== pass.value) {
//                 // Invalid password
//                 setErrorMessages({ name: "pass", message: errors.pass });
//             } else {
//                 setIsSubmitted(true);
//             }
//         } else {
//             // Username not found
//             setErrorMessages({ name: "uname", message: errors.uname });
//         }
//     };

//     // Generate JSX code for error message
//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//             <div className="error">{errorMessages.message}</div>
//         );

//     // JSX code for login form
//     const renderForm = (
//         <div className="form">
//             <form onSubmit={handleSubmit}>
//                 <div className="input-container">
//                     <label>Username </label>
//                     <input type="text" name="userEmail" required />
//                     {renderErrorMessage("uname")}
//                 </div>
//                 <div className="input-container">
//                     <label>Password </label>
//                     <input type="password" name="userPassword" required />
//                     {renderErrorMessage("pass")}
//                 </div>
//                 <div className="button-container">
//                     <input type="submit" />
//                 </div>
//             </form>
//         </div>
//     );

//     return (
//         <div className="app">
//             <div className="login-form">
//                 <div className="title">Sign In</div>
//                 {isSubmitted ? (
//                     <div>User is successfully logged in</div>
//                 ) : (
//                     renderForm
//                 )}
//             </div>
//         </div>
//     );
// }
