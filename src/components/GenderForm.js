import React, { useState } from 'react';

const GenderForm = () => {
  const [gender, setGender] = useState('');
  const [shirtSize, setShirtSize] = useState('');
  const [dressSize, setDressSize] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleShirtSizeChange = (event) => {
    setShirtSize(event.target.value);
  };

  const handleDressSizeChange = (event) => {
    setDressSize(event.target.value);
  };

  return (
    
       <div>
      <div>
        <h1>Select Your Gender</h1>
        <label>
          <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} />
          Female
        </label>
      </div>

     

      {gender === 'Male' && (
        <div>
          <label htmlFor="shirtSize"><h1>Select Your Shirt Size:</h1></label><br />
          <select id="shirtSize" value={shirtSize} onChange={handleShirtSizeChange}>
            <option value="">Select shirt size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      )}

      {gender === 'Female' && (
        <div>
          <label htmlFor="dressSize"><h1>Select Your Dress Size:</h1></label><br />
          <select id="dressSize" value={dressSize} onChange={handleDressSizeChange}>
            <option value="">Select dress size</option>
            <option value="S">2</option>
            <option value="M">4</option>
            <option value="L">6</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default GenderForm;
