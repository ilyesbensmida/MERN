import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userCPass, setUserCPass] = useState('');

  const validateFirstname = (value) => {
    return value.length >= 2;
  };

  const validateLastname = (value) => {
    return value.length >= 2;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  const validateConfirmPassword = (value) => {
    return value === userPass;
  };

  const getInputClasses = (fieldName, isValid) => {
    return isValid? 'form-control is-valid' : 'form-control is-invalid';
  };

  const getErrorMessage = (fieldName, isValid) => {
    if (!isValid) {
      switch (fieldName) {
        case 'firstname':
          return 'Firstname must be at least 2 characters';
        case 'lastname':
          return 'Lastname must be at least 2 characters';
        case 'email':
          return 'Email is invalid';
        case 'password':
          return 'Password must be at least 8 characters';
        case 'confirmPassword':
          return 'Passwords must match';
        default:
          return '';
      }
    }
    return '';
  };

  return (
    <fieldset>
      <form>
        <input
          type="text"
          className={getInputClasses('firstname', validateFirstname(userFirstname))}
          value={userFirstname}
          onChange={(e) => setUserFirstname(e.target.value)}
        />
        <div className="invalid-feedback">{getErrorMessage('firstname', validateFirstname(userFirstname))}</div>
        <input
          type="text"
          className={getInputClasses('lastname', validateLastname(userLastname))}
          value={userLastname}
          onChange={(e) => setUserLastname(e.target.value)}
        />
        <div className="invalid-feedback">{getErrorMessage('lastname', validateLastname(userLastname))}</div>
        <input
          type="text"
          className={getInputClasses('email', validateEmail(userEmail))}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <div className="invalid-feedback">{getErrorMessage('email', validateEmail(userEmail))}</div>
        <input
          type="password"
          className={getInputClasses('password', validatePassword(userPass))}
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
        />
        <div className="invalid-feedback">{getErrorMessage('password', validatePassword(userPass))}</div>
        <input
          type="password"
          className={getInputClasses('confirmPassword', validateConfirmPassword(userCPass))}
          value={userCPass}
          onChange={(e) => setUserCPass(e.target.value)}
        />
        <div className="invalid-feedback">{getErrorMessage('confirmPassword', validateConfirmPassword(userCPass))}</div>
      </form>
    </fieldset>
  );
};

export default Form;