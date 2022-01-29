import React, { useState } from 'react';
import './InspectionForm.scss';

const InspectionForm = ({ onSuccess }) => {
  const onSubmit = (e) => {
    e.preventDefault();
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