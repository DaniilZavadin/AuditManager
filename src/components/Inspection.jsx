import React from 'react';

const Inspection = ({ name, photo, details }) => {

return (
    <div className="inspection-wrapper">
        {photo && <img className='inspection-wrapper_image' src={photo} alt="issue-apperance" />}
        <div className='inspection-wrapper_name'>{name}</div>
        {details && <div className='inspection-wrapper_details'>{details}</div>}
    </div>
)}

export default Inspection;