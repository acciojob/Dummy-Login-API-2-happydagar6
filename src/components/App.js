import React, { useState, useEffect } from 'react';

// Predefined user data to simulate a database
const dummyUsers = [
  { email: 'test@example.com', password: 'password123' },
  { email: 'admin@domain.com', password: 'admin' }
];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Clear errors when form inputs are cleared
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
    
    // Reset previous states before new submission
    setUserError(false);
    setPasswordError(false);
    setSuccessMessage('');
    setIsLoading(true);

    // Simulate asynchronous API call with a 3000ms timeout
    setTimeout(() => {
      setIsLoading(false);
      
      const foundUser = dummyUsers.find(user => user.email === email);

      if (!foundUser) {
        // User does not exist
        setUserError(true);
      } else if (foundUser.password !== password) {
        // User exists, but password doesn't match
        setPasswordError(true);
      } else {
        // Successful login
        setUserError(false);
        setPasswordError(false);
        setSuccessMessage('Login successful!');
      }
    }, 3000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Dummy Login</h2>
      
      {successMessage && <h3 style={{ color: 'green' }}>{successMessage}</h3>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
        
        {/* Email Input Field */}
        <div>
          <label style={{ display: 'block' }}>Email:</label>
          <input 
            type="email" 
            id="input-email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
          {/* Email Error Message */}
          {userError && (
            <span id="user-error" style={{ color: 'red', fontSize: '14px' }}>
              User not found
            </span>
          )}
        </div>

        {/* Password Input Field */}
        <div>
          <label style={{ display: 'block' }}>Password:</label>
          <input 
            type="password" 
            id="input-password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
          />
          {/* Password Error Message */}
          {passwordError && (
            <span id="password-error" style={{ color: 'red', fontSize: '14px' }}>
              Password Incorrect
            </span>
          )}
        </div>

        {/* Submit Button */}
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