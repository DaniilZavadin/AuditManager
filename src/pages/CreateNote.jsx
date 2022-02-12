import React from 'react';
import { Link } from 'react-router-dom'
import NoteForm from '../components/NoteForm/NoteForm';

const CreateNote = () => {
    return (
        <div className="inspections-container">
            <Link to="/noteslist"> &lt; </Link>
            <NoteForm/>
        </div >
    )
}

export default CreateNote;