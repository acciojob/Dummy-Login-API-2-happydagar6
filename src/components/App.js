import React, { useState, useEffect } from 'react';

const dummyUsers = [
  { email: 'user@example.com', password: 'password123' },
  { email: 'test@example.com', password: 'password123' }
];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (email === '') {
      setUserError(false);
    }
    if (password === '') {
      setPasswordError(false);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUserError(false);
    setPasswordError(false);
    setSuccessMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      const foundUser = dummyUsers.find(user => user.email === email);

      if (!foundUser) {
        setUserError(true);
      } else if (foundUser.password !== password) {
        setPasswordError(true);
      } else {
        setUserError(false);
        setPasswordError(false);
        setSuccessMessage('Login successful!');
      }
    }, 3000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Login</h2>
      
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
        
        <div>
          <label style={{ display: 'block' }}>Email:</label>
          <input 
            type="email" 
            id="input-email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
          {userError && (
            <span id="user-error" style={{ color: 'red', fontSize: '14px', display: 'block', marginTop: '5px' }}>
              User not found
            </span>
          )}
        </div>

        <div>
          <label style={{ display: 'block' }}>Password:</label>
          <input 
            type="password" 
            id="input-password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
          {passwordError && (
            <span id="password-error" style={{ color: 'red', fontSize: '14px', display: 'block', marginTop: '5px' }}>
              Password Incorrect
            </span>
          )}
        </div>

        <button 
          type="submit" 
          id="submit-form-btn" 
          disabled={isLoading}
          style={{ padding: '10px', cursor: isLoading ? 'not-allowed' : 'pointer' }}
        >
          {isLoading ? 'Checking...' : 'Login'}
        </button>

      </form>
    </div>
  );
};

export default App;