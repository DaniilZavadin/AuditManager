import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './NoteForm.scss';
import { useSelector } from 'react-redux';

const NoteForm = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const id = useSelector(state=>state.currentInspectionId)

  const handleFileInput = (e) => {
    setFile(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const issue = e.target.issue.value;
    const recomendations = e.target.recomendations.value;

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
          issue: issue,
          recomendations: recomendations,
          photo: res.data.filename
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
      Issue:
        <input
          name="issue"
          type="text"
          onChange={() => { }} />
      </label>
      <br />
      <label>
      Recomendations:
        <input
          name="recomendations"
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