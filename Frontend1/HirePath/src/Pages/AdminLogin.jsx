import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Make sure this is inside the component

  const handleLogin = async () => {
    try {
      const response = await fetch('https://update-productio-project-backend.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        setError(data.message);
        return;
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token); // Store token in localStorage
  
      // Log and navigate
      console.log('Login successful, navigating to /admin...');
      navigate('/admin'); // Use navigate for redirection
    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong.');
    }
  };
  
  return (
    <div>
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <button onClick={() => navigate('/admin')}>Go to Admin Panel</button>

    </div>
  );
};

export default AdminLogin;
