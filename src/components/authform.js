import React, { useState } from 'react';

const AuthForm = ({ onSubmit, buttonText, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password }); // send data to parent (Login.js or Signup.js)
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {errorMessage && <p className="error">{errorMessage}</p>}
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
