import React from 'react';
import '../style/Signup.css'; // optional, if you have global styles

import { Link } from 'react-router-dom';
import AuthForm from '../components/authform';

const signup1 = () =>{
  console.log("signup page loaded");
}


const Signup = () => {
  const handleSignup = ({ email, password }) => {
    // 🧠 Add your signup logic here (e.g., call API)
    console.log('Signing up with:', email, password);
    alert(`Signed up with: ${email}`);
  };

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <AuthForm
        onSubmit={handleSignup}
        buttonText="Sign Up"
        errorMessage=""
      />

      {/* 🔻 Navigation link to login page */}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
