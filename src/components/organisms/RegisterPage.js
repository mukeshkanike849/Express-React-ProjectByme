import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'

const RegisterPage = () => {

    // To store register details :
    const [registerDetails, setregisterDetails] = useState({
        email: "",
        password: "",
        userName: "",
        mobileNo: "",
        dateOfBirth: "",
        role: ""
    })

    // Onchange function to store register details in "registerDetails" state :
    const handleChange = (e) => {
        setregisterDetails({
            ...registerDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleRegisterBtn = (e) => {
        e.preventDefault()
        console.log('registerDetails : ', registerDetails)
        
    }

    return (
        <div className='mainDiv'>
            <h3 style={{ color: '#FFD700', fontFamily: 'serif', textAlign: 'center' }}>Register Here :</h3>
            <Form className='mainFormRegistration container'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={registerDetails.email} onChange={handleChange} />
                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={registerDetails.password} onChange={handleChange} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: 'white' }}>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="userName" value={registerDetails.userName} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: 'white' }}>Mobile No.</Form.Label>
                    <Form.Control type="text" placeholder="Mobile No." name="mobileNo" value={registerDetails.mobileNo} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: 'white' }}>Date Of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Date Of Birth" name="dateOfBirth" value={registerDetails.dateOfBirth} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" className='loginBtn' onClick={handleRegisterBtn}>
                    Register
                </Button>
                <Button variant="primary" type="submit" className='loginBtn'>
                    Cancel
                </Button>
            </Form>
        </div>
    )
}

export default RegisterPage