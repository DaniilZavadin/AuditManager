import React, { useState } from 'react';
import axios from "axios";
import { setNoteData } from '../../store/operations';
import { toast } from 'react-toastify'
import Inspection from '../Inspection/Inspection'
import './Form.scss';

const Form = ({ onSuccess }) => {
  const [file, setFile] = useState(null)

  const handleFileInput = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const details = e.target.details.value;

    axios.post('//localhost:8000/uploadjson', {
      name: name,
      details: details,
      photo: `aaa`
    })

    //file uploading method
    const data = new FormData();
    if (file.type.includes('image')) data.append('file', file);
    else {
      toast.error('Woops! Something is wrong')
      return
    }
    // axios.post('//localhost:8000/uploadfile', data)
      // - - - - - - - - - -
      // .then(res => {
        // console.log(res.data);
        // axios.post('//localhost:8000/uploadjson', {
        //   name: name,
        //   details: details,
        //   photo: `${res.path}`
        // })
        //   .then(res => {
        //     toast.success('Note added to you inspection!')
        //     onSuccess(res.data)
        //   }).catch((err) => {
        //     console.error('Error', err)
        //   })
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