import React, { useState, useEffect } from 'react';

// Insert the original predefined user data provided in your assignment here
const dummyUsers = [
  { email: 'test@example.com', password: 'password123' }
];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);

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
      }
    }, 3000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
        
        <div>
          <input 
            type="email" 
            id="input-email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {userError && (
            <span id="user-error" style={{ color: 'red', display: 'block', marginTop: '5px' }}>
              User not found
            </span>
          )}
        </div>

        <div>
          <input 
            type="password" 
            id="input-password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {passwordError && (
            <span id="password-error" style={{ color: 'red', display: 'block', marginTop: '5px' }}>
              Password Incorrect
            </span>
          )}
        </div>

        <button 
          type="submit" 
          id="submit-form-btn" 
          disabled={isLoading}
          style={{ padding: '10px' }}
        >
          {isLoading ? 'Checking...' : 'Submit'}
        </button>

      </form>
    </div>
  );
};

export default App;