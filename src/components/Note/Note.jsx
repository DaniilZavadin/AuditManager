import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Note.scss';
import { useSelector } from 'react-redux';

const Note = ({ setNotes, issue, photo, recomendations, id }) => {

    const inspecId = useSelector(state => state.currentInspectionId)

    const deleteNote = () => {
        axios.put('//localhost:8000/note', {
            delete: true,
            noteId: id,
            inspecId: inspecId
        }).then(res => {
            axios.get('//localhost:8000/data')
                .then(res => {
                    const data = res.data.find(el => el.id === inspecId)
                    console.log(data.notes);
                    setNotes(data.notes)
                })
        })
        toast.success('Note succsessfuly deleted!')
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