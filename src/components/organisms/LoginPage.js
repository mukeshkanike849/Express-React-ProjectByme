import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginPage.css';
import Avatarr from './../atoms/Avatarr';

const LoginPage = () => {

    // To store the Role heading above the form in the Login Page :
    const [rolesToDisplayAboveForm, setrolesToDisplayAboveForm] = useState("Admin")

    // To change Role heading above the form in Login Page :
    const getRolesFromAvatarToDisplayAboveForm = (data) => setrolesToDisplayAboveForm(data)

    // State to store login Details :
    const [loginDetails, setloginDetails] = useState({
        email: "",
        password: "",
        role: rolesToDisplayAboveForm == "Admin" ? 0 : rolesToDisplayAboveForm == "Mentor" ? 1 : 2 
    })

    // Onchange function to store in "loginDetails" state :
    const handleChange = (e) => {
        setloginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginBtn = (e) => {
        e.preventDefault()
        console.log('loginDetails : ', loginDetails)
    }

    return (
        <div className="mainDiv">
            <Container>
                <Row>
                    <Col className='avatar container'>
                        <Avatarr getRolesFromAvatarToDisplayAboveForm={getRolesFromAvatarToDisplayAboveForm} />
                    </Col>
                    <Col className='mainForm container'>
                        <h3 style={{ color: '#FFD700', fontFamily: 'serif', textAlign: 'center' }}>{rolesToDisplayAboveForm}</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={loginDetails.email} onChange={handleChange} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={loginDetails.password} onChange={handleChange} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Show password" onClick='' />
                            </Form.Group> */}
                            <Button variant="primary" type="submit" className='loginBtn' onClick={handleLoginBtn} >
                                Login
                            </Button>
                            <Button variant="primary" type="submit" className='loginBtn'>
                                Cancel
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage