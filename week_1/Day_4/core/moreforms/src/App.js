import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (data) => {
    setFormData(data);
    // Send the form data to a server-side API or perform other actions
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {formData.firstname && <p>Firstname: {formData.firstname}</p>}
      {formData.lastname && <p>Lastname: {formData.lastname}</p>}
      {formData.email && <p>Email: {formData.email}</p>}
      {formData.password && <p>Password: {formData.password}</p>}
      {formData.confirmPassword && <p>Confirm Password: {formData.confirmPassword}</p>}
    </>
  );
}

export default App;