import React from 'react';
import { Link } from 'react-router-dom'
import NoteForm from '../components/NoteForm/NoteForm';
import './pages.scss';


const CreateNote = () => {
    return (
        <div className="form-container">
            <Link to="/noteslist">
                <img class='form-container__link' src='back.png' alt='back' />
            </Link>
            <NoteForm />
        </div >
    )
}

export default CreateNote;