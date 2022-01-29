import React from 'react';
import './Inspection.scss';

const Inspection = ({ name, photo, details }) => {

return (
    <div className="inspection-wrapper">
        <div className='inspection-wrapper__name'>{name}</div>
        {details && <div className='inspection-wrapper__details'>{details}</div>}
        {photo && <img className='inspection-wrapper__image' src={`//localhost/8000{$photo.filename}`} alt="issue-apperance" />}
    </div>
)}

Inspection.defaultProps = {
    name: 'Unknown',
    photo: "./undefined.jpg",
    details: 'Unknown',
  };

export default Inspection;