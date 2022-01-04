import React, { useState } from 'react';
import axios from "axios";
import { setNoteData } from '../../store/operations';
import { toast } from 'react-toastify'
import Inspection from '../Inspection/Inspection'
import './Form.scss';

const Form = ({ onSuccess }) => {
  const [file, setFile] = useState(null)

  const handleFileInput = (e) => {
    console.log(e.target.value);
    // setFile()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const creationForm = Document.getElementById('creationForm')
    const data = new FormData(creationForm);
    if (file.type.includes('image')) data.append('file', file);
    else {
      toast.error('Woops! Something is wrong')
      return
    }
    axios.post('//localhost:8000/upload', data)
      .then(res => {
        toast.success('Note added to you inspection!')
        onSuccess(res.data)
      }).catch((err) => {
        console.error('Error', err)
      })
    console.log(data);
    // setNoteData({
    //   name: e.target.name.value,
    //   details: e.target.details.value,
    //   photo: `//localhost:8000/${}`
    // })
  }

  return (
    <form id='creationForm' onSubmit={onSubmit}>
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
      <br />
      <label>
        Photo:
        <input
          type="file"
          onChange={handleFileInput} />
      </label>
      <br />
      <button>Create</button>
    </form>
  );
}

export default Form;