import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EditingForm.scss';

const EditingForm = () => {
  const [file, setFile] = useState(null)

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  }

  const onSublit = (e) => {
    e.preventDefault();
    
  }

  return (
    <form>
      <label>
        Name:
        <input
          name="name"
          type="text"
          onChange={handleFileInput } />
      </label>
      <br />
      <label>
        Details:
        <input
          name="details"
          type="text"
          onChange={handleFileInput } />
      </label>
      <label>
        Photo:
        <div className="file-uploader">
          <input type="file" onChange={handleFileInput } />
          <button>nothing</button>
        </div>
      </label>
    </form>
  );
}

EditingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default EditingForm;