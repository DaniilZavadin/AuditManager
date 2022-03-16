import React from 'react';
import axios from 'axios';
import './Note.scss';

const Note = ({ issue, photo, recomendations }) => {

    const deleteNote = () => {
        axios.delete('//localhost:8000/note')
    }

    return (
        <div className="note-wrapper">
            <div className="note-wrapper__info">{issue}</div>
            <div className="note-wrapper__info">{recomendations}</div>
            <div className="note-wrapper__info">
                <img className="note-wrapper__image" src={`http://localhost:8000/${photo}`} alt="description" />
            </div>
            <img onClick={deleteNote} src="delete.png" alt="delete" />
        </div>
    )
}

Note.defaultProps = {
    issue: 'Unknown',
    photo: "./undefined.jpg",
    recomendations: 'Unknown',
};

export default Note;