import React from 'react';
import './Inspection.scss';

const Inspection = ({ name, photo, details }) => {

return (
    <div className="inspection-wrapper">
        <div className='inspection-wrapper__name'>{name}</div>
        {details && <div className='inspection-wrapper__details'>{details}</div>}
        {photo && <img className='inspection-wrapper__image' src={photo} alt="issue-apperance" />}
    </div>
)}

Inspection.defaultProps = {
    name: 'Unknown',
    photo: "/unknown.jpg",
    details: 'Unknown',
  };

export default Inspection;