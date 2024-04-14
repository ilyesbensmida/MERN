import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData(data);
    console.log(data); // Optional: Log data for further processing
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span className="error">First Name is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span className="error">Last Name is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
          />
          {errors.email && <span className="error">Please enter a valid email</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="error">
              Password is required and must be at least 8 characters
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === formData.password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Form Data:</h2>
      {/* <pre className="form-data">{JSON.stringify(formData, null, 2)}</pre> */}
    </div>
  );
}

export default MyForm;
