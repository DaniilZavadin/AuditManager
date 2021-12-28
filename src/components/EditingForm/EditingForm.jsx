import React, { useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import './EditingForm.scss';

const EditingForm = () => {
  const [file, setFile] = useState(null)

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    axios.post('//localhost:8000/upload', data)
      .then((e) => {
        console.log(e);
      }).catch((err) => {
        console.error('Error', err);
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          onChange={() => { }} />
      </label>
      <br />
      <label>
        Details:
        <input
          name="details"
          type="text"
          onChange={() => { }} />
      </label>
      <label>
        Photo:
        <div className="file-uploader">
          <input type="file" onChange={handleFileInput} />
        </div>
      </label>
      <button>nothing</button>
    </form>
  );
}

EditingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default EditingForm;