import React, { useEffect, useState } from 'react';  // Removed useEffect since it's not used here
import Logo from '../abacus2023.png';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

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
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-auto">
          <img src={Logo} width={200} className="img-fluid" />

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input
              type="text"  // Changed type to 'text'
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
              name="name"
              value={credentials.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={onChange}
              value={credentials.password}
            />
          </div>

          <button onClick={handleSumbit} type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
 