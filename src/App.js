import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    DateofBirth: '',
    Bvn: '',
    AccountNumber: '',
    state: '',
    lga: '',
    bl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <div className="form-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-column">
          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="dateofbirth">Date Of Birth:</label>
            <input
              type="number"
              id="dateofbirth"
              name="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="bvn">BVN:</label>
            <input
              type="number"
              id="bvn"
              name="bvn"
              value={formData.bvn}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-column">
          <div className="form-field">
            <label htmlFor="number">Account Number:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {/* Add options for states */}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="bl">Business Line</label>
            <select
              id="bl"
              name="bl"
              value={formData.bl}
              onChange={handleChange}
            >
              <option value="">Business Line</option>
              {}
            </select>
          </div>
        </div>
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
