import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    onClose();
  };

return (
  <div className="auth-overlay">

    

    <div className="auth-popup">
      <span className="card-close" onClick={onClose}>×</span>
      <h2>{isLogin ? 'Login to UrbanView' : 'Create Account'}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input type="text" placeholder="Full Name" required />
        )}

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        {!isLogin && (
          <input type="password" placeholder="Confirm Password" required />
        )}

        <button type="submit" className="primary-btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <button className="google-btn">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
        />
        Continue with Google
      </button>

      <div className="auth-switch">
        {isLogin ? (
          <>Don’t have an account? <span onClick={() => setIsLogin(false)}>Register</span></>
        ) : (
          <>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></>
        )}
      </div>
    </div>
  </div>
);

}

export default AuthModal;

