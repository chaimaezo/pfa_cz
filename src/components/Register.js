import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';
import './AuthForm.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      alert('Verification email sent. Please check your inbox.');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="section full-height">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="d-flex justify-content-center mb-4">
                <label htmlFor="reg-log" className="link">Login</label>
                <label htmlFor="reg-log" className="link ml-4">Register</label>
              </div>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <form className="section text-center" onSubmit={handleRegister}>
                        <h4 className="mb-4 pb-3">Register</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-style"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            className="form-style"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button type="submit" className="btn mt-4">Register</button>
                      </form>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Login</h4>
                        <p className="mb-4">Enter your personal details and start your journey with us.</p>
                        <button onClick={() => navigate('/login')} className="btn mt-4">
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <label htmlFor="reg-log" className="link">Login</label>
                <label htmlFor="reg-log" className="link ml-4">Register</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
