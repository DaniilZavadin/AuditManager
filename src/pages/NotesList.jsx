import React from 'react';
import { Link } from 'react-router-dom'
import Note from '../components/Note/Note';

const NotesList = () => {
    return (
        <div className="notes-container">
            <Link to="/inspections">&lt;</Link>
            <Link to="/createnote">+</Link>
            <Note name={"name"} photo={"photo"} details={"details"} />
        </div >
    )
}

export default NotesList;