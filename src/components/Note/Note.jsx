import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Note.scss';

const Note = ({ setNotes, issue, photo, recomendations, id }) => {

    const deleteNote = (e) => {
        axios.put('//localhost:8000/note', { delete: true })
        axios.get('//localhost:8000/data')
            .then(res => {
                setNotes(res.data)
            })
        toast.success('Note succsessfuly deleted!')
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    return (
        <div className="note-wrapper">
            <div className="note-wrapper__info">{issue}</div>
            <div className="note-wrapper__info">{recomendations}</div>
            <div className="note-wrapper__info">
                <img className="note-wrapper__image" src={`http://localhost:8000/${photo}`} alt="description" />
                <img class='note-wrapper__delete' onClick={deleteNote} src="delete.png" alt="delete" />
            </div>
        </div>
    )
}

Note.defaultProps = {
    issue: 'Unknown',
    photo: "undefined.jpg",
    recomendations: 'Unknown',
};

export default Note;