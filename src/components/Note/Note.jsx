import React from 'react';
import './Note.scss';

const Note = ({ issue, photo, recomendations }) => {

    console.log(photo);
    return (
        <div className="note-wrapper">
            <div className="note-wrapper__info">{issue}</div>
            <div className="note-wrapper__info">{recomendations}</div>
            <div className="note-wrapper__info">
                <img className="note-wrapper__image" src={`http://localhost:8000/${photo}`} alt="description" />
            </div>
        </div>
    )
}

Note.defaultProps = {
    issue: 'Unknown',
    photo: "./undefined.jpg",
    recomendations: 'Unknown',
};

export default Note;