import React from 'react';
import './Note.scss';

const Note = ({ issue, photo, recomendations }) => {

    console.log(photo);
    return (
        <div className="inspection-wrapper">
            <div className="inspection-info">{issue}</div>
            <div className="inspection-info">{recomendations}</div>
            <img className="inspection-info" src={`http://localhost:8000/${photo}`} alt="description" />
        </div>
    )
}

Note.defaultProps = {
    issue: 'Unknown',
    photo: "./undefined.jpg",
    recomendations: 'Unknown',
};

export default Note;