import React, { useState } from 'react';
// import axios from "axios";
// import { toast } from 'react-toastify'
// import Inspection from '../Inspection/Inspection'
import './Form.scss';

const Form = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ photo: null, name: null, details: null })

  const handleFileInput = (e) => {
    setFormData({});
    console.log(formData);
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   if (file.type.includes('image')) data.append('file', file);
  //   else {
  //     toast.error('Woops! Something is wrong')
  //     return
  //   }
  //   axios.post('//localhost:8000/upload', data)
  //     .then(res => {
  //       toast.success('Note added to you inspection!')
  //       onSuccess(res.data)
  //     }).catch((err) => {
  //       console.error('Error', err)
  //     })

  //   return (<Inspection
  //     name={e.target.name.value}
  //     details={e.target.details.value}
  //     photo={`//localhost:8000/{$}`}
  //   />)
  // }

  return (
    // <form onSubmit={onSubmit}>
    <form>
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

export default Form;