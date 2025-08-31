import React, { useState } from 'react';
import './App.css'; // Make sure App.css exists and is linked properly

function App() {
  // State to store form data (name and email)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      
      ...prevData,
      [name]: value, // updates the correct field based on input name
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form reload
    console.log('Form submitted:', formData);
    alert(`Hello ${formData.name}, your email is ${formData.email}`);
    setFormData({ name: '', email: '' }); // reset form fields
  };

  return (
    <div className="form-container">
      <h2 className="form-title">React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
