import React, { useState, useEffect } from 'react';
import './Form.css'; 

function Form() {
  //State for form fields
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  //State for password match status
  const [passwordMatch, setPasswordMatch] = useState(null);

  useEffect(() => {
    // Check if password and confirm password fields match
    if (formData.password === formData.confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [formData.password, formData.confirmPassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {passwordMatch === true && (
        <p className="match">Passwords match!</p>
      )}
      {passwordMatch === false && (
        <p className="nomatch">Passwords do not match.</p>
      )}
    </div>
  );
}

export default Form;