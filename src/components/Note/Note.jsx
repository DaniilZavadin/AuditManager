import React from 'react';
import './Note.scss';

const Note = ({ name, photo, details }) => {

    return (
        <div className="inspection-wrapper" onClick={() => { }}>
            <div className="inspection-info">{name}</div>
            <div className="inspection-info">{details}</div>
            <img className="inspection-info" src={`http://localhost:8000/${photo}`} alt="description" />
        </div>
    )
}

Note.defaultProps = {
    name: 'Unknown',
    photo: "./undefined.jpg",
    details: 'Unknown',
};

export default Note;