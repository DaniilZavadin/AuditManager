import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './NoteForm.scss';

const NoteForm = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)

  const handleFileInput = (e) => {
    setFile(e.target.files[0])
  }

  const id = useSelector((state) => state.inspectionId)

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const details = e.target.details.value;

    //file uploading method
    const data = new FormData();
    if (file.type.includes('image')) data.append('file', file);
    else {
      toast.error('Woops! Something is wrong')
      return
    }
    axios.post('//localhost:8000/uploadfile', data)
      .then(res => {
        axios.post('//localhost:8000/addnote', {
          id: id,
          name: name,
          details: details,
          photo: Date.now() + res.data.filename
        })
          .then(res => {
            toast.success('Note added to you inspection!')
            navigate(-1)
          }).catch((err) => {
            console.error('Error', err)
          })
      })
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

export default NoteForm;