import React, { useEffect, useState } from 'react';  // Removed useEffect since it's not used here
import Logo from '../abacus2023.png';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import { Container, Card, Form, Button, Image } from "react-bootstrap";

const Login = () => {

  useEffect(() =>{
    {localStorage.getItem("token")?<Home/>:<Login/>}
  })

  const [credentials, setCredentials] = useState({ name: '', password: '' });

  const navigate = useNavigate();  

  const handleSumbit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, password: credentials.password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('name', json.name)
      localStorage.setItem('level', json.level);
      localStorage.setItem('token', json.authtoken);
      window.location.reload()
      navigate('/home'); 
    } else {
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Container>
    <Card className="shadow-lg">
      <Card.Header className="bg-success text-white">
        <h3 className="text-center">Sprouting Minds Abacus</h3>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={onChange} id="exampleInputEmail1" name="name" value={credentials.name}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" onChange={onChange} value={credentials.password}/>
          </Form.Group>
          <Button type="submit" onClick={handleSumbit} className="btn-success btn-block my-3">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </Container>
  );
};

export default Login;
 