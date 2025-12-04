import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Attempting signup for:', email);
    
    
    alert("Signup successful! Redirecting to login.");
    navigate('/login'); 
  };

  return (
    <div className="auth-form-container">
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
         <input
           type="text"
           placeholder="Full Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           required
         />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
}

export default Signup;