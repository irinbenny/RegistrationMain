import React, { useState } from 'react';
import './RegistrationForm.css'; // Import your CSS file for styling

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data
      console.log('Form submitted:', formData);
      window.alert('Registration successful!');
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = 'Username is required';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="registration-container mt-5">
      <h2 className='mb-3 ms-5 text-danger fw-bold'>Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <button className='bg-success' type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
