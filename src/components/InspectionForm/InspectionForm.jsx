import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './InspectionForm.scss';

const InspectionForm = ({ onSuccess }) => {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    const city = e.target.city.value;
    const desc = e.target.description.value;
    const inspector = e.target.inspector.value;

    e.preventDefault();
    axios.post('//localhost:8000/inspection',
      {
        id: city + Date.now(),
        city: city,
        description: desc,
        inspector: inspector,
        notes: []
      }).then(res => {
        toast.success('Insception succsessfuly added!')
        navigate(-1)
      }).catch((err) => {
        console.error('Error', err)
      })
  }

  return (
    <form id='creationForm' onSubmit={onSubmit}>
      <label>
        City:
        <input
          name="city"
          type="text"
          onChange={() => { }} />
      </label>
      <br />
      <label>
        Description:
        <input
          name="description"
          type="text"
          onChange={() => { }} />
      </label>
      <br />
      <label>
        Inspector:
        <input
          name="inspector"
          type="text"
          onChange={() => { }} />
      </label>
      <br />
      <button>Create</button>
    </form>
  );
}

export default InspectionForm;